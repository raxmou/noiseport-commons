import ApkDownloadButton from "./ApkDownloadButton";
import ScreenshotCarousel from "../pages/ScreenshotCarousel";
import mobile1 from "../assets/1.jpg";
import mobile2 from "../assets/2.png";
import mobile3 from "../assets/3.png";
import mobile4 from "../assets/4.png";
import mobile5 from "../assets/5.jpg";
import mobile6 from "../assets/6.png";
import mobile7 from "../assets/7.png";
import mobile8 from "../assets/8.png";
import mobile9 from "../assets/9.png";

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

export default function MobileSection() {
  return (
    <>
      <section id="mobile" className="scroll-mt-24">
        <h2 className="font-kode text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 mt-6 md:mt-10 text-neutral-100">
          Application Mobile
        </h2>
      </section>
      <section id="mobile-install">
        <p>
          Vous pouvez télécharger la version <strong>Android</strong> directement
          ici&nbsp;:
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
          <li>Téléchargez l'APK sur votre téléphone Android.</li>
          <li>Ouvrez le fichier téléchargé et suivez les instructions.</li>
          <li>
            Si besoin, autorisez l'installation d'applications de sources
            inconnues dans les paramètres Android.
          </li>
        </ul>
        <b>Note sécurité&nbsp;:</b> L'APK est signé et mis à jour régulièrement.
        Installez uniquement depuis des sources fiables.
        <br />
        <br />
        Désolé pour les possesseur·euses d'iPhone, mais il faut payer 100€ par
        an pour publier une application sur l'App Store, ce qui n'est pas viable
        pour un projet open-source et gratuit.
      </p>
      <br />
      <div className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 border border-primary">
        <strong>À propos de l'application Mobile</strong>
        <br />
        L'application mobile NoisePort est un <b>fork</b> du projet open-source{" "}
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
        l'application desktop, et j'utilise principalement la version desktop au
        quotidien. J'ai donc consacré moins d'efforts de développement à
        l'application mobile.
        <br />
        <b>Fonctionnalités&nbsp;:</b> Malgré tout, l'application mobile propose
        les mêmes fonctionnalités principales que la version desktop pour
        écouter et gérer votre bibliothèque musicale.
        <br />
        <b>Remerciements&nbsp;:</b> Un grand merci aux développeurs actifs de
        Finamp pour leur travail et leur engagement open-source.
      </div>
      </section>
      <section id="mobile-screenshots" className="scroll-mt-24">
        <h2 className="font-kode text-xl md:text-2xl lg:text-3xl mt-6 md:mt-10 mb-3 md:mb-4">
          Aperçu de l'application Mobile
        </h2>
        <ScreenshotCarousel images={mobileScreenshots} />
      </section>
    </>
  );
}
