import DesktopSection from "./DesktopSection";
import MobileSection from "./MobileSection";

interface DownloadSectionProps {
  onGoToJoinServer?: () => void;
}

export default function DownloadSection({
  onGoToJoinServer,
}: DownloadSectionProps) {
  return (
    <section>
      <h2 className="font-kode text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-neutral-100">
        Télécharger l'application NoisePort
      </h2>
      <div className="mb-6 md:mb-8">
        <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
          NoisePort vous permet d'accéder à votre musique partout, depuis votre
          ordinateur ou votre téléphone.
          <br />
          <br />
          Une fois l'application installée, vous devrez{" "}
          <strong>rejoindre un serveur existant</strong> ou{" "}
          <strong>créer votre propre serveur</strong> pour commencer à écouter
          votre musique.
        </p>
      </div>
      <div className="bg-blue-900/40 border-l-4 border-blue-400 rounded p-3 md:p-4 my-4 md:my-6 text-sm md:text-base text-neutral-200">
        <strong>Important&nbsp;:</strong> Une fois l'application téléchargée,
        vous devez vous connecter au réseau du serveur pour pouvoir l'utiliser.
        <br />
        Merci de suivre la section&nbsp;
        {onGoToJoinServer ? (
          <button
            type="button"
            className="text-primary underline hover:text-primary/80 focus:outline-none bg-transparent p-0 m-0 border-0 inline underline cursor-pointer"
            style={{ textDecoration: "underline" }}
            onClick={onGoToJoinServer}
          >
            Rejoindre un serveur
          </button>
        ) : (
          <a href="#join-server" className="text-primary underline">
            Rejoindre un serveur
          </a>
        )}
        &nbsp;pour configurer votre accès.
      </div>

      <DesktopSection />
      <MobileSection />
    </section>
  );
}
