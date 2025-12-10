import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <motion.main
      className="prose prose-invert mx-auto px-4 py-12 font-syne max-w-3xl pt-24"
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
        How It Works
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base text-neutral-50 leading-relaxed mb-6">
          NoisePort is a self-hosted music platform that combines the power of a
          private VPN with modern music streaming services. It gives you and your
          community secure access to a shared music library from anywhere in the
          world.
        </p>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Architecture Overview
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          NoisePort uses a two-layer architecture to keep your music private and
          secure:
        </p>
        <ul className="list-disc pl-6 mb-6 text-neutral-50">
          <li>
            <strong>Infrastructure Layer</strong>: A private VPN (powered by
            Headscale) creates an encrypted network that only authorized members
            can join
          </li>
          <li>
            <strong>Application Layer</strong>: Music services (Navidrome,
            Jellyfin) that are only accessible through the VPN
          </li>
        </ul>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Security Model
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          Your music stays private with multiple layers of protection:
        </p>
        <ul className="list-disc pl-6 mb-6 text-neutral-50">
          <li>
            <strong>VPN Authentication</strong>: Only users with a valid pre-auth
            key can join your network
          </li>
          <li>
            <strong>End-to-End Encryption</strong>: All traffic is encrypted using
            WireGuard protocol
          </li>
          <li>
            <strong>No Public Access</strong>: Music services are never exposed to
            the internet - only VPN members can reach them
          </li>
          <li>
            <strong>Service-Level Logins</strong>: Each music service has its own
            authentication for additional security
          </li>
        </ul>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Key Features
        </h2>
        <div className="text-base text-neutral-50 mb-6">
          <p className="mb-3">
            <strong className="text-primary">Shared Music Library</strong>
            <br />
            Everyone in your community accesses the same music collection.
            Downloads from one user instantly benefit all members.
          </p>
          <p className="mb-3">
            <strong className="text-primary">Multi-Platform Access</strong>
            <br />
            Works seamlessly on iOS, Android, macOS, Windows, and Linux. Choose
            your preferred client apps.
          </p>
          <p className="mb-3">
            <strong className="text-primary">Private and Secure</strong>
            <br />
            Your music library remains under your control, encrypted, and
            inaccessible from the public internet.
          </p>
          <p className="mb-3">
            <strong className="text-primary">Easy DNS with MagicDNS</strong>
            <br />
            Access services using memorable hostnames like{" "}
            <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
              server.headscale.local
            </code>{" "}
            instead of IP addresses.
          </p>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          How Users Access NoisePort
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                1. Setup (Admin Only)
              </h3>
              <p className="text-sm text-neutral-300">
                The server administrator configures the VPN infrastructure and
                launches music services using the setup wizard.
              </p>
            </div>
            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                2. Join the VPN
              </h3>
              <p className="text-sm text-neutral-300">
                Users install Tailscale on their device and connect using a
                pre-auth key provided by the admin.
              </p>
            </div>
            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                3. Access Music Services
              </h3>
              <p className="text-sm text-neutral-300">
                Once connected to the VPN, users can access Navidrome, Jellyfin,
                and other services using the server's VPN hostname.
              </p>
            </div>
            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                4. Stream and Enjoy
              </h3>
              <p className="text-sm text-neutral-300">
                Listen to music from anywhere, on any device, knowing your
                connection is private and secure.
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Why NoisePort?
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          NoisePort brings back the collaborative spirit of peer-to-peer music
          sharing while providing modern convenience and security. You maintain
          full control over your music library, choose who has access, and enjoy
          the benefits of shared discovery without relying on corporate platforms.
        </p>
        <p className="text-base text-neutral-50 mb-6">
          Ready to get started? Check out our{" "}
          <a href="/faq" className="text-primary underline hover:text-primary/80">
            FAQ
          </a>{" "}
          for detailed guides on setting up and using NoisePort.
        </p>
      </motion.div>
    </motion.main>
  );
}
