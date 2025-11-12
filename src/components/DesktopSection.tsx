import ScreenshotCarousel from "../pages/ScreenshotCarousel";
import screenshot1 from "../assets/app-screenshot-1.png";
import screenshot2 from "../assets/app-screenshot-2.png";
import screenshot3 from "../assets/app-screenshot-3.png";
import screenshot4 from "../assets/app-screenshot-4.png";
import screenshot5 from "../assets/app-screenshot-5.png";
import screenshot6 from "../assets/app-screenshot-6.png";
import screenshot7 from "../assets/app-screenshot-7.png";

const desktopScreenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
];

export default function DesktopSection() {
  return (
    <>
      <section id="desktop" className="scroll-mt-24">
        <h2 className="font-kode text-2xl md:text-3xl mb-4 text-neutral-100">
          Application Desktop
        </h2>
      </section>
      <section id="desktop-install">
        <p>
          Vous pouvez télécharger les versions <strong>macOS</strong>,{" "}
          <strong>Windows</strong>,<strong> Linux</strong> directement depuis
          notre{" "}
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
            <code>NoisePort-x.x.x.dmg</code>). Double-cliquez pour installer
            comme une application classique.
          </li>
          <li>
            <b>Windows</b> : Téléchargez le fichier <code>.exe</code> (ex:{" "}
            <code>NoisePort-x.x.x.exe</code>). Double-cliquez pour lancer
            l'installation.
          </li>
          <li>
            <b>Linux</b> : Choisissez le fichier <code>.AppImage</code>{" "}
            (universel), ou <code>.deb</code> si vous êtes sur Ubuntu/Debian.
            Pour <code>.AppImage</code>, rendez-le exécutable puis
            double-cliquez.
          </li>
        </ul>
        <b>Astuce&nbsp;:</b> La dernière version est toujours en haut de la
        liste sur la page GitHub.
        <br />
        <b>Besoin d'aide&nbsp;?</b> Contactez-moi via la page{" "}
        <a href="/contact" className="text-primary underline">
          Contact
        </a>{" "}
        si vous avez un doute ou une question.
      </div>
      <div className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary">
        <strong>À propos de l'application Desktop</strong>
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
        <b>Qu'est-ce qu'un fork&nbsp;?</b> C'est une copie d'un projet existant,
        permettant d'ajouter des fonctionnalités ou d'adapter le logiciel à
        d'autres besoins, tout en gardant l'évolution du projet d'origine.
        <br />
        NoisePort Desktop inclut <b>toutes les fonctionnalités de Feishin</b>.
        <br />
        J'ai ajouté la <b>connexion à Soulseek</b>, les pages <b>Discover</b>,
        le <b>suivi des recherches</b> et le <b>téléchargement Soulseek</b>{" "}
        directement dans l'application.
        <br />
        Je tiens à <b>remercier énormément</b> tous les contributeurs de Feishin
        pour leur travail exceptionnel.
        <br />
        NoisePort suit de près les mises à jour de Feishin pour rester à jour.
        <br />
        <b>Envie d'aider&nbsp;?</b> Vous pouvez contribuer à{" "}
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
      </section>
      <section id="desktop-screenshots" className="scroll-mt-24">
        <h2 className="font-kode text-2xl md:text-3xl mt-10 mb-4">
          Aperçu de l'application Desktop
        </h2>
        <ScreenshotCarousel images={desktopScreenshots} />
      </section>
    </>
  );
}
