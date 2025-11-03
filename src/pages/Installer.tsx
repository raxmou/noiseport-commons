import * as React from "react";
import { motion } from "framer-motion";
import DesktopSection from "../components/DesktopSection";
import MobileSection from "../components/MobileSection";
import ServerSection from "../components/ServerSection";
import InstallerNavigation from "../components/installer/InstallerNavigation";
import InstallerTableOfContents from "../components/installer/InstallerTableOfContents";

export default function Installer() {
  const [tab, setTab] = React.useState<"apps" | "server">("apps");

  return (
    <div className="flex min-h-screen bg-neutral-900">
      {/* Left Navigation - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block w-64 overflow-y-auto fixed left-0 top-[73px] bottom-0">
        <InstallerNavigation activeTab={tab} onTabChange={setTab} />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 md:ml-64 lg:mr-64 overflow-y-auto bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <section id="overview" className="scroll-mt-24">
              <div className="mb-8">
                <p className="text-neutral-200">
                  NoisePort est un écosystème libre et open-source pour reprendre le
                  contrôle de sa musique. Il se compose de deux éléments&nbsp;:
                  <br />
                  <br />
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-200">
                  <li>
                    <strong>NoisePort</strong> — l'application <em>desktop</em> et{" "}
                    <em>mobile</em> qui permet d'écouter, gérer votre bibliothèque
                    musicale auto-hébergée, explorer des discographies et télécharger
                    des albums via le réseau Soulseek.
                  </li>
                  <li>
                    <strong>NoisePort Server</strong> — le serveur à déployer sur un{" "}
                    <em>Raspberry Pi</em>, un vieil ordinateur, ou un hébergement
                    cloud pour rendre votre musique accessible partout.
                  </li>
                </ul>
              </div>
            </section>

            <div id="apps" className="flex gap-4 mb-8 scroll-mt-24">
              <button
                className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                  tab === "apps"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => setTab("apps")}
              >
                NoisePort
              </button>
              <button
                className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                  tab === "server"
                    ? "bg-primary text-neutral-950"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
                onClick={() => setTab("server")}
              >
                NoisePort Server
              </button>
            </div>

            {tab === "apps" && (
              <>
                <DesktopSection />
                <MobileSection />
              </>
            )}
            {tab === "server" && <ServerSection />}
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
