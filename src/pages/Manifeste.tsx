import { motion } from "framer-motion";

export default function Manifeste() {
  return (
    <motion.main
      className="prose prose-invert mx-auto px-4 py-12 font-syne max-w-3xl pt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="font-kode text-primary text-4xl md:text-6xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Le Manifeste Noiseport
      </motion.h1>
      <motion.p
        className="mb-8 text-base text-neutral-50 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <span className="font-bold text-primary">Noiseport</span>, c’est votre
        discothèque partagée : un serveur et une application pour héberger votre
        musique, la streamer ensemble et découvrir par les personnes — pas par
        l’algorithme. Créez votre propre serveur (chez vous ou sur un cloud ),
        invitez votre cercle, et faites vivre une bibliothèque commune.
      </motion.p>
      <br />

      <p className="mb-8 text-base text-neutral-50">
        Comme bon nombre d’entre vous, il me taraude depuis longtemps l’envie de
        quitter Spotify. La coupe était trop pleine. Entre les prises de
        position plus que discutables de son président-directeur Daniel (b)E(r)k
        <sup>[1]</sup>, un système de rémunération qui ne sert l’intérêt
        (financier) que des majors<sup>[2][3]</sup>, et une logique
        algorithmique dont le seul objectif est de t’entraîner vers une écoute
        passive<sup>[4][5][6][7]</sup>, il fallait en finir et trouver une autre
        manière d’écouter la musique.
      </p>
      <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
        Spotify régit aujourd’hui l’industrie musicale.
        <br />
        Spotify décide ce que tu écoutes, quand tu l’écoutes, dans quel contexte
        – et malheureusement, les artistes s’adaptent.
        <br />
        Une plateforme qui a réduit la musique – cet art du lien, de la mémoire
        et du risque – à un simple fond sonore pour open space.
      </blockquote>
      <p className="mb-8 text-base text-neutral-50">
        Pendant ce temps, les projets artistiques crèvent. Les indépendant·es
        touchent des miettes pendant que les majors engrangent des millions sur
        des écoutes qu’ils n’ont même pas produites<sup>[8][9][10]</sup>. Et
        Daniel Ek investit les profits dans des startups de défense et
        d’intelligence artificielle.
      </p>
      <p className="mb-8 text-base text-primary font-bold">
        Non, ce n’est pas anecdotique : c’est la preuve d’un système qui ne
        croit plus en la musique comme culture, mais comme donnée exploitable.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Les plateformes concurrentes, elles, ne font que perfectionner ce
        modèle. Elles promettent un “meilleur Spotify”, mais ne proposent qu’un
        “Spotify bis”.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Rompre avec la logique des plateformes
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Je voulais rompre avec cette logique. Retrouver une écoute libre et
        consciente. Réapprendre à choisir, à chercher, à partager – sans qu’un
        algorithme décide à ma place ce qui “mérite” d’être entendu.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Le pair-à-pair, l’âge d’or du partage
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Et quel meilleur système que le pair-à-pair pour redonner sens au
        partage ? Je me souviens de l’âge d’or de Soulseek — ce logiciel né au
        début des années 2000, avant l’ère du streaming, où des milliers de
        passionné·es mettaient en commun leurs bibliothèques musicales.
        <br />
        Pas de pubs, pas d’algorithmes, pas de recommandations : juste des
        personnes qui partageaient ce qu’elles aimaient. On explorait la
        collection d’un·e inconnu·e à l’autre bout du monde, on découvrait un
        album rare, on entamait une conversation parce qu’on aimait tou·tes les
        deux le même morceau.
        <br />
        On y partageait la musique, non pas pour la monétiser, mais pour la
        faire vivre. C’était une économie morale, artisanale, fragile – mais
        profondément humaine.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Soulseek n’est pas mort : des seeders éternel·les font encore vivre
        l’idée d’une culture partagée, sans centralisation, sans autorité, sans
        algorithme. Alors m’est venue l’envie — oui, un peu geek — de redonner
        ses lettres de noblesse à cette idée. Mais soyons honnêtes : son
        interface appartient à un autre temps, et passer d’une appli à l’autre
        pour écouter ou partager n’a rien d’idéal.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Réconcilier confort et liberté — et vous donner les moyens d’être une
        communauté
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Noiseport naît de là : un outil qui vous aide à instancier un serveur
        pour créer votre propre communauté, ou à rejoindre facilement un serveur
        existant.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Créer votre lieu commun : Noiseport vous accompagne pour déployer un
        serveur (sur un Raspberry Pi, une machine oubliée ou un cloud éthique).
        En quelques étapes guidées, vous installez, effectuez la configuration
        réseau (oui, ouvrir les ports au bruit), et vous invitez jusqu’à 20
        personnes : ami·es, collectif, label.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Rejoindre un cercle déjà formé : si un serveur existe déjà, l’app —
        mobile et bureau — vous guide pas à pas pour le rejoindre en toute
        simplicité.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Et surtout : Noiseport est aussi une application complète. Dans une même
        interface, vous pouvez naviguer dans votre bibliothèque, explorer les
        discographies, écouter en streaming et télécharger des albums pour
        compléter proprement votre collection. Pas d’allers-retours techniques :
        tout se fait au même endroit, simplement.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Dans les deux cas, le résultat est le même : une discothèque commune,
        vivante, organisée, qui reste chez vous. Chacun·e ajoute sa collection
        et tout le monde peut écouter en streaming les albums des autres.
        Désormais, notre musique vit chez nous — pas dans les serveurs d’un
        fasciste.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        Mais surtout, la communauté devient l’algorithme. Ici, pas de score
        opaque ni de playlists à la chaîne : il y a des gestes, des attentions,
        des personnes. On prend soin de la discothèque : on ajoute des sorties,
        on réédite des pépites, on annote les albums, on laisse des contextes,
        des portes d’entrée. On se passe un disque “pour toi”, on réactive un
        catalogue oublié, on fait vivre des esthétiques minorées.
        <br />
        Les collections fusionnent sans se dissoudre : chacun·e garde sa patte,
        le groupe compose une mémoire. La découverte redevient une conversation
        — pas une métrique.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Redonner la main aux auditeur·ices et aux artistes
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Donner la main aux auditeur·ices ne suffit pas : il faut aussi la tendre
        aux artistes. Reprendre le contrôle sur nos écoutes, c’est aussi
        reprendre la responsabilité de ce que l’on soutient.
        <br />
        Héberger sa musique, c’est une chose ; reconnaître la valeur de celles
        et ceux qui la créent, c’en est une autre. C’est à nous, auditeur·ices,
        de choisir consciemment où va notre argent : acheter un album, faire un
        don, soutenir un label, aller à des concerts, repartir avec un vinyle ou
        un t-shirt.
        <br />
        L’économie de la musique ne doit plus être une mécanique de rente, mais
        un écosystème de gestes.
      </p>
      <p className="mb-8 text-base text-neutral-50">
        La vraie révolution n’est pas technologique, elle est culturelle. Elle
        repose sur une écoute responsable, où chaque action — importer,
        partager, recommander — devient un acte de soutien. Un modèle où la
        circulation libre des œuvres n’efface pas la valeur, mais la requalifie
        : non plus comme un prix fixé par les plateformes, mais comme un lien,
        un choix, un engagement.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Repenser la valeur et la responsabilité
      </h2>
      <p className="mb-8">
        Je suis convaincu que la solution ne réside pas dans un nouveau modèle
        de rente, mais dans un changement de rapport à la valeur.
        <br />
        Redonner la responsabilité financière à celles et ceux qui en ont les
        moyens — celles et ceux qui choisissent consciemment de soutenir les
        artistes qu’ils aiment — aura plus d’impact sur l’écosystème indépendant
        que de diluer la valeur dans un pool algorithmique et opaque.
      </p>
      <p className="mb-8">
        C’est une tentative de replacer la musique dans le champ du vivant, du
        lien, du choix — pas dans celui du rendement. Une tentative de reprendre
        la musique aux plateformes et de la rendre à celles et ceux qui
        l’écoutent, la partagent et la font exister.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Un mot sur la légalité
      </h2>
      <p className="mb-8">
        Noiseport n’a pas vocation à promouvoir le piratage, mais à repenser la
        circulation de la musique.
        <br />
        La mise à disposition non autorisée d’œuvres protégées est illégale, et
        je ne veux pas que quelqu’un·e se mette en danger en cherchant
        simplement à écouter autrement.
        <br />
        Noiseport encourage les usages responsables : héberger sa propre
        bibliothèque (copies privées), valoriser les œuvres sous licences libres
        (Creative Commons), et soutenir les artistes via les liens de dons,
        d’achats ou de concerts.
      </p>
      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Pour aller plus loin
      </h2>
      <p className="mb-8">
        Ce site existe pour vous montrer que vous pouvez le faire — et pour vous
        y aider concrètement. Tout est en accès libre : le code, les
        applications, les guides d’installation.
        <br />
        Tout est encore en phase bêta — tout n’est pas parfait, mais tout est
        ouvert.
      </p>
      <p className="mb-8">Vous pouvez :</p>
      <ul className="mb-8 list-disc pl-6">
        <li>
          Instancier votre serveur et créer votre communauté (guide étape par
          étape).
        </li>
        <li>Rejoindre un serveur existant (mode d’emploi simple).</li>
        <li>Contribuer au code, aux traductions, aux guides.</li>
      </ul>
      <p className="mb-8">
        Je peux vous aider personnellement à installer, configurer et déployer
        vos propres serveurs : sur un Raspberry Pi, un vieux ordinateur oublié,
        ou un serveur cloud. Et si vous voulez simplement tester le concept,
        vous pouvez le faire directement sur votre machine — en gardant à
        l’esprit qu’un serveur doit rester allumé en continu pour permettre le
        streaming.
      </p>
      <p className="mb-8 font-bold text-primary">
        Le serveur s’appelle Noiseport Server, et l’application, simplement
        Noiseport.
      </p>
      <div className="mt-8 text-sm text-neutral-400">
        <b>Références</b>
        <br />
        [1]{" "}
        <a
          href="https://www.cs.toronto.edu/~ashton/pubs/alg-effects-spotify-www2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Algorithmic Effects on Spotify – University of Toronto, 2020
        </a>
        <br />
        [2]{" "}
        <a
          href="https://www.lesinrocks.com/musique/investiture-de-donald-trump-spotify-a-fait-don-de-150-000-dollars-pour-la-ceremonie-649529-23-01-2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Spotify a fait don de 150 000 dollars pour l’investiture de Donald
          Trump – Les Inrockuptibles, 23 janvier 2025
        </a>
        <br />
        [3]{" "}
        <a
          href="https://cnm.fr/wp-content/uploads/2021/01/CNM_UCPS_SyntheseFinale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Synthèse sur la rémunération des artistes – CNM, janvier 2021
        </a>
        <br />
        [4]{" "}
        <a
          href="https://www.lemonde.fr/les-decodeurs/article/2024/12/08/comment-les-plateformes-de-streaming-remunerent-elles-les-artistes_6436303_4355770.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Comment les plateformes de streaming rémunèrent-elles les artistes ? –
          Le Monde, 8 décembre 2024
        </a>
        <br />
        [5]{" "}
        <a
          href="https://twostorymedia.com/mood-machine-review/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Mood Machine Review – Two Story Media
        </a>
        <br />
        [6]{" "}
        <a
          href="https://www.theguardian.com/books/2025/mar/05/mood-machine-by-liz-pelly-review-a-savage-indictment-of-spotify"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Mood Machine by Liz Pelly review – The Guardian, 5 mars 2025
        </a>
        <br />
        [7]{" "}
        <a
          href="https://support.spotify.com/us/artists/article/track-monetization-eligibility/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Track Monetization Eligibility – Spotify Support
        </a>
        <br />
        [8]{" "}
        <a
          href="https://www.reuters.com/business/media-telecom/music-revenues-rise-again-2024-boosted-by-streaming-subscriptions-report-shows-2025-03-19/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Music revenues rise again in 2024, boosted by streaming subscriptions
          – Reuters, 19 mars 2025
        </a>
        <br />
        [9]{" "}
        <a
          href="https://www.midiaresearch.com/blog/music-subscriber-market-shares-2024-slowdown-what-slowdown"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Music subscriber market shares 2024 – MIDiA Research
        </a>
        <br />
        [10]{" "}
        <a
          href="https://www.ft.com/content/cdc02d96-13b5-4ca2-aa0b-1fc7568e9fa0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Music streaming: industry analysis – Financial Times
        </a>
      </div>
    </motion.main>
  );
}
