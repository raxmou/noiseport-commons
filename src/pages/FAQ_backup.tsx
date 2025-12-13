import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "../components/FAQItem";

type FAQSection = "admin" | "user";

export default function FAQ() {
  const [activeSection, setActiveSection] = useState<FAQSection>("user");

  const adminFAQs = [
    {
      question: "How do I add a new user to NoisePort?",
      answer: (
        <>
          <p className="mb-3">
            There are two methods to add users to your NoisePort instance:
          </p>
          <p className="mb-2">
            <strong>Method 1: Via Headplane UI (Recommended)</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Access Headplane at{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{YOUR_DOMAIN}"}
              </code>
            </li>
            <li>Navigate to the Settings tab</li>
            <li>Click the "Create Pre-Auth Key" button</li>
            <li>
              Configure the key (choose namespace, set expiration, make it
              reusable if needed)
            </li>
            <li>Copy the generated pre-auth key</li>
          </ol>
          <p className="mb-2">
            <strong>Method 2: Via CLI</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`docker exec headscale headscale preauthkeys create \\
  --user main \\
  --reusable \\
  --expiration 24h`}
          </pre>
          <p>
            The <code>--reusable</code> flag allows the key to be used multiple
            times, and <code>--expiration</code> sets how long the key is valid.
          </p>
        </>
      ),
    },
    {
      question: "What do I give a new user to access the system?",
      answer: (
        <>
          <p className="mb-3">Provide the following to new users:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Your Headscale server URL</strong>:{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://{"{YOUR_DOMAIN}"}
              </code>{" "}
              or{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://{"{YOUR_IP}.sslip.io"}
              </code>
            </li>
            <li>
              <strong>Pre-auth key</strong>: The key you generated in Headplane
              or via CLI
            </li>
            <li>
              <strong>Server VPN hostname</strong>:{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                {"{SERVER_NAME}.{BASE_DOMAIN}"}
              </code>{" "}
              (e.g., <code>noiseport-server.headscale.local</code>)
            </li>
            <li>
              <strong>Service credentials</strong>: Usernames and passwords for
              Navidrome and Jellyfin
            </li>
            <li>
              <strong>Port numbers</strong>: Navidrome (4533), Jellyfin (8096)
            </li>
          </ol>
          <p>
            Direct users to the User FAQ section for platform-specific
            instructions on connecting their devices.
          </p>
        </>
      ),
    },
    {
      question: "How do I connect the server itself to the VPN?",
      answer: (
        <>
          <p className="mb-3">
            The server must join its own VPN network to make services accessible:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Generate a pre-auth key (via Headplane UI or CLI as described
              above)
            </li>
            <li>
              Install Tailscale on your server:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                curl -fsSL https://tailscale.com/install.sh | sh
              </pre>
            </li>
            <li>
              Connect to your Headscale instance:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`sudo tailscale up \\
  --login-server=https://{YOUR_DOMAIN} \\
  --authkey={YOUR_PREAUTH_KEY}`}
              </pre>
            </li>
            <li>
              Verify the connection:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                tailscale status
              </pre>
            </li>
            <li>
              Note the server's VPN hostname (it will appear in the output, e.g.,{" "}
              <code>noiseport-server</code>)
            </li>
            <li>
              Save this hostname in the setup wizard's Headscale step as{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                {"{SERVER_NAME}.{BASE_DOMAIN}"}
              </code>
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "How do I revoke a user's access?",
      answer: (
        <>
          <p className="mb-3">
            To remove a user's access to your NoisePort instance:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Access Headplane UI at{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{YOUR_DOMAIN}"}
              </code>
            </li>
            <li>Navigate to the Machines or Nodes section</li>
            <li>Find the user's device in the list</li>
            <li>Click the delete or remove option for that device</li>
            <li>Confirm the removal</li>
          </ol>
          <p className="mb-3">
            <strong>Via CLI:</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`# List all nodes to find the ID
docker exec headscale headscale nodes list

# Delete a specific node
docker exec headscale headscale nodes delete --identifier {NODE_ID}`}
          </pre>
          <p>
            Once removed, the user will immediately lose access to the VPN and
            all music services.
          </p>
        </>
      ),
    },
    {
      question: "What if I need to change the server's public domain?",
      answer: (
        <>
          <p className="mb-3">
            Changing your public domain requires reconfiguring several components:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Update your DNS records to point the new domain to your server's IP
            </li>
            <li>
              Modify the Caddyfile to use the new domain:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`# Edit wizard-config/caddy/Caddyfile
# Replace {YOUR_DOMAIN} with your new domain`}
              </pre>
            </li>
            <li>
              Update the Headscale configuration in{" "}
              <code>wizard-config/headscale/config/config.yaml</code> with the
              new server URL
            </li>
            <li>Restart the infrastructure services</li>
            <li>
              All users will need to reconnect their devices using the new domain
              URL
            </li>
          </ol>
          <p className="text-yellow-500">
            <strong>Warning:</strong> This is a disruptive change that will
            require all users to reconfigure their Tailscale clients.
          </p>
        </>
      ),
    },
    {
      question: "How do I monitor who's connected to the VPN?",
      answer: (
        <>
          <p className="mb-3">You can monitor connected devices in two ways:</p>
          <p className="mb-2">
            <strong>Method 1: Via Headplane UI</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Access Headplane at{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{YOUR_DOMAIN}"}
              </code>
            </li>
            <li>View the Machines or Nodes section</li>
            <li>
              You'll see all connected devices with their status, VPN IP
              addresses, and last seen time
            </li>
          </ol>
          <p className="mb-2">
            <strong>Method 2: Via CLI</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`# List all nodes with their status
docker exec headscale headscale nodes list

# Show detailed information about a specific node
docker exec headscale headscale nodes show --identifier {NODE_ID}`}
          </pre>
          <p>
            The output shows device names, VPN IPs, online status, and when they
            last connected.
          </p>
        </>
      ),
    },
  ];

  const userFAQs = [
    {
      question: "How do I connect to NoisePort for the first time?",
      answer: (
        <>
          <p className="mb-3">
            First, make sure you have received from your admin:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The Headscale server URL</li>
            <li>A pre-auth key</li>
            <li>The server's VPN hostname</li>
          </ul>
          <p className="mb-3">
            <strong>iOS (iPhone/iPad)</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Install the Tailscale app from the App Store</li>
            <li>Open the app and tap "Use custom coordination server"</li>
            <li>Enter your server URL and tap Next</li>
            <li>When prompted, paste your pre-auth key</li>
            <li>Enable the VPN connection</li>
          </ol>
          <p className="mb-3">
            <strong>Android</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Install the Tailscale app from Google Play</li>
            <li>Open the app and tap the menu</li>
            <li>Go to Settings → "Use custom coordination server"</li>
            <li>Enter your server URL and pre-auth key when prompted</li>
            <li>Connect to the VPN</li>
          </ol>
          <p className="mb-3">
            <strong>macOS / Windows</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Download and install Tailscale from{" "}
              <a
                href="https://tailscale.com/download"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tailscale.com/download
              </a>
            </li>
            <li>Open a terminal or command prompt</li>
            <li>
              Run:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`tailscale up \\
  --login-server=https://{YOUR_DOMAIN} \\
  --authkey={YOUR_KEY}`}
              </pre>
            </li>
          </ol>
          <p className="mb-3">
            <strong>Linux</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Install Tailscale:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                curl -fsSL https://tailscale.com/install.sh | sh
              </pre>
            </li>
            <li>
              Connect to the VPN:
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`sudo tailscale up \\
  --login-server=https://{YOUR_DOMAIN} \\
  --authkey={YOUR_KEY}`}
              </pre>
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "Which app should I use to listen to music?",
      answer: (
        <>
          <p className="mb-3">NoisePort provides two music streaming services:</p>
          <p className="mb-3">
            <strong className="text-primary">Navidrome</strong> (Recommended)
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Web interface</strong>: Open{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                http://{"{SERVER_VPN_HOSTNAME}"}:4533
              </code>{" "}
              in any browser
            </li>
            <li>
              <strong>Mobile apps</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>iOS: Substreamer, play:Sub, or Amperfy</li>
                <li>Android: Ultrasonic, Subtracks, or DSub</li>
              </ul>
            </li>
            <li>Lighter weight, faster, excellent for music-only streaming</li>
            <li>Supports scrobbling to Last.fm</li>
          </ul>
          <p className="mb-3">
            <strong className="text-primary">Jellyfin</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Web interface</strong>: Open{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                http://{"{SERVER_VPN_HOSTNAME}"}:8096
              </code>{" "}
              in any browser
            </li>
            <li>
              <strong>Mobile apps</strong>: Official Jellyfin app available on
              iOS and Android
            </li>
            <li>Richer UI with album artwork and metadata</li>
            <li>Can also handle video content</li>
          </ul>
          <p>
            Most users prefer Navidrome for music streaming due to its
            specialized features and mobile app ecosystem.
          </p>
        </>
      ),
    },
    {
      question: "Why can't I access the music services without VPN?",
      answer: (
        <>
          <p className="mb-3">
            Music services in NoisePort are deliberately kept private and secure:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Security by design</strong>: Only VPN members can access
              the services, preventing unauthorized access
            </li>
            <li>
              <strong>No public exposure</strong>: Music servers are never
              exposed to the internet, protecting your library from external
              threats
            </li>
            <li>
              <strong>Encrypted connections</strong>: All traffic between you and
              the server is encrypted via WireGuard
            </li>
            <li>
              <strong>Privacy</strong>: Your listening habits and library content
              remain completely private
            </li>
          </ul>
          <p>
            This is a key feature, not a limitation. It ensures your music
            remains secure and accessible only to trusted members of your
            community.
          </p>
        </>
      ),
    },
    {
      question: "Do I need to be connected to the VPN all the time?",
      answer: (
        <>
          <p className="mb-3">
            You only need the VPN active when accessing NoisePort services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>For streaming</strong>: Yes, the VPN must be connected to
              access Navidrome or Jellyfin
            </li>
            <li>
              <strong>For offline listening</strong>: No, once you've downloaded
              music for offline use, you can disconnect the VPN
            </li>
            <li>
              <strong>For other internet activities</strong>: You can
              disable/enable the VPN as needed - it won't affect your regular
              internet access
            </li>
          </ul>
          <p className="mb-3">
            <strong>Pro tip</strong>: On mobile devices, you can configure
            Tailscale to connect automatically when launching music apps, and
            disconnect when you're done.
          </p>
          <p>
            The VPN connection is lightweight and uses minimal battery, so many
            users keep it on all the time for instant access.
          </p>
        </>
      ),
    },
    {
      question: "Can I download music for offline listening?",
      answer: (
        <>
          <p className="mb-3">
            Yes! Both Navidrome and Jellyfin support offline downloads:
          </p>
          <p className="mb-3">
            <strong>Navidrome Mobile Apps</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Most Navidrome-compatible apps (Substreamer, Ultrasonic, etc.)
              support downloading albums and playlists
            </li>
            <li>Look for a download icon or "Make Available Offline" option</li>
            <li>
              Downloaded music is cached on your device and playable without VPN
            </li>
          </ul>
          <p className="mb-3">
            <strong>Jellyfin Apps</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              The official Jellyfin mobile apps have built-in download
              functionality
            </li>
            <li>Tap the download icon on albums or tracks</li>
            <li>Manage downloads in the app's settings</li>
          </ul>
          <p>
            Once downloaded, you can enjoy your music offline without staying
            connected to the VPN.
          </p>
        </>
      ),
    },
    {
      question: "What if I get a new device?",
      answer: (
        <>
          <p className="mb-3">Setting up a new device is straightforward:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Ask your admin</strong> for a pre-auth key (they can reuse
              an existing key if it was created with the <code>--reusable</code>{" "}
              flag)
            </li>
            <li>
              <strong>Install Tailscale</strong> on your new device (see "How do
              I connect to NoisePort for the first time?" above)
            </li>
            <li>
              <strong>Connect</strong> using the same server URL and pre-auth key
            </li>
            <li>
              <strong>Access music services</strong> using the same URLs as
              before
            </li>
          </ol>
          <p className="mb-3">
            <strong>Important notes:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Your music service credentials (Navidrome, Jellyfin) remain the
              same across all devices
            </li>
            <li>
              Each device appears as a separate entry in the VPN, which helps
              with security monitoring
            </li>
            <li>
              If you're replacing an old device, consider asking your admin to
              remove the old device from the VPN
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Why do I need separate logins for Navidrome/Jellyfin?",
      answer: (
        <>
          <p className="mb-3">
            NoisePort uses a layered security approach with two levels of
            authentication:
          </p>
          <p className="mb-3">
            <strong>Layer 1: VPN Authentication</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Controls who can join your private network</li>
            <li>Managed through Headscale using pre-auth keys</li>
            <li>This is your "network-level" security</li>
          </ul>
          <p className="mb-3">
            <strong>Layer 2: Service Authentication</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Controls who can access specific music services (Navidrome,
              Jellyfin)
            </li>
            <li>Each service maintains its own user accounts and permissions</li>
            <li>This is your "application-level" security</li>
          </ul>
          <p className="mb-3">
            <strong>Why this matters:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Different people might have VPN access but different levels of
              access to services
            </li>
            <li>
              You can track individual listening habits and preferences per
              service
            </li>
            <li>
              It provides defense in depth - even if VPN access is compromised, a
              second layer protects your services
            </li>
          </ul>
          <p>
            Your admin will provide you with credentials for each service when
            they invite you to NoisePort.
          </p>
        </>
      ),
    },
    {
      question: "Can I share my access with friends?",
      answer: (
        <>
          <p className="mb-3">
            <strong className="text-yellow-500">
              Short answer: Please don't share your pre-auth key or credentials.
            </strong>
          </p>
          <p className="mb-3">Here's why:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Security risk</strong>: Sharing credentials compromises the
              entire network's security
            </li>
            <li>
              <strong>Accountability</strong>: The admin can't track who's
              accessing the system if multiple people use the same credentials
            </li>
            <li>
              <strong>Capacity</strong>: The system is designed for a limited
              number of users to maintain performance
            </li>
          </ul>
          <p className="mb-3">
            <strong>The right way to invite friends:</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Ask your NoisePort admin if they're willing to add new members
            </li>
            <li>
              If approved, the admin will generate a new pre-auth key for your
              friend
            </li>
            <li>Your friend gets their own account and credentials</li>
            <li>Everyone's access is secure and trackable</li>
          </ol>
          <p>
            Remember: NoisePort is about building trusted communities. If you
            want to invite more people, have a conversation with your admin
            first.
          </p>
        </>
      ),
    },
  ];

  return (
    <motion.main
      className="prose prose-invert mx-auto px-4 py-12 font-syne max-w-4xl pt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="font-kode text-primary text-4xl md:text-6xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-4 border-b border-neutral-800 mb-8">
          <button
            onClick={() => setActiveSection("user")}
            className={`pb-4 px-6 font-kode text-lg transition-colors relative ${
              activeSection === "user"
                ? "text-primary"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            User FAQ
            {activeSection === "user" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
              />
            )}
          </button>
          <button
            onClick={() => setActiveSection("admin")}
            className={`pb-4 px-6 font-kode text-lg transition-colors relative ${
              activeSection === "admin"
                ? "text-primary"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Admin FAQ
            {activeSection === "admin" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
              />
            )}
          </button>
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: activeSection === "user" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === "user" && (
            <div>
              <p className="text-neutral-300 mb-6">
                Questions and answers for end users accessing NoisePort. If
                you're looking for administrative guidance, check the Admin FAQ.
              </p>
              <div className="space-y-2">
                {userFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === "admin" && (
            <div>
              <p className="text-neutral-300 mb-6">
                Detailed guidance for server administrators managing a NoisePort
                instance. For user-facing questions, check the User FAQ.
              </p>
              <div className="space-y-2">
                {adminFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 p-6 bg-neutral-900 border border-neutral-800 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-kode text-xl text-primary mb-3">
          Still have questions?
        </h2>
        <p className="text-neutral-300 mb-4">
          Can't find what you're looking for? Check out our{" "}
          <a
            href="/how-it-works"
            className="text-primary underline hover:text-primary/80"
          >
            How It Works
          </a>{" "}
          page for more details about NoisePort's architecture, or visit our{" "}
          <a
            href="/contact"
            className="text-primary underline hover:text-primary/80"
          >
            Contact
          </a>{" "}
          page to get in touch with the community.
        </p>
      </motion.div>
    </motion.main>
  );
}
