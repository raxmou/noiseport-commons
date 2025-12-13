import { motion } from "framer-motion";
import ServerSection from "../components/ServerSection";

export default function Creer() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Hero Section */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-full">
              <svg
                className="w-4 h-4 text-primary"
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
              <span className="text-primary font-kode text-sm">
                Créer un serveur
              </span>
            </div>
            <h1 className="font-kode text-3xl md:text-5xl mb-4 text-neutral-100">
              Héberge ton propre serveur NoisePort
            </h1>
            <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Déploie NoisePort Server sur ta machine et partage ta
              bibliothèque musicale avec tes proches en toute autonomie.
            </p>
          </div>

          {/* Prerequisites */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-kode text-xl md:text-2xl mb-4 text-neutral-100">
              Ce dont tu auras besoin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-kode text-base md:text-lg text-primary mb-2">
                  Une machine
                </h3>
                <p className="text-sm text-neutral-400">
                  Raspberry Pi, vieux PC, ou serveur cloud pour héberger votre
                  musique
                </p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-kode text-base md:text-lg text-primary mb-2">
                  30-60 minutes
                </h3>
                <p className="text-sm text-neutral-400">
                  Le temps nécessaire pour installer et configurer le serveur
                </p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="font-kode text-base md:text-lg text-primary mb-2">
                  Bibliothèque musicale
                </h3>
                <p className="text-sm text-neutral-400">
                  Tes fichiers MP3, FLAC ou autres formats audio à partager
                </p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-8 p-4 md:p-6 bg-yellow-900/20 border-l-4 border-yellow-400 rounded-lg">
            <h3 className="font-kode text-lg text-yellow-300 mb-2">
              📋 Niveau technique
            </h3>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Cette installation nécessite d'utiliser le terminal de commandes.
              Pas d'inquiétude : tout est expliqué étape par étape, même sans
              expérience préalable. Et puis, un coup de votre moteur de
              recherche préféré et c'est tipar !
            </p>
          </div>

          {/* Server Installation Guide */}
          <section id="install-server" className="scroll-mt-24">
            <ServerSection />
          </section>

          {/* Next Steps */}
          <div className="mt-12 p-6 bg-green-900/20 border-l-4 border-green-400 rounded-lg">
            <h3 className="font-kode text-xl text-green-300 mb-3">
              ✅ Prochaines étapes
            </h3>
            <p className="text-neutral-300 mb-4">
              Une fois ton serveur déployé, tu pourras :
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm md:text-base mb-4">
              <li>Télécharger l'application NoisePort et vous y connecter</li>
              <li>Inviter d'autres personnes en générant des clés d'accès</li>
              <li>Gérer votre bibliothèque musicale via l'interface web</li>
              <li>Configurer Soulseek pour télécharger de nouveaux albums</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/rejoindre"
                className="inline-flex items-center justify-center px-4 py-2 rounded bg-green-500 text-white font-kode text-sm hover:bg-green-600 transition-colors"
              >
                Télécharger l'application →
              </a>
              <a
                href="/faq#create"
                className="inline-flex items-center justify-center px-4 py-2 rounded bg-neutral-800 text-neutral-100 font-kode text-sm hover:bg-neutral-700 transition-colors"
              >
                FAQ Création de serveur
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
