import { motion } from "framer-motion";

import { useState } from "react";
// SVG icon for APK download
const ApkDownloadButton = () => (
  <a
    href="/noiseport.apk"
    download
    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-neutral-950 font-bold shadow hover:bg-primary/90 transition-colors"
    style={{ textDecoration: "none" }}
  >
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="6" fill="#222" />
      <path
        d="M14 6v10m0 0l-4-4m4 4l4-4"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="7" y="20" width="14" height="2" rx="1" fill="#ffffff" />
    </svg>
    <span>Télécharger l’APK Android</span>
  </a>
);
import screenshot1 from "../assets/app-screenshot-1.png";
import screenshot2 from "../assets/app-screenshot-2.png";
import screenshot3 from "../assets/app-screenshot-3.png";
import screenshot4 from "../assets/app-screenshot-4.png";
import screenshot5 from "../assets/app-screenshot-5.png";
import screenshot6 from "../assets/app-screenshot-6.png";
import screenshot7 from "../assets/app-screenshot-7.png";
import wizardScreenshot from "../assets/wizard-screenshot.png";
import mobile1 from "../assets/1.jpg";
import mobile2 from "../assets/2.png";
import mobile3 from "../assets/3.png";
import mobile4 from "../assets/4.png";
import mobile5 from "../assets/5.jpg";
import mobile6 from "../assets/6.png";
import mobile7 from "../assets/7.png";
import mobile8 from "../assets/8.png";
import mobile9 from "../assets/9.png";
import mobileNoisePortSettings from "../assets/mobile-noiseport-settings.png";
import mobileSettings2 from "../assets/mobile-settings.png";
import mobileSlskdSettings from "../assets/mobile-slskd-settings.png";

import ScreenshotCarousel from "./ScreenshotCarousel";
import { i } from "framer-motion/client";

