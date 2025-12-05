
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.img
        src={logo}
        alt="Noiseport Logo"
        className="h-32 w-32 mb-4 object-contain"
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
        NoisePort est une plateforme libre pour héberger, écouter et partager sa musique. <br />
        Hors des plateformes. Hors des algorithmes.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
        <motion.a
          href="/manifeste"
          className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded bg-primary text-neutral-950 font-kode text-base sm:text-lg shadow hover:bg-primary/80 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Lire le manifeste
        </motion.a>
        <motion.a
          href="/installer"
          className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded bg-primary text-neutral-950 font-kode text-base sm:text-lg shadow hover:bg-primary/80 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Installer
        </motion.a>
      </div>
  </motion.main>
  );
}
