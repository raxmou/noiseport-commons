import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DesktopSection from "../components/DesktopSection";
import MobileSection from "../components/MobileSection";
import JoinServerSection from "../components/JoinServerSection";

export default function Rejoindre() {
  const [platform, setPlatform] = useState<"desktop" | "mobile">("desktop");

  // Auto-detect platform on mount
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setPlatform(isMobile ? "mobile" : "desktop");
  }, []);

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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="text-primary font-kode text-sm">
                Rejoindre un serveur
              </span>
            </div>
            <h1 className="font-kode text-3xl md:text-5xl mb-4 text-neutral-100">
              Connecte-toi à un serveur NoisePort
            </h1>
            <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Tu as été invité·e à rejoindre un serveur NoisePort existant ?
              Suis ces étapes pour télécharger l'application et te
              connecter.
            </p>
          </div>

          {/* Steps Overview */}
          <div className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-neutral-950 flex items-center justify-center font-kode font-bold">
                  1
                </div>
                <h3 className="font-kode text-lg text-primary">Télécharger</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Installez l'application NoisePort sur votre appareil
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-neutral-950 flex items-center justify-center font-kode font-bold">
                  2
                </div>
                <h3 className="font-kode text-lg text-primary">
                  Connecter VPN
                </h3>
              </div>
              <p className="text-sm text-neutral-400">
                Rejoignez le réseau privé sécurisé avec Tailscale
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-neutral-950 flex items-center justify-center font-kode font-bold">
                  3
                </div>
                <h3 className="font-kode text-lg text-primary">Profiter</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Accédez à la bibliothèque musicale et écoutez
              </p>
            </div>
          </div>

          {/* Step 1: Download App */}
          <section id="download" className="mb-12 scroll-mt-24">
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary text-neutral-950 flex items-center justify-center font-kode font-bold text-lg">
                  1
                </div>
                <h2 className="font-kode text-2xl md:text-3xl text-neutral-100">
                  Télécharger l'application NoisePort
                </h2>
              </div>
              <p className="text-sm md:text-base text-neutral-300 ml-13">
                Choisis ta plateforme pour télécharger directement
              </p>
            </div>

            {/* Platform Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                <button
                  onClick={() => setPlatform("desktop")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-kode text-sm transition-all duration-200 ${
                    platform === "desktop"
                      ? "bg-primary text-neutral-950 font-bold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Desktop
                </button>
                <button
                  onClick={() => setPlatform("mobile")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-kode text-sm transition-all duration-200 ${
                    platform === "mobile"
                      ? "bg-primary text-neutral-950 font-bold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Mobile
                </button>
              </div>
            </div>

            {/* Platform Content with Animation */}
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {platform === "desktop" ? <DesktopSection /> : <MobileSection />}
            </motion.div>
          </section>

          {/* Step 2: Join Server */}
          <section id="join-server" className="scroll-mt-24">
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary text-neutral-950 flex items-center justify-center font-kode font-bold text-lg">
                  2
                </div>
                <h2 className="font-kode text-2xl md:text-3xl text-neutral-100">
                  Se connecter au serveur
                </h2>
              </div>
              <p className="text-sm md:text-base text-neutral-300 ml-13">
                Configurez votre connexion VPN avec les informations fournies
                par l'administrateur du serveur.
              </p>
            </div>

            <JoinServerSection />
          </section>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-blue-900/20 border-l-4 border-blue-400 rounded-lg">
            <h3 className="font-kode text-xl text-blue-300 mb-3">
              Besoin d'aide ?
            </h3>
            <p className="text-neutral-300 mb-4">
              Si vous rencontrez des difficultés lors de la connexion, consultez
              notre FAQ ou contactez l'administrateur de votre serveur pour
              obtenir de l'aide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/faq#join"
                className="inline-flex items-center justify-center px-4 py-2 rounded bg-blue-500 text-white font-kode text-sm hover:bg-blue-600 transition-colors"
              >
                Consulter la FAQ
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded bg-neutral-800 text-neutral-100 font-kode text-sm hover:bg-neutral-700 transition-colors"
              >
                Contacter le support
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
