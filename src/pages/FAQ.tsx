import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import FAQItem from "../components/FAQItem";

type FAQSection = "join" | "create";

export default function FAQ() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<FAQSection>("join");

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "join" || hash === "create") {
      setActiveSection(hash as FAQSection);
    }
  }, [location]);

  const createServerFAQs = [
    {
      question: "Comment ajouter un·e nouvel·le utilisateur·rice à NoisePort ?",
      answer: (
        <>
          <p className="mb-3">
            Il existe deux méthodes pour ajouter des utilisateur·rice·s à votre
            instance NoisePort :
          </p>
          <p className="mb-2">
            <strong>Méthode 1 : Via l'interface Headplane (Recommandé)</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Accédez à Headplane sur{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{VOTRE_DOMAINE}"}
              </code>
            </li>
            <li>Allez dans l'onglet Paramètres</li>
            <li>Cliquez sur le bouton "Créer une clé pré-auth"</li>
            <li>
              Configurez la clé (choisissez l'espace de noms, définissez
              l'expiration, rendez-la réutilisable si nécessaire)
            </li>
            <li>Copiez la clé pré-auth générée</li>
          </ol>
          <p className="mb-2">
            <strong>Méthode 2 : Via CLI</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`docker exec headscale headscale preauthkeys create \\
  --user main \\
  --reusable \\
  --expiration 24h`}
          </pre>
          <p>
            Le flag <code>--reusable</code> permet d'utiliser la clé plusieurs
            fois, et <code>--expiration</code> définit la durée de validité de
            la clé.
          </p>
        </>
      ),
    },
    {
      question:
        "Que dois-je donner à un·e nouvel·le utilisateur·rice pour accéder au système ?",
      answer: (
        <>
          <p className="mb-3">
            Fournissez les deux éléments suivants aux nouveaux·elles utilisateur·rice·s :
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
      question: "Comment connecter le serveur lui-même au VPN ?",
      answer: (
        <>
          <p className="mb-3">
            Le serveur doit rejoindre son propre réseau VPN pour rendre les
            services accessibles :
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Générez une clé pré-auth (via l'interface Headplane ou CLI comme
              décrit ci-dessus)
            </li>
            <li>
              Installez Tailscale sur votre serveur :
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                curl -fsSL https://tailscale.com/install.sh | sh
              </pre>
            </li>
            <li>
              Connectez-vous à votre instance Headscale :
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`sudo tailscale up \\
  --login-server=https://{VOTRE_DOMAINE} \\
  --authkey={VOTRE_CLE_PREAUTH}`}
              </pre>
            </li>
            <li>
              Vérifiez la connexion :
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                tailscale status
              </pre>
            </li>
            <li>
              Notez le nom d'hôte VPN du serveur (il apparaîtra dans la sortie,
              par ex., <code>noiseport-server</code>)
            </li>
            <li>
              Enregistrez ce nom d'hôte dans l'étape Headscale de l'assistant de
              configuration comme{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                {"{NOM_SERVEUR}.{DOMAINE_BASE}"}
              </code>
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "Comment révoquer l'accès d'un·e utilisateur·rice ?",
      answer: (
        <>
          <p className="mb-3">
            Pour retirer l'accès d'un·e utilisateur·rice à votre instance NoisePort :
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Accédez à l'interface Headplane sur{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{VOTRE_DOMAINE}"}
              </code>
            </li>
            <li>Allez dans la section Machines ou Nœuds</li>
            <li>Trouvez l'appareil de l'utilisateur·rice dans la liste</li>
            <li>Cliquez sur l'option supprimer ou retirer pour cet appareil</li>
            <li>Confirmez la suppression</li>
          </ol>
          <p className="mb-3">
            <strong>Via CLI :</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`# Lister tous les nœuds pour trouver l'ID
docker exec headscale headscale nodes list

# Supprimer un nœud spécifique
docker exec headscale headscale nodes delete --identifier {NODE_ID}`}
          </pre>
          <p>
            Une fois supprimé, l'utilisateur perdra immédiatement l'accès au VPN
            et à tous les services musicaux.
          </p>
        </>
      ),
    },
    {
      question: "Que faire si je dois changer le domaine public du serveur ?",
      answer: (
        <>
          <p className="mb-3">
            Changer votre domaine public nécessite de reconfigurer plusieurs
            composants :
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Mettez à jour vos enregistrements DNS pour pointer le nouveau
              domaine vers l'IP de votre serveur
            </li>
            <li>
              Modifiez le Caddyfile pour utiliser le nouveau domaine :
              <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mt-2">
                {`# Éditez wizard-config/caddy/Caddyfile
# Remplacez {VOTRE_DOMAINE} par votre nouveau domaine`}
              </pre>
            </li>
            <li>
              Mettez à jour la configuration Headscale dans{" "}
              <code>wizard-config/headscale/config/config.yaml</code> avec la
              nouvelle URL du serveur
            </li>
            <li>Redémarrez les services d'infrastructure</li>
            <li>
              Tou·te·s les utilisateur·rice·s devront reconnecter leurs appareils en
              utilisant la nouvelle URL de domaine
            </li>
          </ol>
          <p className="text-yellow-500">
            <strong>Attention :</strong> Ceci est un changement perturbateur qui
            nécessitera que tou·te·s les utilisateur·rice·s reconfigurent leurs clients
            Tailscale.
          </p>
        </>
      ),
    },
    {
      question: "Comment surveiller qui est connecté au VPN ?",
      answer: (
        <>
          <p className="mb-3">
            Vous pouvez surveiller les appareils connectés de deux façons :
          </p>
          <p className="mb-2">
            <strong>Méthode 1 : Via l'interface Headplane</strong>
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Accédez à Headplane sur{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{VOTRE_DOMAINE}"}
              </code>
            </li>
            <li>Consultez la section Machines ou Nœuds</li>
            <li>
              Vous verrez tous les appareils connectés avec leur statut,
              adresses IP VPN, et heure de dernière connexion
            </li>
          </ol>
          <p className="mb-2">
            <strong>Méthode 2 : Via CLI</strong>
          </p>
          <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto mb-4">
            {`# Lister tous les nœuds avec leur statut
docker exec headscale headscale nodes list

# Afficher des informations détaillées sur un nœud spécifique
docker exec headscale headscale nodes show --identifier {NODE_ID}`}
          </pre>
          <p>
            La sortie affiche les noms des appareils, les IP VPN, le statut en
            ligne, et quand ils se sont connectés pour la dernière fois.
          </p>
        </>
      ),
    },
  ];

  const joinServerFAQs = [
    {
      question: "Comment me connecter à NoisePort pour la première fois ?",
      answer: (
        <>
          <p className="mb-3">
            Tout d'abord, assurez-vous d'avoir reçu de votre administrateur :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              L'URL du serveur (par ex., <code>https://music.example.com</code>)
            </li>
            <li>Une clé pré-auth</li>
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
              <strong>Installez Tailscale</strong> sur votre nouvel appareil
              (voir "Comment me connecter à NoisePort pour la première fois ?"
              ci-dessus)
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
              limité d'utilisateur·rice·s pour maintenir les performances.
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
        <div className="mb-6 md:mb-8 p-4 sm:p-5 md:p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
          <h2 className="font-kode text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
            Deux façons d'utiliser NoisePort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="bg-neutral-900 p-4 sm:p-5 rounded-lg border border-neutral-800">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <h3 className="font-kode text-base sm:text-lg text-primary">
                  Rejoindre un Serveur
                </h3>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Connectez-vous à un serveur NoisePort existant géré par un ami,
                une famille ou une communauté. Parfait si vous voulez simplement
                accéder à une bibliothèque musicale partagée.
              </p>
            </div>
            <div className="bg-neutral-900 p-4 sm:p-5 rounded-lg border border-neutral-800">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <h3 className="font-kode text-base sm:text-lg text-primary">
                  Créer un Serveur
                </h3>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Installez et gérez votre propre serveur NoisePort. Idéal si vous
                voulez partager votre collection musicale avec d'autres ou
                contrôler l'infrastructure complète.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 border-b border-neutral-800 mb-8">
          <button
            onClick={() => {
              setActiveSection("join");
              window.location.hash = "join";
            }}
            className={`pb-4 px-6 font-kode text-lg transition-colors relative ${
              activeSection === "join"
                ? "text-primary"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Rejoindre un Serveur
            {activeSection === "join" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
              />
            )}
          </button>
          <button
            onClick={() => {
              setActiveSection("create");
              window.location.hash = "create";
            }}
            className={`pb-4 px-6 font-kode text-lg transition-colors relative ${
              activeSection === "create"
                ? "text-primary"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Créer un Serveur
            {activeSection === "create" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
              />
            )}
          </button>
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: activeSection === "join" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === "join" && (
            <div>
              <p className="text-neutral-300 mb-6">
                Guide pour les utilisateurs qui rejoignent un serveur NoisePort
                existant. Vous avez besoin d'une URL de serveur et d'une clé
                pré-auth fournie par l'administrateur du serveur.
              </p>
              <div className="space-y-2">
                {joinServerFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === "create" && (
            <div>
              <p className="text-neutral-300 mb-6">
                Guide complet pour installer et gérer votre propre serveur
                NoisePort. Vous apprendrez à configurer l'infrastructure,
                ajouter des utilisateurs et maintenir votre instance.
              </p>
              <div className="space-y-2">
                {createServerFAQs.map((faq, index) => (
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
