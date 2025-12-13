import tailscaleConnected from "../assets/tailscale-connected.png";
import tailscaleConnectedWindows from "../assets/tailscale-connected-win.png";
import customServerAndroid from "../assets/custom-server-android.jpg";
import registrationCommandAndroid from "../assets/registration-command.jpg";
export default function JoinServerSection() {
  return (
    <section id="join-server">
      <div className="mb-6 p-5 bg-primary/10 border-l-4 border-primary rounded-lg">
        <h2 className="font-kode text-xl md:text-2xl lg:text-3xl mb-3 text-primary">
          🎧 Rejoindre un serveur NoisePort
        </h2>
        <p className="text-sm md:text-base text-neutral-200">
          Vous avez été invité à rejoindre un serveur NoisePort existant ?
          Suivez ces étapes pour vous connecter et commencer à écouter de la
          musique.
        </p>
      </div>
      <div className="gap-4 mb-6 md:mb-8">
        <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
          Pour rejoindre un serveur NoisePort existant, vous devez vous
          connecter au réseau privé sécurisé qui héberge le serveur.
          <br />
          <br />
          NoisePort utilise <strong>Tailscale</strong> pour créer un réseau
          privé virtuel (VPN) sécurisé, géré par <strong>Headscale</strong>.
          Cela permet d'accéder à votre serveur NoisePort de manière sécurisée,
          où que vous soyez.
        </p>
      </div>

      <div
        id="prerequisites"
        className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>Informations nécessaires</strong>
        <br />
        Avant de commencer, vous devez demander à l'administrateur du serveur
        NoisePort les informations suivantes&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            <b>L'URL du serveur Headscale</b> pour l'inscription (ex&nbsp;:{" "}
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              https://hs.rax.zone
            </code>
            )
          </li>

          <li>
            <b>Une clé d'authentification</b> pour votre utilisateur (ex&nbsp;:{" "}
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              7d45c4e02459599bcc26f153cdf0f3767d3e59e5a89dcfgh
            </code>
            )
          </li>

          <li>
            <b>L'adresse IP du serveur NoisePort</b> dans le réseau
            Headscale/Tailscale
          </li>
        </ul>
      </div>

      <div
        id="tailscale-macos"
        className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>Installation sur macOS</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis le site officiel&nbsp;:
        <br />
        <a
          href="https://tailscale.com/download/mac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale pour macOS
        </a>
        <br />
        <br />
        <b>2. Se connecter au serveur Headscale</b>
        <br />
        Ouvrez le terminal et tapez la commande suivante en remplaçant l'URL et
        la clé d'authentification par celles fournies par votre
        administrateur&nbsp;:
        <br />
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          tailscale up --login-server &lt;url_du_serveur&gt; --authkey
          &lt;clé_d'authentification&gt;
        </code>
        <br />
        <br />
        <div className="bg-blue-900/40 border-l-4 border-blue-400 rounded p-4 mb-4 text-neutral-200">
          <strong>Astuce&nbsp;: ouvrir le terminal sur macOS</strong>
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>
              Ouvrez le Finder et accédez à <strong>Applications</strong> &gt;{" "}
              <strong>Utilitaires</strong>, puis double-cliquez sur{" "}
              <strong>Terminal</strong>.
            </li>
            <li>
              Ou utilisez Spotlight en appuyant sur <kbd>Cmd</kbd> +{" "}
              <kbd>Espace</kbd>, tapez "Terminal" et appuyez sur{" "}
              <kbd>Entrée</kbd>.
            </li>
          </ul>
          <span className="text-neutral-300">
            Une fois le terminal ouvert, copiez et collez la commande ci-dessus
            pour continuer.
          </span>
        </div>
        <b>3. Vérifier la connexion</b>
        <br />
        Pour vérifier que la connexion à Tailscale est bien active&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            Regardez l'icône Tailscale dans la barre des menus en haut à droite
            de votre écran&nbsp;:
            <br />
            <img
              src={tailscaleConnected}
              alt="Tailscale connecté sur macOS"
              className="my-2 rounded border border-neutral-700 max-w-xs"
            />
            <br />
            Si l'icône est colorée et indique "Connected", votre connexion est
            active.
          </li>
        </ul>
      </div>

      <div
        id="tailscale-windows"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>Installation sur Windows</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis le site officiel&nbsp;:
        <br />
        <a
          href="https://tailscale.com/download/windows"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale pour Windows
        </a>
        <br />
        <br />
        <b>2. Se connecter au serveur Headscale</b>
        <br />
        Ouvrez l'invite de commandes et tapez la commande suivante en remplaçant
        l'URL et la clé d'authentification par celles fournies par votre
        administrateur&nbsp;:
        <br />
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          tailscale up --login-server &lt;url_du_serveur&gt; --authkey
          &lt;clé_d'authentification&gt;
        </code>
        <br />
        <br />
        <div className="bg-blue-900/40 border-l-4 border-blue-400 rounded p-4 mb-4 text-neutral-200">
          <strong>
            Astuce&nbsp;: ouvrir l'invite de commandes sur Windows
          </strong>
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>
              Appuyez sur <kbd>Win</kbd> + <kbd>R</kbd>, tapez{" "}
              <strong>cmd</strong> puis appuyez sur <kbd>Entrée</kbd>.
            </li>
            <li>
              Ou cliquez sur le menu Démarrer, tapez{" "}
              <strong>Invite de commandes</strong> ou <strong>cmd</strong>, puis
              cliquez sur l'application correspondante.
            </li>
          </ul>
          <span className="text-neutral-300">
            Une fois l'invite de commandes ouverte, copiez et collez la commande
            ci-dessus pour continuer.
          </span>
        </div>
        <b>3. Vérifier la connexion</b>
        <br />
        Pour vérifier que la connexion à Tailscale est bien active&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            Regardez l'icône Tailscale dans la barre des tâches en bas à droite
            de votre écran (près de l'horloge)&nbsp;:
            <br />
            <img
              src={tailscaleConnectedWindows}
              alt="Tailscale connecté sur Windows"
              className="my-2 rounded border border-neutral-700 max-w-xs"
            />
            <br />
            Si l'icône est colorée et indique "Connected", votre connexion est
            active.
          </li>
        </ul>
      </div>

      <div
        id="tailscale-android"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>Installation sur Android</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis Google Play&nbsp;:
        <br />
        <a
          href="https://play.google.com/store/apps/details?id=com.tailscale.ipn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale sur Google Play
        </a>
        <br />
        <br />
        <b>2. Se connecter au serveur Headscale</b>
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>Ouvrez l'application Tailscale</li>
          <li>
            Il est probable qu'on vous redirigera vers une page de connexion,
            vous pouvez la fermer avec un retour en arrière
          </li>
          <li>Appuyez sur les trois points (menu) en haut à droite</li>
          <li>
            Sur l'écran principal (une fois que vous voyez{" "}
            <i>Welcome to Tailscale</i>), cliquez sur la roue crantée en haut à
            droite.
          </li>
          <li>Cliquez ensuite sur Accounts</li>
          <li>
            Cliquez ensuite sur les trois points (menu) en haut à droite, puis
            sélectionnez "Use an alternate server"
          </li>
          <li>
            Indiquez l'URL du serveur Headscale fournie par votre
            administrateur, puis validez.
          </li>

          <img
            src={customServerAndroid}
            alt="Configuration serveur personnalisé sur Android"
            className="my-2 rounded border border-neutral-700 max-w-xs"
          />

          <li>
            L'application va vous rediriger vers une page web avec une commande
            que vous devez copier et envoyer à l'administrateur pour qu'il vous
            autorise.
          </li>
          <img
            src={registrationCommandAndroid}
            alt="Commande d'enregistrement à envoyer à l'administrateur"
            className="my-2 rounded border border-neutral-700 max-w-xs"
          />

          <li>
            Une fois autorisé, revenez dans l'application Tailscale et vous
            serez connecté•e.
          </li>
        </ul>
        <br />
      </div>

      <div
        id="connect-noiseport"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary scroll-mt-24"
      >
        <strong>Connexion à NoisePort</strong>
        <br />
        <br />
        Une fois Tailscale configuré et connecté, vous pouvez accéder à votre
        serveur NoisePort&nbsp;:
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            Ouvrez l'application NoisePort (Desktop ou Mobile) que vous avez
            téléchargée
          </li>
          <li>
            Dans les paramètres de connexion, entrez l'adresse IP du serveur
            NoisePort fournie par votre administrateur
          </li>
          <li>
            <b>Si vous utilisez l'application Desktop</b>, le format de
            l'adresse sera généralement&nbsp;:
            <code className="bg-neutral-800 px-1 rounded text-primary font-mono text-xs ml-2">
              http://&lt;adresse_ip&gt;:4533
            </code>
          </li>
          <li>
            <b>Si vous utilisez l'application Mobile</b>, le format de l'adresse
            sera généralement&nbsp;:
            <code className="bg-neutral-800 px-1 rounded text-primary font-mono text-xs ml-2">
              http://&lt;adresse_ip&gt;:8096
            </code>
          </li>
          <li>
            Entrez vos identifiants utilisateur (nom d'utilisateur et mot de
            passe fournis par l'administrateur)
          </li>
          <li>Connectez-vous et ouvrez les portes du bruit&nbsp;!</li>
        </ul>
        <br />
        <b>Astuce&nbsp;:</b> Gardez Tailscale activé en arrière-plan pour rester
        connecté•e à votre serveur NoisePort où que vous soyez.
      </div>
    </section>
  );
}
