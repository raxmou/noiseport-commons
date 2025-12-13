import * as React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import DownloadSection from "../components/DownloadSection";
import JoinServerSection from "../components/JoinServerSection";
import ServerSection from "../components/ServerSection";
import InstallerNavigation from "../components/installer/InstallerNavigation";
import InstallerTableOfContents from "../components/installer/InstallerTableOfContents";

export default function Installer() {
  const location = useLocation();
  const [tab, setTab] = React.useState<"download" | "join" | "create">(
    "download"
  );
  const [pendingScrollTo, setPendingScrollTo] = React.useState<string | null>(
    null
  );

  // Handle hash navigation from URL
  React.useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "join") {
      setTab("join");
    } else if (hash === "create") {
      setTab("create");
    } else if (hash === "download") {
      setTab("download");
    }
  }, [location]);

  // Effect: when tab changes to 'join' and pendingScrollTo is set, scroll after render
  React.useEffect(() => {
    if (tab === "join" && pendingScrollTo) {
      // Wait for JoinServerSection to render
      const timeout = setTimeout(() => {
        const el = document.getElementById(pendingScrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setPendingScrollTo(null);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [tab, pendingScrollTo]);

  // Handler to be passed to DownloadSection
  const handleGoToJoinServer = () => {
    setTab("join");
    setPendingScrollTo("join-server");
  };

  return (
    <div className="flex min-h-screen bg-neutral-950">
      {/* Left Navigation - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block w-64 overflow-y-auto fixed left-0 top-20 md:top-24 bottom-0">
        <InstallerNavigation activeTab={tab} onTabChange={setTab} />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 lg:mr-64 overflow-y-auto bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <section id="overview" className="scroll-mt-24">
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                  NoisePort est un écosystème libre et open-source pour
                  reprendre le contrôle de sa musique. Il se compose de deux
                  éléments&nbsp;:
                  <br />
                  <br />
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-200">
                  <li>
                    <strong>NoisePort</strong> — l'application <em>desktop</em>{" "}
                    et <em>mobile</em> qui permet d'écouter, gérer votre
                    bibliothèque musicale auto-hébergée, explorer des
                    discographies et télécharger des albums via le réseau
                    Soulseek.
                  </li>
                  <li>
                    <strong>NoisePort Server</strong> — le serveur à déployer
                    sur un <em>Raspberry Pi</em>, un vieil ordinateur, ou un
                    hébergement cloud pour rendre votre musique accessible
                    partout.
                  </li>
                </ul>
              </div>
            </section>

            {/* Two paths intro */}
            <div className="mb-6 md:mb-8 p-4 sm:p-5 md:p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <h2 className="font-kode text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Deux façons d'utiliser NoisePort
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-neutral-900 p-4 sm:p-5 rounded-lg border border-neutral-800">
                  <h3 className="font-kode text-base sm:text-lg text-primary mb-2">
                    🎧 Rejoindre un Serveur
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mb-3 leading-relaxed">
                    Tu as été invité·e à rejoindre un serveur NoisePort
                    existant. Télécharge l'application et connecte-toi.
                  </p>
                  <button
                    onClick={() => {
                      setTab("join");
                      window.location.hash = "join";
                    }}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary text-neutral-950 rounded font-kode hover:bg-primary/80 transition-colors w-full sm:w-auto"
                  >
                    Commencer →
                  </button>
                </div>
                <div className="bg-neutral-900 p-4 sm:p-5 rounded-lg border border-neutral-800">
                  <h3 className="font-kode text-base sm:text-lg text-primary mb-2">
                    🚀 Créer un Serveur
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mb-3 leading-relaxed">
                    Vous voulez héberger votre propre serveur de musique.
                    Déployez NoisePort Server sur votre machine.
                  </p>
                  <button
                    onClick={() => {
                      setTab("create");
                      window.location.hash = "create";
                    }}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary text-neutral-950 rounded font-kode hover:bg-primary/80 transition-colors w-full sm:w-auto"
                  >
                    Commencer →
                  </button>
                </div>
              </div>
            </div>

            <div
              id="download"
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 md:mb-8 scroll-mt-24"
            >
              <button
                className={`inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded font-kode text-sm sm:text-base md:text-lg transition-colors duration-200 ${
                  tab === "download"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => {
                  setTab("download");
                  window.location.hash = "download";
                }}
              >
                Télécharger l'application
              </button>
              <button
                className={`inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded font-kode text-sm sm:text-base md:text-lg transition-colors duration-200 ${
                  tab === "join"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => {
                  setTab("join");
                  window.location.hash = "join";
                }}
              >
                Rejoindre un serveur
              </button>
              <button
                className={`inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded font-kode text-sm sm:text-base md:text-lg transition-colors duration-200 ${
                  tab === "create"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => {
                  setTab("create");
                  window.location.hash = "create";
                }}
              >
                Créer un serveur
              </button>
            </div>

            {tab === "download" && (
              <DownloadSection onGoToJoinServer={handleGoToJoinServer} />
            )}
            {tab === "join" && <JoinServerSection />}
            {tab === "create" && <ServerSection />}
          </motion.div>
        </div>
      </main>

      {/* Right Table of Contents - Hidden on mobile and tablet, visible on lg+ */}
      <div className="hidden lg:block w-64 overflow-y-auto fixed right-0 top-20 md:top-24 bottom-0">
        <InstallerTableOfContents activeTab={tab} />
      </div>
    </div>
  );
}
