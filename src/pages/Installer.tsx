import * as React from "react";
import { motion } from "framer-motion";
import DownloadSection from "../components/DownloadSection";
import JoinServerSection from "../components/JoinServerSection";
import ServerSection from "../components/ServerSection";
import InstallerNavigation from "../components/installer/InstallerNavigation";
import InstallerTableOfContents from "../components/installer/InstallerTableOfContents";

export default function Installer() {
  const [tab, setTab] = React.useState<"download" | "join" | "create">(
    "download"
  );
  const [pendingScrollTo, setPendingScrollTo] = React.useState<string | null>(
    null
  );

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
    <div className="flex min-h-screen bg-neutral-950 pt-[73px]">
      {/* Left Navigation - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block w-64 overflow-y-auto fixed left-0 top-[73px] bottom-0">
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
              <div className="mb-8">
                <p className="text-neutral-200">
                  NoisePort est un écosystème libre et open-source pour
                  reprendre le contrôle de sa musique. Il se compose de deux
                  éléments&nbsp;:
                  <br />
                  <br />
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-200">
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

            <div id="download" className="flex gap-4 mb-8 scroll-mt-24">
              <button
                className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                  tab === "download"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => setTab("download")}
              >
                Télécharger l'application
              </button>
              <button
                className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                  tab === "join"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => setTab("join")}
              >
                Rejoindre un serveur
              </button>
              <button
                className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                  tab === "create"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => setTab("create")}
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
      <div className="hidden lg:block w-64 overflow-y-auto fixed right-0 top-[73px] bottom-0">
        <InstallerTableOfContents activeTab={tab} />
      </div>
    </div>
  );
}
