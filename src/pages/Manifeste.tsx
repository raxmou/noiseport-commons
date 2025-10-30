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
      <p className="mb-8 text-base text-neutral-50">
        Comme bon nombre d'entre vous, il me taraude depuis bien longtemps
        l'envie de quitter Spotify.
        <br />
        <span className="font-bold text-primary">
          La coupe était trop pleine.
        </span>
        <br />
        Entre les prises de position plus que discutables de son
        président-directeur Daniel (b)E(r)k, un système de rémunération qui ne
        sert l'intérêt (financier) que des majors, et une logique algorithmique
        dont le seul objectif est de t'entraîner vers une écoute passive, il
        fallait en finir et trouver une autre manière d’écouter de la musique.
      </p>

      <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
        Spotify régit aujourd’hui l’industrie musicale.
        <br />
        Spotify décide ce que tu écoutes, quand tu l’écoutes, dans quel contexte
        – et malheureusement, les artistes s’adaptent.
        <br />
        Une plateforme qui a réduit la musique – cet art du lien, de la mémoire
        et du risque – à un simple fond sonore pour open space.
        <br />
      </blockquote>

      <p className="mb-8 text-base text-neutral-50">
        Pendant ce temps, les artistes crèvent.
        <br />
        Les indépendant·es touchent des miettes pendant que les majors
        engrangent des millions sur des écoutes qu’ils n’ont même pas produites.
        <br />
        Et Daniel Ek investit les profits dans des startups de défense et
        d’intelligence artificielle.
        <br />
        <br />
        <span className="font-bold text-primary">
          Non, ce n’est pas anecdotique : c’est la preuve d’un système qui ne
          croit plus en la musique comme culture, mais comme donnée exploitable.
        </span>
      </p>

      <p className="mb-8 text-base text-neutral-50">
        Les plateformes concurrentes, elles, ne font que perfectionner ce
        modèle.
        <br />
        Elles promettent un “meilleur Spotify”, mais ne proposent qu’un “Spotify
        bis”.
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Rompre avec la logique des plateformes
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Je voulais rompre avec cette logique.
        <br />
        Retrouver une écoute libre et consciente.
        <br />
        Réapprendre à choisir, à chercher, à partager – sans qu’un algorithme
        décide à ma place ce qui “mérite” d’être entendu.
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Le pair-à-pair, l’âge d’or du partage
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Et quel meilleur système que le pair-à-pair pour redonner sens au
        partage ?<br />
        Je me souviens de l’âge d’or de Soulseek — ce logiciel né au début des
        années 2000, avant l’ère du streaming, où des milliers de passionné·es
        mettaient en commun leurs bibliothèques musicales.
        <br />
        Pas de pubs, pas d’algorithmes, pas de recommandations : juste des
        personnes qui partageaient ce qu’elles aimaient.
        <br />
        Tu pouvais explorer la collection d’un·e inconnu·e à l’autre bout du
        monde, découvrir un album rare, et entamer une conversation juste parce
        que vous aimiez tou·tes les deux le même morceau.
        <br />
        Chacun·e y prenait soin de sa musique, comme on transmet un héritage, de
        main à main.
        <br />
        On y partageait la musique, non pas pour la monétiser, mais pour la
        faire vivre.
        <br />
        C’était une économie morale, artisanale, fragile – mais profondément
        humaine.
        <br />
        Une époque où la curiosité valait plus que le profit, et où la musique
        circulait comme un langage commun.
      </p>

      <p className="mb-8 text-base text-neutral-50">
        Et puis j’ai découvert que Soulseek n’était pas mort.
        <br />
        Qu’il existait encore, habité par des seeders éternel·les, ces
        pseudonymes qui continuent, vingt ans plus tard, à faire vivre l’idée
        d’une culture partagée, sans centralisation, sans autorité, sans
        algorithme.
        <br />
        Alors m’est venue l’envie – ou la lubie un peu geek, disons-le – de lui
        redonner ses lettres de noblesse.
        <br />
        Mais soyons honnêtes : son interface appartient à un autre temps, et
        passer d’une appli à l’autre pour écouter ou partager n’a rien d’idéal.
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Réconcilier confort et liberté
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Alors j’ai voulu réconcilier le confort du streaming et la liberté du
        pair-à-pair.
        <br />
        J’ai monté mes propres serveurs sur un Raspberry Pi, ouvert les ports au
        bruit, et rendu ma bibliothèque accessible où que je sois.
        <br />
        J’ai développé une application mobile et une version bureau, toutes deux
        connectées à mon serveur : je peux y naviguer dans ma bibliothèque
        d’albums, explorer des discographies, télécharger un album en un clic,
        et le voir s’organiser aussitôt, proprement, dans ma collection.
        <br />
        Désormais, ma musique vit chez moi – pas dans les serveurs d’un
        fasciste.
        <br />
      </p>

      <p className="mb-8 text-base text-neutral-50">
        Ça fait maintenant un mois.
        <br />
        <span className="font-bold text-primary">Et je suis convaincu.</span>
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Redonner la main aux auditeur·ices et aux artistes
      </h2>
      <p className="mb-8 text-base text-neutral-50">
        Mais donner la main aux auditeur·ices ne suffit pas : il faut aussi la
        tendre aux artistes.
        <br />
        Reprendre le contrôle sur nos écoutes, c’est aussi reprendre la
        responsabilité de ce que l’on soutient.
        <br />
        Héberger sa musique, c’est une chose ; reconnaître la valeur de celles
        et ceux qui la créent, c’en est une autre.
        <br />
        C’est à nous, auditeur·ices, de choisir consciemment où va notre argent
        : acheter un album, faire un don, soutenir un label, aller à des
        concerts, repartir avec un vinyle ou un t-shirt.
        <br />
        L’économie de la musique ne doit plus être une mécanique de rente, mais
        un écosystème de gestes.
      </p>

      <p className="mb-8 text-base text-neutral-50">
        Car la vraie révolution n’est pas technologique, elle est culturelle.
        <br />
        Elle repose sur une écoute responsable, où chaque action – télécharger,
        partager, recommander – devient un acte de soutien.
        <br />
        Un modèle où la circulation libre des œuvres n’efface pas la valeur,
        mais la redéfinit : non plus comme un prix fixé par les plateformes,
        mais comme un lien, un choix, un engagement.
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Repenser la valeur et la responsabilité
      </h2>
      <p className="mb-8">
        Je suis convaincu que la solution ne réside pas dans un nouveau modèle
        de rente, mais dans un changement de rapport à la valeur.
        <br />
        Redonner la responsabilité financière à celles et ceux qui en ont les
        moyens – à celles et ceux qui choisissent consciemment de soutenir les
        artistes qu’ils aiment – aura plus d’impact sur l’écosystème indépendant
        que de diluer la valeur dans un pool algorithmique et opaque.
      </p>

      <p className="mb-8">
        C’est une tentative de replacer la musique dans le champ du vivant, du
        lien, du choix – pas dans celui du rendement.
        <br />
        Une tentative de reprendre la musique à Spotify, et de la rendre à
        celles et ceux qui l’écoutent, la partagent et la font exister.
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
        <br />
      </p>

      <h2 className="font-kode text-2xl text-primary mt-12 mb-4">
        Pour aller plus loin
      </h2>
      <p className="mb-8">
        Ce site existe pour vous montrer que vous pouvez le faire aussi - et
        pour vous y aider concrètement.
        <br />
        Et pour celles et ceux qui veulent faire ce pas de côté, j’ai tout rendu
        disponible.
        <br />
        Le code, les applications, les guides d’installation.
        <br />
        Tout est encore en phase bêta – tout n’est pas parfait, mais tout est
        ouvert.
        <br />
        Je peux vous aider personnellement à installer, configurer et déployer
        vos propres serveurs :<br />
        que ce soit sur un Raspberry Pi, un vieux ordinateur oublié, ou même un
        serveur cloud.
        <br />
        Et si vous voulez simplement tester le concept, vous pouvez le faire
        directement sur votre machine – en gardant à l’esprit qu’un serveur doit
        rester allumé en continu pour permettre le streaming.
        <br />
      </p>

      <p className="mb-8 font-bold text-primary">
        Le serveur s’appelle Noiseport Server, et l’application, simplement
        Noiseport.
      </p>

      <p className="mb-8 italic text-sm text-neutral-400">
        Je ne tire aucun profit de Noiseport.
        <br />
        Le code, les applis et les guides sont en accès libre.
        <br />
        Si un jour un modèle économique devait exister, il serait coopératif,
        transparent, et pensé pour redistribuer la valeur d’abord aux artistes.
      </p>
    </motion.main>
  );
}
