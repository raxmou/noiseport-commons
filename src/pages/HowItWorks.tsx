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
        Comment ça marche
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base text-neutral-50 leading-relaxed mb-6">
          NoisePort est une plateforme musicale auto-hébergée qui combine la
          puissance d'un VPN privé avec des services modernes de streaming
          musical. L'<strong>application NoisePort</strong>
          (desktop et mobile) vous donne, à vous et votre communauté, un accès
          sécurisé et simple à une bibliothèque musicale partagée depuis
          n'importe où dans le monde.
        </p>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Vue d'ensemble de l'architecture
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          NoisePort est construit sur trois couches interconnectées qui
          travaillent ensemble pour offrir une expérience musicale sécurisée et
          fluide :
        </p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <p className="text-sm text-neutral-300 mb-4">
            <strong className="text-primary">🔐 Infrastructure VPN</strong>
            <br />
            La couche de sécurité qui crée votre réseau privé. Headscale
            coordonne les connexions, Caddy gère les certificats HTTPS, et
            Headplane offre une interface d'administration. C'est votre porte
            d'entrée sécurisée vers tout l'écosystème.
          </p>
          <p className="text-sm text-neutral-300 mb-4">
            <strong className="text-primary">
              🎛️ Serveur Central (FastAPI)
            </strong>
            <br />
            Le cerveau de NoisePort. Ce serveur Python orchestre tout : il fait
            le lien entre vos applications (desktop et mobile), coordonne les
            téléchargements, gère la configuration, et synchronise les
            métadonnées musicales entre tous les services.
          </p>
          <p className="text-sm text-neutral-300">
            <strong className="text-primary">🎵 Services Musicaux</strong>
            <br />
            Les applications qui donnent vie à votre musique. Navidrome et
            Jellyfin pour le streaming, slskd pour les téléchargements P2P. Tous
            connectés au serveur central et partageant la même bibliothèque
            musicale.
          </p>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Comprendre les composants
        </h2>

        <h3 className="font-kode text-xl text-neutral-100 mt-8 mb-3">
          🔐 Infrastructure VPN : La fondation sécurisée
        </h3>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            Headscale : Le chef d'orchestre VPN
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Imaginez Headscale comme un contrôleur aérien pour votre réseau
            privé. Au lieu de contrôler des avions, il coordonne tous les
            appareils (ordinateurs, téléphones, tablettes) qui veulent rejoindre
            votre réseau musical.
          </p>
          <p className="text-base text-neutral-50 mb-3">
            Ce qui le rend spécial :
          </p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Auto-hébergé</strong> : Vous l'exécutez sur votre propre
              serveur, ce qui signifie que vous contrôlez qui entre. Aucune
              entreprise tierce ne surveille votre trafic.
            </li>
            <li>
              <strong>Crée un réseau maillé</strong> : Chaque appareil peut
              communiquer directement avec tous les autres appareils de manière
              sécurisée, comme si chacun avait sa propre ligne téléphonique
              privée.
            </li>
            <li>
              <strong>Utilise WireGuard</strong> : C'est la technologie de
              chiffrement qui sécurise tout. C'est comme avoir des conversations
              dans un code incassable.
            </li>
            <li>
              <strong>Délivre des invitations</strong> : Via des "clés
              pré-auth", il contrôle qui peut rejoindre. Pensez-y comme des
              codes d'invitation à usage unique ou réutilisables.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            Caddy : La passerelle HTTPS automatique
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Caddy est ce qu'on appelle un "reverse proxy", mais vous pouvez le
            voir comme un réceptionniste intelligent à l'entrée d'un immeuble.
            Quand quelqu'un visite l'adresse de votre serveur sur Internet,
            Caddy décide où l'envoyer.
          </p>
          <p className="text-base text-neutral-50 mb-3">Ce qu'il fait :</p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>HTTPS automatique</strong> : Il gère automatiquement tous
              les certificats de sécurité (via Let's Encrypt), donc vos
              connexions sont toujours chiffrées. Aucune configuration manuelle
              nécessaire.
            </li>
            <li>
              <strong>Aiguilleur de trafic</strong> : Les requêtes vers{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://{"{"}
                {"{"}VOTRE_DOMAINE{"}"}
                {"}"}
              </code>{" "}
              vont vers Headscale, tandis que{" "}
              <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
                https://admin.{"{"}
                {"{"}VOTRE_DOMAINE{"}"}
                {"}"}
              </code>{" "}
              vont vers l'interface d'administration.
            </li>
            <li>
              <strong>Passerelle publique</strong> : Seul Caddy est exposé à
              Internet. Vos services musicaux restent complètement privés
              derrière le VPN.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            Headplane : Le tableau de bord administrateur
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Headplane est le visage convivial d'Headscale. Au lieu de taper des
            commandes dans un terminal, les administrateurs peuvent utiliser une
            interface web pour tout gérer visuellement.
          </p>
          <p className="text-base text-neutral-50 mb-3">
            Fonctionnalités clés :
          </p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Gestion des utilisateurs</strong> : Créer des espaces de
              noms (groupes) et gérer qui appartient où.
            </li>
            <li>
              <strong>Génération de clés pré-auth</strong> : Cliquer sur un
              bouton pour créer des codes d'invitation au lieu d'exécuter des
              commandes CLI.
            </li>
            <li>
              <strong>Surveillance des appareils</strong> : Voir tous les
              appareils connectés, leur statut, et quand ils se sont connectés
              pour la dernière fois.
            </li>
            <li>
              <strong>Révocation d'accès</strong> : Retirer un appareil d'un
              seul clic si quelqu'un perd son téléphone ou quitte la communauté.
            </li>
          </ul>
        </div>

        <h3 className="font-kode text-xl text-neutral-100 mt-8 mb-3">
          🎛️ Serveur Central : Le cerveau de NoisePort
        </h3>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            FastAPI : Le chef d'orchestre applicatif
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Au cœur de NoisePort se trouve un serveur Python FastAPI qui
            orchestre toute la plateforme. C'est le point central qui fait
            communiquer tous les services entre eux et avec vos applications.
          </p>
          <p className="text-base text-neutral-50 mb-3">Rôles essentiels :</p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Pont entre applications</strong> : Connecte vos
              applications desktop et mobiles aux services musicaux. C'est lui
              qui traduit vos demandes d'applications en actions sur le serveur.
            </li>
            <li>
              <strong>Gestionnaire de téléchargements</strong> : Coordonne slskd
              pour les téléchargements P2P, surveille la progression, et notifie
              automatiquement Navidrome et Jellyfin quand de nouvelle musique
              arrive.
            </li>
            <li>
              <strong>API de configuration</strong> : Fournit l'assistant de
              configuration initial et permet de gérer tous les paramètres du
              système via une interface unifiée.
            </li>
            <li>
              <strong>Synchronisation des métadonnées</strong> : Maintient la
              cohérence des informations musicales (pochettes, tags, artistes)
              entre tous les services de la plateforme.
            </li>
            <li>
              <strong>Gestion des utilisateurs</strong> : Simplifie la création
              de comptes pour Navidrome et Jellyfin, évitant de devoir se
              connecter séparément à chaque service.
            </li>
          </ul>
          <p className="text-base text-neutral-50 mb-3">
            <strong>Accessible via :</strong>{" "}
            <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
              http://noiseport-server.headscale.local:8010
            </code>{" "}
            (VPN uniquement)
          </p>
        </div>

        <h3 className="font-kode text-xl text-neutral-100 mt-8 mb-3">
          🎵 Services Musicaux : Votre bibliothèque vivante
        </h3>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            Navidrome : Le serveur de streaming optimisé
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Navidrome est le moteur de streaming qui alimente l'application
            NoisePort. C'est un serveur léger et efficace qui gère toute votre
            bibliothèque musicale en arrière-plan.
          </p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Moteur pour l'app NoisePort</strong> : Fournit le
              streaming audio et les métadonnées à l'application NoisePort
              desktop et mobile via FastAPI.
            </li>
            <li>
              <strong>Interface web accessible</strong> : Pour les
              administrateurs qui veulent gérer la bibliothèque directement
              (optionnel, pas nécessaire pour les utilisateurs).
            </li>
            <li>
              <strong>Scrobbling Last.fm</strong> : Suivez automatiquement votre
              historique d'écoute depuis l'application NoisePort.
            </li>
            <li>
              <strong>Gestion de bibliothèque</strong> : Indexe automatiquement
              toute la musique, extrait les métadonnées et les pochettes
              d'albums.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            Jellyfin : Le centre multimédia immersif
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            Jellyfin est un serveur multimédia alternatif qui peut également
            alimenter l'application NoisePort. Il offre une expérience plus
            visuelle et peut gérer d'autres types de médias.
          </p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Alternative à Navidrome</strong> : L'application NoisePort
              peut se connecter à Jellyfin au lieu de Navidrome selon vos
              préférences.
            </li>
            <li>
              <strong>Métadonnées enrichies</strong> : Photos d'artistes,
              biographies, et métadonnées détaillées accessibles via l'app
              NoisePort.
            </li>
            <li>
              <strong>Support multi-format</strong> : Gère la musique, vidéos,
              et photos—extensible au-delà de la musique.
            </li>
            <li>
              <strong>Interface web disponible</strong> : Les utilisateurs
              peuvent aussi accéder via navigateur s'ils préfèrent (optionnel).
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-syne text-lg font-semibold text-primary mb-2">
            slskd : Le connecteur Soulseek P2P
          </h4>
          <p className="text-base text-neutral-50 mb-3">
            slskd est le moteur de téléchargement qui se connecte au réseau
            Soulseek. C'est le service en coulisses qui permet de trouver et
            télécharger de la musique rare via l'application NoisePort.
          </p>
          <ul className="list-disc pl-6 mb-4 text-neutral-50">
            <li>
              <strong>Intégré à l'app NoisePort</strong> : Recherchez et
              téléchargez de la musique directement depuis l'application
              NoisePort. FastAPI coordonne tout avec slskd.
            </li>
            <li>
              <strong>Réseau P2P Soulseek</strong> : Accès à des millions de
              pistes rares, bootlegs, et musique introuvable sur les plateformes
              commerciales.
            </li>
            <li>
              <strong>Téléchargements automatiques</strong> : Une fois
              téléchargée, la musique apparaît instantanément dans votre
              bibliothèque NoisePort—aucune manipulation manuelle.
            </li>
            <li>
              <strong>Interface web d'admin</strong> : Les administrateurs
              peuvent gérer les téléchargements via le navigateur si nécessaire
              (optionnel).
            </li>
          </ul>
        </div>

        <h3 className="font-kode text-xl text-neutral-100 mt-8 mb-3">
          La magie de MagicDNS
        </h3>
        <p className="text-base text-neutral-50 mb-4">
          MagicDNS est comme un annuaire téléphonique automatique pour votre
          VPN. Voici pourquoi c'est important :
        </p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <p className="text-sm text-neutral-300 mb-3">
            <strong className="text-primary">Sans MagicDNS :</strong>
            <br />
            "Hé, pour écouter de la musique, ouvre ton navigateur et va sur
            http://100.64.0.3:4533. Oh, l'IP a changé ? C'est maintenant
            100.64.0.5. Attends, laisse-moi vérifier encore..."
          </p>
          <p className="text-sm text-neutral-300">
            <strong className="text-primary">Avec MagicDNS :</strong>
            <br />
            "Va simplement sur http://noiseport-server.headscale.local:4533.
            C'est tout. Pour toujours."
          </p>
        </div>
        <p className="text-base text-neutral-50 mb-4">
          En coulisses, quand votre appareil <code>macbook-de-jean</code>{" "}
          rejoint le VPN, MagicDNS crée automatiquement le nom d'hôte{" "}
          <code>macbook-de-jean.headscale.local</code>
          et le lie à votre adresse IP VPN. Si votre IP change (ce qui peut
          arriver), MagicDNS la met à jour automatiquement. Vous n'y pensez
          jamais.
        </p>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Comment tout se connecte
        </h2>

        <div className="mb-6">
          <h3 className="font-syne text-lg font-semibold text-primary mb-3">
            Le voyage d'un flux musical via l'application NoisePort
          </h3>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-4">
            <ol className="list-decimal pl-6 space-y-2 text-sm text-neutral-300">
              <li>
                Vous ouvrez l'<strong>application NoisePort</strong> (desktop ou
                mobile) et choisissez une chanson
              </li>
              <li>
                L'application communique avec le{" "}
                <strong>serveur FastAPI</strong> via le VPN chiffré
              </li>
              <li>
                FastAPI interroge <strong>Navidrome</strong> pour obtenir les
                métadonnées et le flux audio
              </li>
              <li>
                Navidrome lit le fichier musical depuis le stockage partagé
              </li>
              <li>
                L'audio transite : Navidrome → FastAPI → Application NoisePort
              </li>
              <li>
                L'application décode et joue la musique sur votre appareil
              </li>
            </ol>
          </div>
          <p className="text-sm text-neutral-400 italic">
            Tout se passe en millisecondes. L'application NoisePort gère
            l'interface, FastAPI orchestre les services, et tout est chiffré de
            bout en bout via le VPN.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-syne text-lg font-semibold text-primary mb-3">
            Le voyage d'une chanson téléchargée (avec FastAPI)
          </h3>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-4">
            <ol className="list-decimal pl-6 space-y-2 text-sm text-neutral-300">
              <li>
                Vous ouvrez l'application NoisePort desktop/mobile et recherchez
                un album rare
              </li>
              <li>
                L'application communique avec le{" "}
                <strong>serveur FastAPI</strong> pour lancer la recherche
              </li>
              <li>
                FastAPI interroge <strong>slskd</strong> qui cherche sur le
                réseau Soulseek
              </li>
              <li>Les résultats remontent : FastAPI → votre application</li>
              <li>
                Vous cliquez sur "Télécharger", FastAPI demande à slskd de
                récupérer les fichiers
              </li>
              <li>
                slskd télécharge l'album et le sauvegarde dans le dossier
                partagé
              </li>
              <li>
                <strong>FastAPI surveille</strong> la progression et notifie
                votre application en temps réel
              </li>
              <li>
                Une fois terminé, FastAPI déclenche un scan dans{" "}
                <strong>Navidrome</strong> et <strong>Jellyfin</strong>
              </li>
              <li>
                En quelques secondes, tout le monde peut streamer le nouvel
                album
              </li>
            </ol>
          </div>
          <p className="text-sm text-neutral-400 italic">
            Le serveur FastAPI orchestre tout le processus : recherche,
            téléchargement, notifications et intégration. Une personne
            télécharge, tout le monde en profite automatiquement.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-syne text-lg font-semibold text-primary mb-3">
            Communication entre applications et serveur
          </h3>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-4">
            <p className="text-sm text-neutral-300 mb-3">
              <strong>Applications Desktop/Mobile ↔ FastAPI :</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-neutral-300">
              <li>
                Vos applications se connectent au serveur FastAPI (port 8010)
                via le VPN
              </li>
              <li>
                FastAPI expose une API REST pour toutes les opérations :
                recherche, téléchargement, configuration
              </li>
              <li>
                Les applications reçoivent des mises à jour en temps réel via
                WebSockets
              </li>
              <li>
                FastAPI traduit vos demandes en actions sur slskd, Navidrome, et
                Jellyfin
              </li>
            </ol>
            <p className="text-sm text-neutral-300 mt-3">
              <strong>Exemple :</strong> Quand vous ajoutez une chanson à vos
              favoris dans l'app mobile, FastAPI synchronise ce changement avec
              Navidrome, et tous vos autres appareils voient la mise à jour.
            </p>
          </div>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Sécurité : Défense en profondeur
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          NoisePort utilise un modèle de sécurité "château et douve"—plusieurs
          couches qui travaillent ensemble pour garder votre musique privée :
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-neutral-900 border-l-4 border-primary rounded-lg p-4">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Couche 1 : La douve (Authentification VPN)
            </h4>
            <p className="text-sm text-neutral-300">
              Avant même de pouvoir voir les services musicaux, vous avez besoin
              d'une clé pré-auth valide pour rejoindre le VPN. C'est comme avoir
              besoin d'une invitation spéciale pour franchir la douve et
              approcher le château. Pas de clé = pas d'accès, point final.
            </p>
          </div>

          <div className="bg-neutral-900 border-l-4 border-primary rounded-lg p-4">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Couche 2 : Le tunnel chiffré (WireGuard)
            </h4>
            <p className="text-sm text-neutral-300">
              Une fois dans le VPN, tout votre trafic voyage à travers un tunnel
              chiffré. Même si quelqu'un intercepte vos données, il ne verra que
              du charabia. WireGuard est moderne, rapide et éprouvé—la même
              technologie utilisée par les professionnels de la sécurité.
            </p>
          </div>

          <div className="bg-neutral-900 border-l-4 border-primary rounded-lg p-4">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Couche 3 : Authentification des services
            </h4>
            <p className="text-sm text-neutral-300">
              Même les membres du VPN ont besoin de noms d'utilisateur et mots
              de passe séparés pour Navidrome, Jellyfin et slskd. Cela signifie
              que si quelqu'un obtient l'accès VPN, il ne peut toujours pas
              accéder à votre musique sans les identifiants de service. C'est
              comme franchir la douve mais avoir toujours besoin d'une clé pour
              chaque pièce du château.
            </p>
          </div>

          <div className="bg-neutral-900 border-l-4 border-primary rounded-lg p-4">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Couche 4 : L'isolation (Aucune exposition publique)
            </h4>
            <p className="text-sm text-neutral-300">
              Les services musicaux ne touchent jamais Internet public. Ils sont
              complètement isolés à l'intérieur du VPN. Les pirates qui scannent
              Internet ne sauront même pas qu'ils existent. Seuls Headscale et
              Headplane sont publics, et ils sont spécifiquement conçus pour
              gérer ce rôle de manière sécurisée.
            </p>
          </div>
        </div>

        <p className="text-base text-neutral-50 mb-4">
          <strong>Ce que cela signifie pour vous :</strong> Votre bibliothèque
          musicale, vos habitudes d'écoute et votre communauté sont complètement
          privées. Aucune entreprise ne suit ce que vous écoutez. Aucun
          algorithme ne profile vos goûts. C'est votre musique, à votre façon,
          votre communauté.
        </p>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Fonctionnalités clés
        </h2>
        <div className="text-base text-neutral-50 mb-6">
          <p className="mb-3">
            <strong className="text-primary">
              Application unifiée NoisePort
            </strong>
            <br />
            Une seule application élégante (desktop et mobile) pour gérer tout :
            streaming, téléchargements, recherche Soulseek, et gestion de
            bibliothèque. Pas besoin de jongler entre plusieurs apps.
          </p>
          <p className="mb-3">
            <strong className="text-primary">
              Bibliothèque musicale partagée
            </strong>
            <br />
            Tout le monde dans votre communauté accède à la même collection
            musicale via l'app NoisePort. Les téléchargements d'un utilisateur
            profitent instantanément à tous les membres.
          </p>
          <p className="mb-3">
            <strong className="text-primary">Accès multi-plateforme</strong>
            <br />
            L'application NoisePort fonctionne sur iOS, Android, macOS, Windows
            et Linux. VPN intégré, pas de configuration complexe.
          </p>
          <p className="mb-3">
            <strong className="text-primary">Privé et sécurisé</strong>
            <br />
            Votre bibliothèque musicale reste sous votre contrôle, chiffrée et
            inaccessible depuis Internet public.
          </p>
          <p className="mb-3">
            <strong className="text-primary">DNS facile avec MagicDNS</strong>
            <br />
            Accédez aux services en utilisant des noms d'hôte mémorables comme{" "}
            <code className="text-sm bg-neutral-900 px-2 py-1 rounded">
              serveur.headscale.local
            </code>{" "}
            au lieu d'adresses IP.
          </p>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Utilisation réelle : Rencontrez Sarah
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          Suivons Sarah alors qu'elle rejoint le serveur NoisePort de son ami
          Alex :
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                Étape 1 : Alex configure le serveur (une seule fois)
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Alex installe NoisePort sur un serveur domestique, lance
                l'assistant de configuration et configure le VPN. L'assistant
                génère tous les fichiers de configuration, configure Headscale,
                Caddy et les services musicaux. Cela prend environ 30 minutes,
                mais c'est une configuration unique.
              </p>
              <p className="text-sm text-neutral-400 italic">
                Le serveur d'Alex a maintenant un domaine comme{" "}
                <code>music.alex.sslip.io</code> ou un domaine personnalisé
                comme <code>music.alexsmith.com</code>.
              </p>
            </div>

            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                Étape 2 : Alex invite Sarah
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Alex ouvre Headplane sur{" "}
                <code>https://admin.music.alexsmith.com</code>, clique sur
                "Créer une clé pré-auth", et envoie à Sarah deux choses :
              </p>
              <ul className="list-disc pl-6 text-sm text-neutral-300 space-y-1">
                <li>
                  L'URL du serveur : <code>https://music.alexsmith.com</code>
                </li>
                <li>
                  Une clé pré-auth : <code>keyxxxxxxxxxxxxxxxxxxxxxxx</code>
                </li>
              </ul>
              <p className="text-sm text-neutral-400 italic mt-2">
                C'est tout ! L'application NoisePort gère ensuite
                l'authentification et la configuration automatiquement.
              </p>
            </div>

            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                Étape 3 : Sarah installe l'application NoisePort
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Sur son iPhone, Sarah télécharge l'
                <strong>application NoisePort</strong> que Alex a développée.
                Elle l'ouvre, entre l'URL du serveur d'Alex (
                <code>https://music.alexsmith.com</code>) et la clé pré-auth,
                puis se connecte. L'application configure automatiquement le VPN
                en arrière-plan.
              </p>
              <p className="text-sm text-neutral-400 italic">
                Le téléphone de Sarah fait maintenant partie du réseau privé
                d'Alex. L'application NoisePort gère le VPN, pas besoin
                d'installer Tailscale séparément.
              </p>
            </div>

            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                Étape 4 : Sarah streame de la musique
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Dans l'<strong>application NoisePort</strong>, Sarah voit
                directement toute la bibliothèque musicale d'Alex—des milliers
                d'albums. Elle cherche son artiste préféré, tape sur "Play", et
                la musique commence instantanément.
              </p>
              <p className="text-sm text-neutral-300 mb-2">
                En coulisses : l'app communique avec FastAPI qui récupère le
                flux depuis Navidrome. Mais pour Sarah, c'est juste une app de
                musique simple et élégante.
              </p>
            </div>

            <div>
              <h3 className="font-kode text-primary text-lg mb-2">
                Étape 5 : Sarah découvre de nouvelle musique
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Une semaine plus tard, Sarah veut ajouter un album live rare à
                la bibliothèque. Directement dans l'
                <strong>application NoisePort</strong>, elle utilise la fonction
                de recherche Soulseek, trouve l'album, et lance le
                téléchargement.
              </p>
              <p className="text-sm text-neutral-300">
                Quelques minutes plus tard, Sarah et Alex peuvent tous deux
                streamer le nouvel album—l'app notifie automatiquement que la
                nouvelle musique est disponible. Tout est transparent et
                automatique.
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Architecture réseau expliquée
        </h2>
        <p className="text-base text-neutral-50 mb-4">
          Voici comment toutes les pièces s'assemblent dans le réseau :
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-syne text-base font-semibold text-primary mb-2">
                La couche Internet public
              </h4>
              <p className="text-sm text-neutral-300 mb-2">
                Seulement deux choses sont accessibles depuis Internet public :
              </p>
              <ul className="list-disc pl-6 text-sm text-neutral-300 space-y-1">
                <li>
                  <strong>API Headscale</strong> (port 443) : Gère la
                  coordination VPN. C'est ainsi que les appareils s'enregistrent
                  et s'authentifient.
                </li>
                <li>
                  <strong>Interface Headplane</strong> (sous-domaine admin) :
                  L'interface web pour les administrateurs. Protégée par
                  connexion et uniquement pour les admins de confiance.
                </li>
              </ul>
              <p className="text-sm text-neutral-400 italic mt-2">
                Tout le reste est caché derrière le VPN. Services musicaux,
                outils d'admin, tout.
              </p>
            </div>

            <div>
              <h4 className="font-syne text-base font-semibold text-primary mb-2">
                Le réseau maillé VPN
              </h4>
              <p className="text-sm text-neutral-300 mb-2">
                Une fois authentifié, vous rejoignez un réseau "maillé" privé.
                Cela signifie :
              </p>
              <ul className="list-disc pl-6 text-sm text-neutral-300 space-y-1">
                <li>
                  Chaque appareil obtient une IP VPN unique dans la plage{" "}
                  <code>100.64.0.0/10</code>
                </li>
                <li>
                  Chaque appareil peut communiquer directement avec tous les
                  autres appareils (si les permissions le permettent)
                </li>
                <li>
                  Tout le trafic est chiffré de bout en bout avec WireGuard
                </li>
                <li>
                  MagicDNS crée automatiquement des noms d'hôte conviviaux pour
                  chaque appareil
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-syne text-base font-semibold text-primary mb-2">
                Les services du serveur
              </h4>
              <p className="text-sm text-neutral-300 mb-2">
                Sur le serveur (qui est aussi membre du VPN), les services
                musicaux tournent sur des ports spécifiques :
              </p>
              <div className="bg-black rounded p-3 text-xs text-neutral-400 font-mono mt-2">
                <div>Navidrome: port 4533 → Streaming musical</div>
                <div>Jellyfin: port 8096 → Centre multimédia riche</div>
                <div>slskd: port 5030 → Téléchargements P2P</div>
              </div>
              <p className="text-sm text-neutral-400 italic mt-2">
                Ces services écoutent uniquement sur l'interface VPN du serveur.
                Ils ne sont pas liés aux IP publiques, donc invisibles depuis
                Internet.
              </p>
            </div>

            <div>
              <h4 className="font-syne text-base font-semibold text-primary mb-2">
                Appareils clients (Votre téléphone, ordinateur portable, etc.)
              </h4>
              <p className="text-sm text-neutral-300 mb-2">
                Vos appareils exécutent Tailscale (le client VPN) en
                arrière-plan. Quand vous voulez accéder à la musique :
              </p>
              <ol className="list-decimal pl-6 text-sm text-neutral-300 space-y-1">
                <li>
                  Votre application fait une requête vers{" "}
                  <code>noiseport-server.headscale.local:4533</code>
                </li>
                <li>
                  MagicDNS résout cela vers l'IP VPN du serveur (ex:{" "}
                  <code>100.64.0.3</code>)
                </li>
                <li>
                  Votre appareil envoie la requête à travers le tunnel VPN
                  chiffré
                </li>
                <li>Le serveur répond, aussi à travers le tunnel chiffré</li>
                <li>Votre application reçoit la musique et la joue</li>
              </ol>
            </div>
          </div>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Pourquoi choisir NoisePort ?
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Possédez votre musique, possédez vos données
            </h4>
            <p className="text-sm text-neutral-300">
              Aucun service de streaming ne peut retirer des albums de votre
              bibliothèque. Aucun algorithme ne décide ce que vous devriez
              écouter. Aucune entreprise ne suit vos habitudes d'écoute pour
              vendre des publicités. Votre collection musicale est à vous, pour
              toujours.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Construisez une vraie communauté
            </h4>
            <p className="text-sm text-neutral-300">
              Vous vous souvenez quand vous partagiez de la musique avec des
              amis en gravant des CD ou en échangeant des disques durs ?
              NoisePort ramène cet esprit numériquement. Une personne télécharge
              un album rare, tout le monde y accède instantanément. Partagez des
              découvertes, créez des playlists partagées, créez une culture
              musicale unique à votre groupe.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Accès partout, en toute sécurité
            </h4>
            <p className="text-sm text-neutral-300">
              Que vous soyez sur votre canapé, dans un train, ou à l'autre bout
              du monde, votre musique vous suit. Le VPN signifie que vous avez
              le même accès sécurisé quel que soit le réseau sur lequel vous
              êtes—WiFi de café, données mobiles, peu importe.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Trouvez de la musique qui n'est pas en streaming
            </h4>
            <p className="text-sm text-neutral-300">
              Spotify et Apple Music ont d'énormes bibliothèques, mais ils n'ont
              pas tout. Enregistrements live, mix DJ, sorties internationales
              rares, remixes, bootlegs—le réseau Soulseek a ce que les services
              de streaming ne peuvent pas ou ne veulent pas offrir. NoisePort
              vous donne accès aux deux mondes.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Liberté multi-plateforme
            </h4>
            <p className="text-sm text-neutral-300">
              Utilisez votre iPhone, tablette Android, ordinateur portable Linux
              et ordinateur de bureau Windows—tous accédant à la même
              bibliothèque. Choisissez vos applications préférées : Substreamer,
              Ultrasonic, Finamp, ou utilisez simplement l'interface web.
              NoisePort ne vous enferme pas dans un seul écosystème.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
            <h4 className="font-syne text-base font-semibold text-primary mb-2">
              Transparent et open source
            </h4>
            <p className="text-sm text-neutral-300">
              Chaque composant—Headscale, Navidrome, Jellyfin, slskd—est open
              source. Vous pouvez inspecter le code, vérifier qu'il n'y a pas de
              portes dérobées, et contribuer aux améliorations. Ce n'est pas une
              boîte noire; c'est une plateforme communautaire.
            </p>
          </div>
        </div>

        <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
          Qu'est-ce qui différencie ceci de...
        </h2>

        <div className="space-y-3 mb-8">
          <details className="bg-neutral-900 border border-neutral-800 rounded-lg">
            <summary className="cursor-pointer p-4 font-syne font-semibold text-neutral-100 hover:text-primary transition-colors">
              Spotify / Apple Music ?
            </summary>
            <div className="px-4 pb-4 text-sm text-neutral-300">
              <p className="mb-2">
                Les services de streaming sont pratiques mais ont des
                limitations :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les artistes peuvent retirer leur musique à tout moment</li>
                <li>Les services peuvent fermer ou changer de tarification</li>
                <li>Votre écoute est suivie et monétisée</li>
                <li>
                  La musique rare et underground n'est souvent pas disponible
                </li>
                <li>Vous louez l'accès, vous ne possédez pas la musique</li>
              </ul>
              <p className="mt-2">
                NoisePort complète le streaming—utilisez les deux. Gardez le
                streaming pour la découverte, utilisez NoisePort pour la musique
                que vous voulez garder pour toujours ou que vous ne trouvez pas
                ailleurs.
              </p>
            </div>
          </details>

          <details className="bg-neutral-900 border border-neutral-800 rounded-lg">
            <summary className="cursor-pointer p-4 font-syne font-semibold text-neutral-100 hover:text-primary transition-colors">
              Plex / Emby ?
            </summary>
            <div className="px-4 pb-4 text-sm text-neutral-300">
              <p className="mb-2">
                Plex et Emby sont d'excellents serveurs multimédia, mais
                NoisePort est différent :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>VPN intégré</strong> : NoisePort inclut
                  l'infrastructure VPN dès le départ. Plex nécessite une
                  configuration supplémentaire pour l'accès distant sécurisé.
                </li>
                <li>
                  <strong>Intégration P2P</strong> : slskd intègre Soulseek
                  directement dans votre serveur. Plex n'a pas d'outils de
                  téléchargement intégrés.
                </li>
                <li>
                  <strong>Tout auto-hébergé</strong> : Plex nécessite leur cloud
                  pour l'authentification. NoisePort est 100% à vous.
                </li>
                <li>
                  <strong>Musique d'abord</strong> : Navidrome est
                  spécifiquement conçu pour la musique, plus léger et plus
                  rapide que les serveurs multimédia généraux.
                </li>
              </ul>
            </div>
          </details>

          <details className="bg-neutral-900 border border-neutral-800 rounded-lg">
            <summary className="cursor-pointer p-4 font-syne font-semibold text-neutral-100 hover:text-primary transition-colors">
              Dropbox / Google Drive ?
            </summary>
            <div className="px-4 pb-4 text-sm text-neutral-300">
              <p className="mb-2">
                Le stockage cloud peut contenir des fichiers musicaux, mais il
                n'est pas conçu pour le streaming :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Pas de lecteur musical—juste des téléchargements de fichiers
                </li>
                <li>Pas de métadonnées, pochettes d'albums ou organisation</li>
                <li>
                  Pas d'applications mobiles pour le streaming (juste le
                  téléchargement de fichiers entiers)
                </li>
                <li>
                  Vos fichiers sont stockés sur des serveurs d'entreprise, pas
                  les vôtres
                </li>
                <li>Le partage signifie donner accès à tout ou rien</li>
              </ul>
              <p className="mt-2">
                NoisePort vous donne une vraie plateforme musicale avec
                streaming approprié, applications, playlists et partage
                communautaire—le tout sur votre propre infrastructure.
              </p>
            </div>
          </details>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
          <h3 className="font-kode text-xl text-primary mb-3">
            Prêt à commencer ?
          </h3>
          <p className="text-base text-neutral-50 mb-4">
            La configuration de NoisePort prend environ 30 minutes si vous avez
            un serveur ou un ordinateur pour l'héberger. Consultez notre{" "}
            <a
              href="/faq"
              className="text-primary underline hover:text-primary/80 font-semibold"
            >
              FAQ
            </a>{" "}
            pour des guides de configuration détaillés, ou visitez le{" "}
            <a
              href="/installer"
              className="text-primary underline hover:text-primary/80 font-semibold"
            >
              Guide d'installation
            </a>{" "}
            pour commencer.
          </p>
          <p className="text-sm text-neutral-300">
            Vous avez des questions ? Consultez la{" "}
            <a
              href="/faq#user"
              className="text-primary underline hover:text-primary/80"
            >
              FAQ Utilisateur
            </a>{" "}
            si vous rejoignez le serveur de quelqu'un, ou la{" "}
            <a
              href="/faq#admin"
              className="text-primary underline hover:text-primary/80"
            >
              FAQ Admin
            </a>{" "}
            si vous configurez votre propre instance.
          </p>
        </div>
      </motion.div>
    </motion.main>
  );
}
