import * as React from "react";
import { motion } from "framer-motion";
import DesktopSection from "../components/DesktopSection";
import MobileSection from "../components/MobileSection";
import ServerSection from "../components/ServerSection";
import InstallerLayout from "../components/installer/InstallerLayout";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function Installer() {
  const [tab, setTab] = React.useState<"apps" | "server">("apps");

  return (
    <ThemeProvider>
      <InstallerLayout activeTab={tab} onTabChange={setTab}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <section id="overview" className="scroll-mt-24">
            <motion.h1
              className="font-kode text-3xl md:text-5xl mb-8 text-neutral-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Installer NoisePort
            </motion.h1>
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
      </InstallerLayout>
    </ThemeProvider>
  );
}
