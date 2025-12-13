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
      question:
        "Que dois-je donner à un nouvel utilisateur pour accéder au système ?",
      answer: (
        <>
          <p className="mb-3">
            Fournissez les deux éléments suivants aux nouveaux utilisateurs :
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>L'URL de votre serveur Headscale</strong> :{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://{"{VOTRE_DOMAINE}"}
              </code>{" "}
              ou{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://{"{VOTRE_IP}.sslip.io"}
              </code>
            </li>
            <li>
              <strong>Clé pré-auth</strong> : La clé que vous avez générée dans
              Headplane ou via CLI
            </li>
          </ol>
          <p className="mb-3">
            <strong className="text-primary">C'est tout !</strong> L'application
            NoisePort gère automatiquement le reste :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Configuration du VPN en arrière-plan</li>
            <li>
              Authentification avec les services (Navidrome/Jellyfin/slskd)
            </li>
            <li>Résolution automatique des hostnames via MagicDNS</li>
            <li>Configuration des ports et endpoints</li>
          </ul>
          <p className="text-neutral-400 italic">
            Les utilisateurs n'ont qu'à télécharger l'app NoisePort, entrer
            l'URL et la clé, et tout fonctionne automatiquement. Dirigez-les
            vers la FAQ Utilisateur pour les instructions détaillées.
          </p>
        </>
      ),
    },
    {
      question: "How do I connect the server itself to the VPN?",
      answer: (
        <>
          <p className="mb-3">
            The server must join its own VPN network to make services
            accessible:
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
              Note the server's VPN hostname (it will appear in the output,
              e.g., <code>noiseport-server</code>)
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
            Changing your public domain requires reconfiguring several
            components:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Update your DNS records to point the new domain to your server's
              IP
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
              All users will need to reconnect their devices using the new
              domain URL
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
            <li>
              The server URL (e.g., <code>https://music.example.com</code>)
            </li>
            <li>A pre-auth key</li>
          </ul>
          <p className="mb-3">
            <strong>
              Tous les appareils (iOS, Android, macOS, Windows, Linux)
            </strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Téléchargez et installez l'<strong>application NoisePort</strong>{" "}
              pour votre plateforme
            </li>
            <li>Ouvrez l'application et cliquez sur "Se connecter"</li>
            <li>Entrez l'URL du serveur que votre admin vous a fournie</li>
            <li>Collez votre clé pré-auth quand demandé</li>
            <li>
              L'application configure automatiquement le VPN et se connecte
            </li>
          </ol>
          <p className="text-neutral-400 italic">
            C'est tout ! L'application NoisePort gère le VPN,
            l'authentification, et vous donne accès à toute la bibliothèque
            musicale. Pas besoin d'installer Tailscale ou de configurer quoi que
            ce soit manuellement.
          </p>
        </>
      ),
    },
    {
      question:
        "Quelle application dois-je utiliser pour écouter de la musique ?",
      answer: (
        <>
          <p className="mb-3">
            Utilisez l'
            <strong className="text-primary">application NoisePort</strong> !
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Interface unifiée</strong> : Une seule app pour tout —
              streaming, recherche, téléchargements, gestion de bibliothèque.
            </li>
            <li>
              <strong>Multi-plateformes</strong> : Disponible sur iOS, Android,
              macOS, Windows, et Linux.
            </li>
            <li>
              <strong>VPN intégré</strong> : Pas besoin d'installer Tailscale
              séparément, l'app gère tout automatiquement.
            </li>
            <li>
              <strong>Design élégant</strong> : Interface moderne avec pochettes
              d'albums, métadonnées riches, et lecture fluide.
            </li>
            <li>
              <strong>Téléchargements Soulseek</strong> : Recherchez et
              téléchargez de la musique rare directement depuis l'app.
            </li>
          </ul>
          <p className="text-neutral-400 italic">
            Note : Les services Navidrome et Jellyfin fonctionnent en
            arrière-plan pour alimenter l'application NoisePort. Vous n'avez pas
            besoin d'y accéder directement, sauf si vous êtes administrateur.
          </p>
        </>
      ),
    },
    {
      question: "Pourquoi dois-je utiliser le VPN pour accéder à la musique ?",
      answer: (
        <>
          <p className="mb-3">
            Les services musicaux de NoisePort sont délibérément maintenus
            privés et sécurisés :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Sécurité par conception</strong> : Seuls les membres du
              VPN peuvent accéder aux services, empêchant tout accès non
              autorisé.
            </li>
            <li>
              <strong>Aucune exposition publique</strong> : Les serveurs
              musicaux ne sont jamais exposés à Internet, protégeant votre
              bibliothèque des menaces externes.
            </li>
            <li>
              <strong>Connexions chiffrées</strong> : Tout le trafic entre vous
              et le serveur est chiffré via WireGuard.
            </li>
            <li>
              <strong>Confidentialité</strong> : Vos habitudes d'écoute et votre
              bibliothèque restent totalement privées.
            </li>
          </ul>
          <p className="text-neutral-400 italic">
            L'application NoisePort gère le VPN automatiquement en arrière-plan.
            Vous n'avez pas à vous en soucier — ouvrez simplement l'app et
            écoutez votre musique.
          </p>
        </>
      ),
    },
    {
      question: "Dois-je être connecté au VPN en permanence ?",
      answer: (
        <>
          <p className="mb-3">
            L'application NoisePort gère le VPN automatiquement :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Pour le streaming</strong> : L'app active le VPN
              automatiquement quand vous lancez une chanson. Tout est
              transparent.
            </li>
            <li>
              <strong>Pour l'écoute hors ligne</strong> : Une fois la musique
              téléchargée dans l'app, vous pouvez écouter sans VPN ni connexion
              Internet.
            </li>
            <li>
              <strong>Économie de batterie</strong> : L'app désactive le VPN
              intelligemment quand vous ne l'utilisez pas pour économiser votre
              batterie.
            </li>
          </ul>
          <p className="text-neutral-400 italic">
            La connexion VPN est légère et utilise peu de batterie.
            L'application NoisePort optimise tout automatiquement pour une
            expérience fluide.
          </p>
        </>
      ),
    },
    {
      question: "Puis-je télécharger de la musique pour l'écouter hors ligne ?",
      answer: (
        <>
          <p className="mb-3">
            Oui ! L'application NoisePort intègre le téléchargement hors ligne :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Albums et playlists</strong> : Appuyez sur l'icône de
              téléchargement pour rendre un album ou une playlist disponible
              hors ligne.
            </li>
            <li>
              <strong>Stockage local</strong> : La musique téléchargée est
              sauvegardée sur votre appareil et accessible sans connexion
              Internet.
            </li>
            <li>
              <strong>Gestion intelligente</strong> : L'app gère automatiquement
              l'espace de stockage et vous permet de choisir la qualité de
              téléchargement.
            </li>
            <li>
              <strong>Synchronisation automatique</strong> : Les nouvelles
              chansons ajoutées à vos playlists favorites se téléchargent
              automatiquement (optionnel).
            </li>
          </ul>
          <p className="text-neutral-400 italic">
            Une fois téléchargée, votre musique est disponible partout, même en
            mode avion.
          </p>
        </>
      ),
    },
    {
      question: "Et si j'obtiens un nouvel appareil ?",
      answer: (
        <>
          <p className="mb-3">
            Configurer un nouvel appareil est très simple :
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Demandez à votre admin</strong> une clé pré-auth (ils
              peuvent réutiliser une clé existante si elle a été créée comme
              réutilisable).
            </li>
            <li>
              <strong>Install Tailscale</strong> on your new device (see "How do
              I connect to NoisePort for the first time?" above)
            </li>
            <li>
              <strong>Installez l'application NoisePort</strong> sur votre
              nouvel appareil.
            </li>
            <li>
              <strong>Connectez-vous</strong> avec l'URL du serveur et la clé
              pré-auth.
            </li>
            <li>
              <strong>C'est fait !</strong> Toute votre bibliothèque musicale
              est accessible instantanément.
            </li>
          </ol>
          <p className="mb-3">
            <strong>Notes importantes :</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              L'application NoisePort synchronise automatiquement vos playlists
              et préférences entre tous vos appareils.
            </li>
            <li>
              Chaque appareil apparaît comme une entrée séparée dans le VPN, ce
              qui aide à la surveillance de sécurité.
            </li>
            <li>
              Si vous remplacez un ancien appareil, demandez à votre admin de
              supprimer l'ancien appareil du VPN.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Comment fonctionne la sécurité de NoisePort ?",
      answer: (
        <>
          <p className="mb-3">
            NoisePort utilise une approche de sécurité en couches :
          </p>
          <p className="mb-3">
            <strong>Couche 1 : VPN automatique</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              L'application NoisePort gère le VPN en arrière-plan
              automatiquement.
            </li>
            <li>
              Tout le trafic est chiffré via WireGuard (qualité militaire).
            </li>
            <li>
              Seuls les membres autorisés peuvent rejoindre le réseau privé.
            </li>
          </ul>
          <p className="mb-3">
            <strong>Couche 2 : Authentification de l'app</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Vous vous connectez une seule fois dans l'application NoisePort.
            </li>
            <li>
              L'app gère ensuite toutes les authentifications avec les services
              en arrière-plan.
            </li>
            <li>
              Vos identifiants ne quittent jamais l'application et sont stockés
              de manière sécurisée.
            </li>
          </ul>
          <p className="text-neutral-400 italic">
            Tout est transparent et automatique. Vous n'avez qu'à vous connecter
            une fois et profiter de votre musique en toute sécurité.
          </p>
        </>
      ),
    },
    {
      question: "Puis-je partager mon accès avec des amis ?",
      answer: (
        <>
          <p className="mb-3">
            <strong className="text-yellow-500">
              Réponse courte : Ne partagez pas votre clé pré-auth ou vos
              identifiants.
            </strong>
          </p>
          <p className="mb-3">Voici pourquoi :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Risque de sécurité</strong> : Partager vos identifiants
              compromet la sécurité de tout le réseau.
            </li>
            <li>
              <strong>Traçabilité</strong> : L'admin ne peut pas savoir qui
              accède au système si plusieurs personnes utilisent les mêmes
              identifiants.
            </li>
            <li>
              <strong>Capacité</strong> : Le système est conçu pour un nombre
              limité d'utilisateurs pour maintenir les performances.
            </li>
          </ul>
          <p className="mb-3">
            <strong>La bonne façon d'inviter des amis :</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Demandez à votre admin NoisePort s'il est prêt à ajouter de
              nouveaux membres.
            </li>
            <li>
              Si approuvé, l'admin générera une nouvelle clé pré-auth pour votre
              ami.
            </li>
            <li>
              Votre ami obtient son propre compte et ses propres identifiants.
            </li>
            <li>L'accès de chacun est sécurisé et traçable.</li>
          </ol>
          <p className="text-neutral-400 italic">
            Rappel : NoisePort est fait pour créer des communautés de confiance.
            Si vous voulez inviter plus de personnes, parlez-en d'abord avec
            votre admin.
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
        Foire aux questions
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
            FAQ Utilisateur
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
            FAQ Admin
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
                Questions et réponses pour les utilisateurs finaux accédant à
                NoisePort. Si vous cherchez des conseils administratifs,
                consultez la FAQ Admin.
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
                Guide détaillé pour les administrateurs de serveur gérant une
                instance NoisePort. Pour les questions utilisateur, consultez la
                FAQ Utilisateur.
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
          Encore des questions ?
        </h2>
        <p className="text-neutral-300 mb-4">
          Vous ne trouvez pas ce que vous cherchez ? Consultez notre page{" "}
          <a
            href="/how-it-works"
            className="text-primary underline hover:text-primary/80"
          >
            Comment ça marche
          </a>{" "}
          pour plus de détails sur l'architecture de NoisePort, ou visitez notre
          page{" "}
          <a
            href="/contact"
            className="text-primary underline hover:text-primary/80"
          >
            Contact
          </a>{" "}
          pour entrer en contact avec la communauté.
        </p>
      </motion.div>
    </motion.main>
  );
}
