import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Commencer() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="w-full pb-16">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <motion.h1
          className="font-kode text-4xl md:text-6xl mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Commencer avec Noiseport
        </motion.h1>
        <motion.p
          className="font-syne text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Deux chemins possibles : héberger ton propre serveur ou rejoindre un
          serveur existant.
        </motion.p>

        {/* Deux chemins clairs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <a
            href="#installer"
            className="flex-1 p-8 rounded-lg border-2 border-primary bg-primary/10 hover:bg-primary/20 transition-all group"
          >
            <div className="text-5xl mb-4">🖥️</div>
            <h2 className="font-kode text-2xl mb-3 group-hover:text-primary transition-colors">
              Installer un serveur
            </h2>
            <p className="font-syne text-neutral-400">
              Pour celles et ceux qui veulent héberger
            </p>
          </a>
          <a
            href="#rejoindre"
            className="flex-1 p-8 rounded-lg border-2 border-neutral-700 hover:border-primary bg-neutral-900/30 hover:bg-neutral-900/60 transition-all group"
          >
            <div className="text-5xl mb-4">🎧</div>
            <h2 className="font-kode text-2xl mb-3 group-hover:text-primary transition-colors">
              Rejoindre un serveur
            </h2>
            <p className="font-syne text-neutral-400">
              Pour celles et ceux qui ont été invité·es
            </p>
          </a>
        </motion.div>
      </section>

      <div className="border-t border-neutral-800"></div>

      {/* Section Installer un serveur */}
      <section id="installer" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-kode text-3xl md:text-5xl mb-8">
            Installer un serveur
          </h2>
          <p className="font-syne text-lg text-neutral-300 mb-12">
            Héberger Noiseport, c'est créer un espace d'écoute partagé pour toi
            et ton cercle. Voici les étapes principales :
          </p>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                1. Choisir ton type de machine
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Tu peux héberger Noiseport sur :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Un Raspberry Pi</strong> — Idéal pour un serveur
                  low-tech qui tourne 24/7 chez toi
                </li>
                <li>
                  <strong>Un vieil ordinateur</strong> — Récupère une machine
                  qui traîne et transforme-la en serveur
                </li>
                <li>
                  <strong>Un serveur cloud éthique</strong> — Chez un hébergeur
                  comme{" "}
                  <a
                    href="https://www.hetzner.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Hetzner
                  </a>{" "}
                  ou{" "}
                  <a
                    href="https://www.scaleway.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Scaleway
                  </a>
                </li>
              </ul>
            </div>

            {/* Étape 2 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                2. Installer Noiseport Server
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Deux options d'installation :
              </p>
              <div className="bg-neutral-900 p-6 rounded-lg mb-4">
                <h4 className="font-kode text-lg mb-2 text-primary">
                  Option A : Installation Docker (recommandée)
                </h4>
                <pre className="bg-neutral-950 p-4 rounded overflow-x-auto text-sm">
                  <code>{`# Clone le dépôt
git clone https://github.com/raxmou/noiseport-server.git
cd noiseport-server

# Lance avec Docker Compose
docker-compose up -d`}</code>
                </pre>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h4 className="font-kode text-lg mb-2 text-primary">
                  Option B : Installation manuelle
                </h4>
                <p className="font-syne text-sm text-neutral-400 mb-2">
                  Guide détaillé à venir dans la documentation complète
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                3. Ouvrir l'accès depuis l'extérieur
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Pour que ton crew puisse se connecter depuis n'importe où, tu
                dois :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  Configurer la <strong>redirection de port</strong> sur ton
                  routeur (port 3000 par défaut)
                </li>
                <li>
                  Obtenir ton <strong>adresse IP publique</strong> (tu peux la
                  trouver sur{" "}
                  <a
                    href="https://www.whatismyip.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    whatismyip.com
                  </a>
                  )
                </li>
                <li>
                  Optionnel : utiliser un <strong>nom de domaine</strong> pour
                  un accès plus simple (via DuckDNS ou No-IP par exemple)
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded">
                <p className="font-syne text-sm text-yellow-500">
                  💡 <strong>Note :</strong> Si tu héberges sur le cloud, l'IP
                  publique est déjà configurée !
                </p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                4. Inviter des personnes
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Une fois ton serveur en ligne :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  Crée des <strong>comptes utilisateur</strong> depuis le
                  panneau d'administration
                </li>
                <li>
                  Partage l'<strong>URL du serveur</strong> + identifiants avec
                  ton crew
                </li>
                <li>
                  Limite recommandée : <strong>jusqu'à 50 personnes</strong>{" "}
                  pour une expérience fluide
                </li>
              </ul>
            </div>

            {/* Étape 5 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">5. Ajouter ta musique</h3>
              <p className="font-syne text-neutral-300 mb-4">
                Il y a plusieurs façons d'alimenter la bibliothèque :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Dossier local</strong> — Monte un dossier contenant
                  tes fichiers audio
                </li>
                <li>
                  <strong>Chemin réseau</strong> — Connecte un NAS ou un disque
                  dur externe
                </li>
                <li>
                  <strong>Upload direct</strong> — Via l'interface web (à venir)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-neutral-900/50 border border-neutral-700 rounded-lg">
            <h4 className="font-kode text-xl mb-3">Besoin d'aide ?</h4>
            <p className="font-syne text-neutral-300 mb-4">
              Pour des guides détaillés, consulte la documentation complète ou
              rejoins la communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/raxmou/noiseport-commons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded border border-neutral-600 text-neutral-100 hover:border-primary hover:text-primary transition-colors"
              >
                Documentation GitHub
              </a>
              <a
                href="mailto:contact@noiseport.org"
                className="inline-flex items-center justify-center px-4 py-2 rounded border border-neutral-600 text-neutral-100 hover:border-primary hover:text-primary transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-800"></div>

      {/* Section Rejoindre un serveur */}
      <section id="rejoindre" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-kode text-3xl md:text-5xl mb-8">
            Rejoindre un serveur
          </h2>
          <p className="font-syne text-lg text-neutral-300 mb-12">
            On t'a envoyé une invitation pour rejoindre un serveur Noiseport ?
            C'est très simple.
          </p>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                1. Récupère tes identifiants
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                La personne qui t'a invité·e devrait t'avoir donné :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>L'URL du serveur</strong> — Par exemple :{" "}
                  <code className="bg-neutral-900 px-2 py-1 rounded text-sm">
                    http://192.168.1.50:3000
                  </code>{" "}
                  ou{" "}
                  <code className="bg-neutral-900 px-2 py-1 rounded text-sm">
                    https://noiseport.example.com
                  </code>
                </li>
                <li>
                  <strong>Ton nom d'utilisateur·rice</strong>
                </li>
                <li>
                  <strong>Ton mot de passe</strong> (temporaire, tu pourras le
                  changer)
                </li>
              </ul>
            </div>

            {/* Étape 2 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                2. Ouvre l'URL dans ton navigateur
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Copie l'URL du serveur et colle-la dans ton navigateur web
                (Chrome, Firefox, Safari...).
              </p>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded">
                <p className="font-syne text-sm text-blue-400">
                  💡 <strong>Astuce :</strong> Ajoute la page aux favoris pour y
                  accéder facilement !
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">3. Connecte-toi</h3>
              <p className="font-syne text-neutral-300 mb-4">
                Entre ton nom d'utilisateur·rice et ton mot de passe sur la page
                de connexion.
              </p>
              <p className="font-syne text-neutral-300">
                Si c'est ta première connexion, on te demandera peut-être de
                changer ton mot de passe.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                4. Découvre la bibliothèque
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Une fois connecté·e, tu peux :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Parcourir</strong> la bibliothèque musicale partagée
                </li>
                <li>
                  <strong>Écouter</strong> en streaming directement depuis ton
                  navigateur
                </li>
                <li>
                  <strong>Créer des playlists</strong> personnelles ou
                  collectives
                </li>
                <li>
                  <strong>Découvrir</strong> ce que les autres ont ajouté
                </li>
              </ul>
            </div>

            {/* Étape 5 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-kode text-2xl mb-4">
                5. Contribue à la bibliothèque
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Si tu as les permissions, tu peux aussi ajouter de la musique à
                la discothèque commune.
              </p>
              <p className="font-syne text-sm text-neutral-400">
                (Les détails dépendent de la configuration du serveur — demande
                à l'admin !)
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-neutral-900/50 border border-neutral-700 rounded-lg">
            <h4 className="font-kode text-xl mb-3">Problème de connexion ?</h4>
            <p className="font-syne text-neutral-300 mb-4">
              Voici quelques points à vérifier :
            </p>
            <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
              <li>
                Vérifie que tu es bien sur le bon réseau (WiFi local si le
                serveur est chez quelqu'un)
              </li>
              <li>
                Demande à l'admin du serveur si celui-ci est bien en ligne
              </li>
              <li>Vérifie que l'URL est exacte (attention aux typos !)</li>
              <li>
                Essaie de rafraîchir la page ou utilise un autre navigateur
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