export default function Installer() {
  const [tab, setTab] = useState<"apps" | "server">("apps");
  const [appSubTab, setAppSubTab] = useState<"desktop" | "mobile">("desktop");
  // Example: first 4 are desktop, last 3 are mobile
  const desktopScreenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
    screenshot7,
  ];
  const mobileScreenshots = [
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
    mobile6,
    mobile7,
    mobile8,
    mobile9,
  ];
  return (
    <motion.main
      className="prose prose-invert mx-auto px-4 py-12 font-syne pt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="font-kode text-3xl md:text-5xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Installer NoisePort
      </motion.h1>
      <div className="flex gap-4 mb-8">
        <section>
          <p>
            NoisePort est un écosystème libre et open-source pour reprendre le
            contrôle de sa musique. Il se compose de deux éléments&nbsp;:
            <br />
            <br />
          </p>
          <ul>
            <li>
              <strong>NoisePort</strong> — l’application <em>desktop</em> et{" "}
              <em>mobile</em> qui permet d’écouter, gérer votre bibliothèque
              musicale auto-hébergée, explorer des discographies et télécharger
              des albums via le réseau Soulseek.
            </li>
            <li>
              <strong>NoisePort Server</strong> — le serveur à déployer sur un{" "}
              <em>Raspberry Pi</em>, un vieil ordinateur, ou un hébergement
              cloud pour rendre votre musique accessible partout.
            </li>
          </ul>
        </section>
      </div>
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
            tab === "apps"
              ? "bg-primary text-neutral-950"
              : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
          }`}
          onClick={() => setTab("apps")}
        >
          NoisePort
        </button>
        <button
          className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
            tab === "server"
              ? "bg-primary text-neutral-950"
              : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
          }`}
          onClick={() => setTab("server")}
        >
          NoisePort Server
        </button>
      </div>
      {tab === "apps" && (
        <section>
          <h2 className="font-kode text-2xl md:text-3xl mt-10 mb-4">
            Télécharger les applications
          </h2>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>Important&nbsp;:</strong> Pour profiter pleinement des
            applications NoisePort, il est nécessaire de{" "}
            <b>déployer NoisePort Server</b> sur un ordinateur, un Raspberry Pi
            ou un serveur cloud. C’est ce serveur qui rend votre bibliothèque
            musicale accessible et synchronisée sur tous vos appareils.
            <br />
          </div>
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                appSubTab === "desktop"
                  ? "bg-primary text-neutral-950"
                  : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
              }`}
              onClick={() => setAppSubTab("desktop")}
            >
              Desktop
            </button>
            <button
              className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
                appSubTab === "mobile"
                  ? "bg-primary text-neutral-950"
                  : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
              }`}
              onClick={() => setAppSubTab("mobile")}
            >
              Mobile
            </button>
          </div>
          {appSubTab === "desktop" && (
            <>
              <p>
                Vous pouvez télécharger les versions <strong>macOS</strong>,{" "}
                <strong>Windows</strong>,<strong> Linux</strong> directement
                depuis notre{" "}
                <a
                  href="https://github.com/maxenceroux/noiseport/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  page GitHub
                </a>
                .
              </p>
              <br />
              <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
                <strong>Comment choisir la bonne version&nbsp;?</strong>
                <br />
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>
                    <b>macOS</b> : Téléchargez le fichier <code>.dmg</code> (ex:{" "}
                    <code>NoisePort-x.x.x.dmg</code>). Double-cliquez pour
                    installer comme une application classique.
                  </li>
                  <li>
                    <b>Windows</b> : Téléchargez le fichier <code>.exe</code>{" "}
                    (ex: <code>NoisePort-x.x.x.exe</code>). Double-cliquez pour
                    lancer l’installation.
                  </li>
                  <li>
                    <b>Linux</b> : Choisissez le fichier <code>.AppImage</code>{" "}
                    (universel), ou <code>.deb</code> si vous êtes sur
                    Ubuntu/Debian. Pour <code>.AppImage</code>, rendez-le
                    exécutable puis double-cliquez.
                  </li>
                </ul>
                <b>Astuce&nbsp;:</b> La dernière version est toujours en haut de
                la liste sur la page GitHub.
                <br />
                <b>Besoin d’aide&nbsp;?</b> Contactez-moi via la page{" "}
                <a href="/contact" className="text-primary underline">
                  Contact
                </a>{" "}
                si vous avez un doute ou une question.
              </div>
              <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary">
                <strong>À propos de l’application Desktop</strong>
                <br />
                NoisePort est un <b>fork</b> du projet open-source{" "}
                <a
                  href="https://github.com/jeffvli/feishin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Feishin
                </a>
                .<br />
                <b>Qu’est-ce qu’un fork&nbsp;?</b> C’est une copie d’un projet
                existant, permettant d’ajouter des fonctionnalités ou d’adapter
                le logiciel à d’autres besoins, tout en gardant l’évolution du
                projet d’origine.
                <br />
                NoisePort Desktop inclut{" "}
                <b>toutes les fonctionnalités de Feishin</b>.<br />
                J’ai ajouté la <b>connexion à Soulseek</b>, les pages{" "}
                <b>Discover</b>, le <b>suivi des recherches</b> et le{" "}
                <b>téléchargement Soulseek</b> directement dans l’application.
                <br />
                Je tiens à <b>remercier énormément</b> tous les contributeurs de
                Feishin pour leur travail exceptionnel.
                <br />
                NoisePort suit de près les mises à jour de Feishin pour rester à
                jour.
                <br />
                <b>Envie d’aider&nbsp;?</b> Vous pouvez contribuer à{" "}
                <a
                  href="https://github.com/jeffvli/feishin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Feishin
                </a>{" "}
                ou à NoisePort&nbsp;: chaque contribution compte&nbsp;!
                <br />
              </div>
              <h2 className="font-kode text-2xl md:text-3xl mt-10 mb-4">
                Aperçu de l’application Desktop
              </h2>
              <ScreenshotCarousel images={desktopScreenshots} />
            </>
          )}
          {appSubTab === "mobile" && (
            <>
              <p>
                Vous pouvez télécharger la version <strong>Android</strong>{" "}
                directement ici&nbsp;:
                <br />
                <br />
                <ApkDownloadButton />
                <br />
                <br />
                <span className="text-xs text-neutral-400">
                  (Fichier hébergé sur ce site, version la plus récente)
                </span>
                <br />
                <br />
                <b>Comment installer&nbsp;?</b>
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>Téléchargez l’APK sur votre téléphone Android.</li>
                  <li>
                    Ouvrez le fichier téléchargé et suivez les instructions.
                  </li>
                  <li>
                    Si besoin, autorisez l’installation d’applications de
                    sources inconnues dans les paramètres Android.
                  </li>
                </ul>
                <b>Note sécurité&nbsp;:</b> L’APK est signé et mis à jour
                régulièrement. Installez uniquement depuis des sources fiables.
                <br />
                <br />
                Désolé pour les possesseur·euses d’iPhone, mais il faut payer
                100€ par an pour publier une application sur l’App Store, ce qui
                n’est pas viable pour un projet open-source et gratuit.
              </p>
              <br />
              <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary">
                <strong>À propos de l’application Mobile</strong>
                <br />
                L’application mobile NoisePort est un <b>fork</b> du projet
                open-source{" "}
                <a
                  href="https://github.com/y20k/finamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Finamp
                </a>
                .
                <br />
                <b>Note ergonomie&nbsp;:</b> Finamp est moins ergonomique que
                l’application desktop, et j’utilise principalement la version
                desktop au quotidien. J’ai donc consacré moins d’efforts de
                développement à l’application mobile.
                <br />
                <b>Fonctionnalités&nbsp;:</b> Malgré tout, l’application mobile
                propose les mêmes fonctionnalités principales que la version
                desktop pour écouter et gérer votre bibliothèque musicale.
                <br />
                <b>Remerciements&nbsp;:</b> Un grand merci aux développeurs
                actifs de Finamp pour leur travail et leur engagement
                open-source.
              </div>
              <h2 className="font-kode text-2xl md:text-3xl mt-10 mb-4">
                Aperçu de l’application Mobile
              </h2>
              <ScreenshotCarousel images={mobileScreenshots} />
            </>
          )}
        </section>
      )}
      {tab === "server" && (
        <section>
          <h2 className="font-kode text-2xl md:text-3xl mb-4">
            Déployer votre serveur
          </h2>
          <div className="gap-4 mb-8">
            C’est l’étape la plus technique du projet&nbsp;: il faudra utiliser
            un peu le terminal de commandes.
            <br />
            Mais pas d’inquiétude&nbsp;: tout est expliqué pour que ce soit
            accessible à tou·te·s, même sans expérience.
            <br />
            <b>
              NoisePort Server peut être installé sur n’importe quel système
              d’exploitation
            </b>{" "}
            (Windows, macOS, Linux) et sur la machine de votre choix.
            <br />
          </div>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>
              1. Choisir la machine pour héberger NoisePort Server
            </strong>
            <br />
            NoisePort Server peut être installé sur différents types de machines
            selon vos besoins et votre niveau technique&nbsp;:
            <ul className="list-disc pl-5 mt-2 mb-2">
              <li>
                <b>Raspberry Pi</b> : idéal pour un serveur compact, silencieux
                et peu énergivore.
              </li>
              <li>
                <b>Ordinateur personnel</b> : un vieux PC ou Mac peut très bien
                faire l’affaire pour débuter ou tester.
              </li>
              <li>
                <b>Serveur cloud</b> : pour un accès permanent et distant, mais
                nécessite un peu plus de configuration.
              </li>
            </ul>
            <b>Conseil&nbsp;:</b> Pour commencer, un Raspberry Pi ou un
            ordinateur que vous avez déjà est souvent suffisant. L’essentiel est
            que la machine reste allumée et connectée à Internet pour accéder à
            votre musique partout.
            <br />
            N'oublie pas d'y attacher un disque dur ou SSD avec suffisamment
            d'espace pour ta bibliothèque musicale.
            <br />
            <div className="bg-neutral-900 p-4 rounded-lg mt-6">
              <p className="text-sm text-neutral-300">
                💡 Vous pouvez aussi héberger NoisePort sur votre propre machine
                pour tester, mais souvenez-vous : pour que le streaming
                fonctionne, le serveur doit rester connecté en permanence.
              </p>
            </div>
          </div>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>2. Installer la dernière version de Docker</strong>
            <br />
            Docker est nécessaire pour faire tourner NoisePort Server
            facilement.
            <br />
            C’est un outil qui permet de lancer facilement des applications dans
            des “conteneurs”, sans se soucier des réglages techniques de votre
            système.
            <br />
            <br />
            <a
              href="https://docs.docker.com/get-docker/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Télécharger Docker
            </a>
            <br />
            <br />
            Sur la page officielle, choisissez votre système d’exploitation
            (Windows, macOS, Linux) et suivez les instructions.
            <br />
            <b>Astuce&nbsp;:</b> Docker Desktop est recommandé pour Windows et
            macOS, sur Linux suivez le guide pour votre distribution.
            <br />
          </div>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>3. Récupérer le code de NoisePort Server</strong>
            <br />
            Deux méthodes sont possibles&nbsp;:
            <ul className="list-disc pl-5 mt-2 mb-2">
              <li>
                <b>Via Git (recommandé)</b> :<br />
                Ouvrez le terminal et tapez&nbsp;:
                <br />
                <br />
                <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
                  git clone https://github.com/maxenceroux/noiseport-server.git
                </code>
                <br />
                <br />
                (Nécessite d’avoir{" "}
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Git
                </a>{" "}
                installé sur votre machine)
              </li>
              <li>
                <b>Via téléchargement ZIP</b> :<br />
                Rendez-vous sur la page{" "}
                <a
                  href="https://github.com/maxenceroux/noiseport-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  NoisePort Server sur GitHub
                </a>
                , cliquez sur “Code” puis “Download ZIP”.
                <br />
                Décompressez le dossier sur votre machine.
              </li>
            </ul>
            <b>Astuce&nbsp;:</b> La méthode Git permet de mettre à jour le
            serveur plus facilement par la suite.
            <br />
          </div>

          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>
              4. Installer l’outil <code>make</code> (optionnel)
            </strong>
            <br />
            <b>make</b> est nécessaire pour certains scripts d’installation ou
            de gestion du serveur.
            <br />
            <ul className="list-disc pl-5 mt-2 mb-2">
              <li>
                <b>macOS</b> : Ouvrez le terminal et tapez&nbsp;:
                <br />
                <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
                  xcode-select --install
                </code>
                <br />
                Cela installera les outils de ligne de commande Xcode, incluant{" "}
                <b>make</b>.
              </li>
              <li>
                <b>Linux</b> : Ouvrez le terminal et tapez&nbsp;:
                <br />
                <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
                  sudo apt-get install make
                </code>
                <br />
                (ou la commande adaptée à votre distribution)
              </li>
              <li>
                <b>Windows</b> : Installez <b>make</b> via{" "}
                <a
                  href="https://gnuwin32.sourceforge.net/packages/make.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  GnuWin32
                </a>{" "}
                ou via{" "}
                <a
                  href="https://community.chocolatey.org/packages/make"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Chocolatey
                </a>
                .
              </li>
            </ul>
            <b>Astuce&nbsp;:</b> Vérifiez l’installation en tapant{" "}
            <code>make --version</code> dans le terminal.
          </div>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200">
            <strong>5. Lancer l’assistant d’installation</strong>
            <br />
            Cette étape va télécharger et initialiser les conteneurs nécessaires
            à l’assistant d’installation. Cela peut prendre un certain temps
            selon votre connexion Internet et les performances de votre machine.
            <br />
            <ul className="list-disc pl-5 mt-2 mb-2">
              Ces commandes doivent être lancées depuis le dossier où se trouve
              le code de NoisePort Server (ex: le dossier{" "}
              <code>noiseport-server</code> si vous avez utilisé Git).
              <li>
                <b>Avec make</b> :
                <br />
                <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
                  make dev-compose
                </code>
              </li>
              <li>
                <b>Sans make</b> :
                <br />
                <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
                  docker compose -f docker-compose.dev.yml up --build
                </code>
              </li>
            </ul>
            Une fois lancé, l’assistant (interface web) sera accessible depuis
            votre navigateur à l’adresse&nbsp;:
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              http://&lt;adresse_ip_de_la_machine&gt;:8000/wizard
            </code>
            <br />
            Remplacez <code>&lt;adresse_ip_de_la_machine&gt;</code> par
            l’adresse IP ou le nom de votre serveur.
            <br />
            Vous pourrez alors commencer la configuration de NoisePort Server
            via l’assistant.
          </div>
          <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary">
            <h2 className="font-kode text-2xl md:text-3xl mt-6 mb-4">
              Aperçu de l’assistant d’installation
            </h2>
            <img
              src={wizardScreenshot}
              alt="Aperçu de l'assistant d'installation NoisePort Server"
              className="rounded shadow mb-4 max-w-full h-auto"
            />
            <p>
              À partir de cette étape,{" "}
              <b>
                toute la configuration sera guidée par l’assistant
                d’installation
              </b>
              . Suivez simplement les instructions affichées dans l’interface
              web pour terminer l’installation et la configuration de votre
              serveur NoisePort.
            </p>
          </div>
        </section>
      )}
      <h2 className="font-kode text-2xl md:text-3xl mt-10 mb-4">
        Besoin d’aide&nbsp;?
      </h2>
      <p>
        Le projet est encore en phase <b>bêta</b> : tout n’est pas parfait, mais
        tout est ouvert. Si vous rencontrez un problème ou souhaitez être
        accompagné·e dans l’installation, je peux vous aider personnellement à
        configurer votre instance.
        <br />
        👉 Contactez-moi via la page{" "}
        <a href="/contact" className="text-primary underline">
          Contact
        </a>
        .
      </p>
    </motion.main>
  );
}
