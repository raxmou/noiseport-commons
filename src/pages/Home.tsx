import logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.img
        src={logo}
        alt="Noiseport Logo"
        className="h-32 w-32 mb-4 object-contain mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="font-kode text-4xl md:text-6xl mb-6 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        NoisePort
      </motion.h1>
      <motion.p
        className="font-syne text-base md:text-2xl mb-6 md:mb-8 max-w-4xl text-neutral-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Ta bibliothèque musicale collective. <br />
        Auto-hébergée, libre, hors des algorithmes.
      </motion.p>

      {/* Two paths section */}
      <motion.div
        className="w-full max-w-3xl mb-8 px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2 className="font-kode text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-primary">
          Deux façons de commencer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
          <motion.a
            href="/rejoindre"
            className="p-4 sm:p-5 md:p-6 rounded-lg border-2 border-neutral-700 hover:border-primary bg-neutral-900/30 hover:bg-neutral-900/60 transition-all group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 text-primary"
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
            <h3 className="font-kode text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-primary transition-colors">
              Rejoindre un Serveur
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Tu as été invité·e à rejoindre un serveur NoisePort existant ?
              Commence ici.
            </p>
          </motion.a>
          <motion.a
            href="/creer"
            className="p-4 sm:p-5 md:p-6 rounded-lg border-2 border-neutral-700 hover:border-primary bg-neutral-900/30 hover:bg-neutral-900/60 transition-all group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 text-primary"
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
            <h3 className="font-kode text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-primary transition-colors">
              Créer un Serveur
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Tu veux héberger ton propre serveur de musique ? Crée ton
              instance.
            </p>
          </motion.a>
        </div>
      </motion.div>

      {/* Manifeste CTA */}
      <motion.div
        className="w-full max-w-3xl mt-4 px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <a
          href="/manifeste"
          className="group block p-6 sm:p-8 rounded-lg border-2 border-neutral-800 hover:border-primary/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 hover:from-neutral-900/80 hover:to-neutral-950/80 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <svg
              className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="font-kode text-xl sm:text-2xl text-neutral-100 group-hover:text-primary transition-colors">
              Pourquoi NoisePort ?
            </h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
            Découvrez notre vision d'une musique libre, décentralisée et hors
            des algorithmes.
          </p>
          <div className="mt-4 flex items-center gap-2 text-primary font-kode text-sm group-hover:gap-3 transition-all">
            Lire le manifeste
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </a>
      </motion.div>
    </motion.main>
  );
}
