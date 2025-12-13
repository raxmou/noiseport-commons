# NoisePort Architecture Overview

## System Components

### 1. **Infrastructure Layer (VPN & Reverse Proxy)**

#### Headscale
- **Purpose**: Self-hosted VPN coordination server (open-source Tailscale alternative)
- **Function**: Creates a private mesh network for secure access
- **Protocol**: WireGuard (fast, encrypted)
- **Runs on**: Port 8080
- **Access**: Via Caddy reverse proxy at `https://{YOUR_DOMAIN}` or `https://{YOUR_IP_SSLIP_DOMAIN}`

#### Caddy
- **Purpose**: Automatic HTTPS reverse proxy
- **Function**: 
  - Handles SSL certificates (Let's Encrypt)
  - Routes traffic to Headscale API and Headplane UI
  - Exposes only infrastructure publicly (not music services)
- **Runs on**: Ports 80/443
- **Routes**:
  - `https://{YOUR_DOMAIN}` → Headscale API
  - `https://admin.{YOUR_DOMAIN}` → Headplane UI

#### Headplane
- **Purpose**: Web UI for managing Headscale
- **Function**: 
  - User-friendly interface for VPN management
  - Create users/namespaces
  - Generate pre-auth keys
  - Monitor connected devices
- **Runs on**: Port 3000 (internal)
- **Access**: `https://admin.{YOUR_DOMAIN}` (via Caddy)

### 2. **Application Layer (Music Services)**

#### Navidrome
- **Purpose**: Music streaming server
- **Function**: Stream your music library, scrobble to Last.fm
- **Runs on**: Port 4533
- **Access**: `http://{SERVER_VPN_HOSTNAME}:4533` (VPN-only)

#### Jellyfin
- **Purpose**: Media server
- **Function**: Alternative music/media streaming with rich UI
- **Runs on**: Port 8096
- **Access**: `http://{SERVER_VPN_HOSTNAME}:8096` (VPN-only)

#### slskd
- **Purpose**: Soulseek client (P2P music sharing)
- **Function**: Download music from Soulseek network
- **Runs on**: Port 5030
- **Access**: `http://{SERVER_VPN_HOSTNAME}:5030` (VPN-only)

#### FastAPI (NoisePort Backend)
- **Purpose**: Backend API & Setup Wizard
- **Function**: 
  - Configuration management
  - Service orchestration
  - Integration between services
- **Runs on**: Port 8010 (music stack), Port 8000 (wizard)
- **Access**: `http://{SERVER_VPN_HOSTNAME}:8010` (VPN-only)

### 3. **Storage Layer**

#### Shared Volumes
```
wizard-config/
├── musice/
│   ├── complete/          # Downloaded music (read by Navidrome/Jellyfin)
│   ├── incomplete/        # In-progress downloads (slskd)
│   ├── downloads/         # Downloaded files
│   └── musiclibrary.db    # Shared database
├── headscale/
│   ├── config/           # Headscale configuration
│   └── data/             # VPN state/database
├── caddy/
│   └── Caddyfile         # Reverse proxy config
└── .env                  # Environment variables (includes VPN hostname)
```

## Network Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         INTERNET                            │
│                                                             │
│  ┌──────────────────────┐    ┌─────────────────────────┐  │
│  │  Public Access       │    │  VPN Users              │  │
│  │  (Infrastructure)    │    │  (Tailscale Clients)    │  │
│  │                      │    │                         │  │
│  │  Port 443 (HTTPS)    │    │  WireGuard Protocol     │  │
│  └──────────┬───────────┘    └────────────┬────────────┘  │
└─────────────┼──────────────────────────────┼───────────────┘
              │                              │
              ▼                              ▼
    ┌─────────────────┐          ┌─────────────────────┐
    │  Caddy Proxy    │          │  Headscale VPN      │
    │  :80, :443      │◄─────────┤  :8080, :41641      │
    └─────────┬───────┘          └─────────┬───────────┘
              │                            │
              │                            │
    ┌─────────▼─────────┐                  │
    │  Headplane UI     │                  │
    │  :3000 (admin.)   │                  │
    └───────────────────┘                  │
                                           │
                         ┌─────────────────┼─────────────────┐
                         │   VPN Network (100.64.0.0/10)     │
                         │   MagicDNS: *.{BASE_DOMAIN}       │
                         │                                    │
                         │   ┌────────────────────────────┐  │
                         │   │  Server                    │  │
                         │   │  VPN IP: 100.64.0.X        │  │
                         │   │  Hostname: {SERVER_NAME}.  │  │
                         │   │            {BASE_DOMAIN}   │  │
                         │   │                            │  │
                         │   │  ┌──────────────────────┐  │  │
                         │   │  │  Music Services      │  │  │
                         │   │  │  (Docker Network)    │  │  │
                         │   │  │                      │  │  │
                         │   │  │  Navidrome  :4533   │  │  │
                         │   │  │  Jellyfin   :8096   │  │  │
                         │   │  │  slskd      :5030   │  │  │
                         │   │  │  FastAPI    :8010   │  │  │
                         │   │  └──────────────────────┘  │  │
                         │   └────────────────────────────┘  │
                         │                                    │
                         │   ┌────────────────────────────┐  │
                         │   │  Client 1 (Mac/iOS)        │  │
                         │   │  VPN IP: 100.64.0.Y        │  │
                         │   │  Hostname: {CLIENT1_NAME}. │  │
                         │   │            {BASE_DOMAIN}   │  │
                         │   └────────────────────────────┘  │
                         │                                    │
                         │   ┌────────────────────────────┐  │
                         │   │  Client 2 (Windows)        │  │
                         │   │  VPN IP: 100.64.0.Z        │  │
                         │   │  Hostname: {CLIENT2_NAME}. │  │
                         │   │            {BASE_DOMAIN}   │  │
                         │   └────────────────────────────┘  │
                         └────────────────────────────────────┘
```

## Configuration Variables

### Admin Configures (Setup Wizard):

1. **Setup Mode**: 
   - IP-based: Uses `{YOUR_PUBLIC_IP}` → generates `{IP_WITH_DASHES}.sslip.io`
   - Domain-based: Uses your own domain `{YOUR_DOMAIN}`

2. **Base Domain**: 
   - Default: `headscale.local`
   - Customizable: `{BASE_DOMAIN}` (e.g., `mynetwork.vpn`)

3. **Server VPN Hostname**:
   - Retrieved after server joins VPN: `{SERVER_NAME}.{BASE_DOMAIN}`
   - Example: `noiseport-server.headscale.local`
   - Saved in wizard config and propagated to all services

### Auto-Generated:

- **VPN IP Range**: `100.64.0.0/10` (Headscale assigns automatically)
- **Machine Names**: Each device gets a unique name when joining
- **MagicDNS Hostnames**: `{MACHINE_NAME}.{BASE_DOMAIN}`

## How Users Access the System

### Admin Setup (One-time)

#### 1. Configure via Wizard
```
Access: http://{SERVER_IP}:8000/wizard
↓
Choose Setup Mode:
  - IP-based: Enter {YOUR_PUBLIC_IP}
    → Generates {IP_SSLIP_DOMAIN}
  - Domain-based: Enter {YOUR_DOMAIN}
↓
Configure Base Domain: {BASE_DOMAIN}
↓
Save Configuration → Generates all config files
↓
Launch Headscale → Starts VPN infrastructure
```

#### 2. Access Headplane UI
```
URL: https://admin.{YOUR_DOMAIN_OR_SSLIP}
↓
Generate API key:
  docker exec headscale headscale apikeys create
↓
Paste API key in Headplane
↓
Create user/namespace: "main" (or your choice)
↓
Navigate to Settings page for easy pre-auth key generation
```

#### 3. Connect Server to VPN
```bash
# Generate pre-auth key (via Headplane UI or CLI)
docker exec headscale headscale preauthkeys create --user main --reusable

# Install Tailscale on server
curl -fsSL https://tailscale.com/install.sh | sh

# Connect to your Headscale
sudo tailscale up \
  --login-server=https://{YOUR_DOMAIN_OR_SSLIP} \
  --authkey={YOUR_PREAUTH_KEY}

# Get server's VPN hostname
tailscale status
# Output shows: {SERVER_NAME} ({VPN_IP})
# Full hostname: {SERVER_NAME}.{BASE_DOMAIN}
```

#### 4. Save VPN Hostname in Wizard
```
Go to Headscale step in wizard
↓
Enter server hostname: {SERVER_NAME}.{BASE_DOMAIN}
↓
Click "Save VPN Hostname"
↓
This value is saved in .env as HEADSCALE_SERVER_VPN_HOSTNAME
↓
All service URLs now use this hostname
```

#### 5. Launch Music Services
```
Configure music paths in wizard
↓
Save configuration
↓
Launch Services
↓
Services bind to ports and are accessible via VPN hostname
```

### User Access (Ongoing)

#### For Each New User:

**1. Admin Generates Pre-Auth Key**
```
Via Headplane: 
  https://admin.{YOUR_DOMAIN}/admin/settings
  → "Create Pre-Auth Key" button
  
Or CLI:
  docker exec headscale headscale preauthkeys create \
    --user main --reusable --expiration 24h
```

**2. User Installs Tailscale Client**
- **iOS/Android**: Tailscale app from App Store/Play Store
- **Mac/Windows**: Tailscale desktop app
- **Linux**: `curl -fsSL https://tailscale.com/install.sh | sh`

**3. User Connects to Headscale**

*Desktop/Linux:*
```bash
tailscale up \
  --login-server=https://{YOUR_DOMAIN_OR_SSLIP} \
  --authkey={PROVIDED_KEY}
```

*Mobile/GUI:*
```
Open Tailscale app
→ Settings → Use custom coordination server
→ Enter: https://{YOUR_DOMAIN_OR_SSLIP}
→ Paste pre-auth key when prompted
→ Connect
```

**4. User Verifies Connection**
```bash
tailscale status
# Should see:
# {SERVER_NAME}    main  linux  active
# {YOUR_DEVICE}    main  {OS}   active (you)
```

**5. User Accesses Music Services**

Services are accessible via the **server's VPN hostname**:
```
Navidrome: http://{SERVER_NAME}.{BASE_DOMAIN}:4533
Jellyfin:  http://{SERVER_NAME}.{BASE_DOMAIN}:8096
slskd:     http://{SERVER_NAME}.{BASE_DOMAIN}:5030
FastAPI:   http://{SERVER_NAME}.{BASE_DOMAIN}:8010
```

**Example with defaults:**
```
If BASE_DOMAIN = "headscale.local"
And SERVER_NAME = "noiseport-server"
Then:
  Navidrome: http://noiseport-server.headscale.local:4533
  Jellyfin:  http://noiseport-server.headscale.local:8096
```

## Data Flow: Music Library Sharing

### Download Flow (slskd → Storage)
```
User opens: http://{SERVER_NAME}.{BASE_DOMAIN}:5030
↓
Searches in slskd web interface
↓
Downloads from Soulseek P2P network
↓
Saved to: /music/incomplete (during download)
↓
Moved to: /music/complete (when finished)
↓
Available to Navidrome & Jellyfin immediately
```

### Streaming Flow (Storage → User)
```
User opens: http://{SERVER_NAME}.{BASE_DOMAIN}:4533
↓
Navidrome web interface loads
↓
App reads from: /music/complete (Docker volume)
↓
Streams audio over VPN connection
↓
User's device plays music
```

## Access Control & Security

### Network Layers

**Layer 1: Public Internet**
- Only accessible: Headscale API + Headplane UI
- Ports: 80, 443 (HTTPS via Caddy)
- URLs: `https://{YOUR_DOMAIN}` and `https://admin.{YOUR_DOMAIN}`

**Layer 2: VPN Network**
- Accessible only to authorized VPN members
- Requires: Valid pre-auth key + Tailscale client
- Encryption: WireGuard (automatic, always on)

**Layer 3: Service Authentication**
- Each service has its own login:
  - Navidrome: Username/password
  - Jellyfin: Username/password
  - slskd: Password
- Even VPN members must log into each service

### Security Features

1. **VPN Authentication**: Must have valid pre-auth key from admin
2. **Service Authentication**: Each app has own login system
3. **Encryption**: All VPN traffic encrypted via WireGuard
4. **No Public Exposure**: Music services NOT accessible from internet
5. **Isolated Network**: VPN creates private network segment (100.64.0.0/10)
6. **Revocable Access**: Admin can remove devices from Headplane UI

## MagicDNS Explained

### What is MagicDNS?
- **Internal DNS** for the VPN network
- Automatically resolves machine names to VPN IPs
- No manual hosts file or IP management needed

### How it Works
```
Configuration:
  BASE_DOMAIN = "{BASE_DOMAIN}" (e.g., "headscale.local")
  
When device joins VPN:
  Device gets name: "{MACHINE_NAME}"
  Device gets VPN IP: "100.64.0.X"
  MagicDNS creates: "{MACHINE_NAME}.{BASE_DOMAIN}" → 100.64.0.X

Example:
  Server joins as "noiseport-server" → 100.64.0.3
  MagicDNS: noiseport-server.headscale.local → 100.64.0.3
  
  Client joins as "johns-macbook" → 100.64.0.4
  MagicDNS: johns-macbook.headscale.local → 100.64.0.4
```

### Benefits
- **Memorable**: Use names instead of IPs
- **Dynamic**: IPs can change, names stay the same
- **Automatic**: No manual DNS configuration
- **Consistent**: Works across all devices automatically

## Multi-User Benefits

### Shared Library
- Everyone accesses the same music collection
- Downloads from one user benefit all users
- Single source of truth for music database

### Collaborative Downloads
- Any VPN member can use slskd
- Downloaded music instantly available to all
- No need to redistribute files

### Synchronized State
- Shared database tracks play counts, favorites
- Scrobbling to Last.fm per user
- Library updates propagate automatically

### Flexible Clients
- Works on all platforms (iOS, Android, Windows, Mac, Linux)
- Each user chooses their preferred client (Navidrome mobile app, Jellyfin app, etc.)
- Same backend serves all clients

## Key Architectural Decisions

### Why Separate Infrastructure & Apps?

**Infrastructure (Public)**
```
Headscale + Caddy + Headplane
↓
Purpose: VPN coordination & management
↓
Needs: Public accessibility for device registration
↓
Security: HTTPS, controlled API keys
```

**Applications (VPN-Only)**
```
Navidrome + Jellyfin + slskd
↓
Purpose: Music services
↓
Needs: Only accessible to trusted users
↓
Security: VPN-only, no public exposure
```

### Why Use MagicDNS Hostnames?

**Instead of hardcoded IPs:**
```
❌ http://100.64.0.3:4533 (what if IP changes?)
✅ http://{SERVER_NAME}.{BASE_DOMAIN}:4533 (always works)
```

**Benefits:**
- IPs can change (DHCP, IP reassignment)
- Hostnames are memorable and user-friendly
- DNS automatically handles resolution
- Works consistently across all devices

### Why Save SERVER_VPN_HOSTNAME in Config?

**Problem:** Services need to know where the server is
**Solution:** Store server's VPN hostname in .env

```yaml
# .env
HEADSCALE_SERVER_VPN_HOSTNAME={SERVER_NAME}.{BASE_DOMAIN}

# This value is used by:
# - Frontend: Display correct service URLs
# - Backend: Generate connection strings
# - Services: Know how to reach each other
# - Users: Know where to connect
```

## Summary

**NoisePort is a flexible, self-hosted music platform where:**

1. **Admin configures once:**
   - Choose domain/IP setup mode
   - Set base domain for MagicDNS
   - Launch infrastructure
   - Connect server to VPN
   - Save server's VPN hostname

2. **System generates everything else:**
   - SSL certificates (automatic)
   - VPN IPs (automatic)
   - MagicDNS hostnames (automatic)
   - Service URLs (dynamic from config)

3. **Users join seamlessly:**
   - Install Tailscale client
   - Connect with pre-auth key
   - Access services via `{SERVER_NAME}.{BASE_DOMAIN}:PORT`
   - No hardcoded IPs or manual configuration

4. **Everyone benefits:**
   - Shared music library
   - Secure encrypted connections
   - Access from anywhere
   - Works on all platforms
   - Simple, memorable URLs

**The magic:** Once configured, the system uses variables (`{SERVER_NAME}`, `{BASE_DOMAIN}`, etc.) everywhere, making it portable, flexible, and easy to maintain. Users never need to know actual IPs - MagicDNS handles everything automatically.