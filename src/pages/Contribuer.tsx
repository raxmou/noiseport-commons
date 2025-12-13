import { motion } from "framer-motion";

export default function Contribuer() {
  return (
    <main className="w-full pb-16">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <motion.h1
          className="font-kode text-4xl md:text-6xl mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contribuer à Noiseport
        </motion.h1>
        <motion.p
          className="font-syne text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Noiseport est un projet collectif et ouvert. Il y a plein de façons d'y contribuer,
          que tu sois dev, designer, rédacteur·ice, ou simplement utilisateur·ice motivé·e.
        </motion.p>
      </section>

      <div className="border-t border-neutral-800"></div>

      {/* Contribuer non-techniquement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-kode text-3xl md:text-5xl mb-8">Contribuer sans coder</h2>
          <p className="font-syne text-lg text-neutral-300 mb-12">
            Pas besoin d'être développeur·se pour aider le projet. Voici comment tu peux participer :
          </p>

          <div className="space-y-8">
            {/* Tester */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">🧪</span>
                Tester et remonter des bugs
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Utilise Noiseport, casse des trucs, et dis-nous ce qui ne marche pas.
                Les retours d'usage sont essentiels pour améliorer le projet.
              </p>
              <a
                href="https://github.com/raxmou/noiseport-commons/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Signaler un bug sur GitHub →
              </a>
            </div>

            {/* Proposer des idées */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Proposer des idées et des améliorations
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Tu as une idée de fonctionnalité ? Un cas d'usage qu'on n'a pas pensé ?
                Partage-la sur GitHub ou par mail.
              </p>
              <a
                href="https://github.com/raxmou/noiseport-commons/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Ouvrir une discussion →
              </a>
            </div>

            {/* Documentation */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Améliorer la documentation
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Écrire des guides, corriger des fautes, traduire des pages...
                La doc est aussi importante que le code.
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>Rédiger des tutoriels d'installation pour différents systèmes</li>
                <li>Créer des FAQ basées sur des questions fréquentes</li>
                <li>Traduire l'interface ou la documentation</li>
              </ul>
            </div>

            {/* Design */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Contribuer au design et à l'UX
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Tu es designer ? On a besoin de toi pour :
              </p>
              <ul className="font-syne text-neutral-300 space-y-2 ml-6 list-disc">
                <li>Améliorer l'interface utilisateur·rice</li>
                <li>Créer des visuels, icônes, illustrations</li>
                <li>Penser l'expérience utilisateur·rice (wireframes, maquettes)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-800"></div>

      {/* Contribuer techniquement */}
      <section className="py-16 px-4 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-kode text-3xl md:text-5xl mb-8">Contribuer au code</h2>
          <p className="font-syne text-lg text-neutral-300 mb-12">
            Tu es développeur·se ? Voici comment mettre les mains dans le code.
          </p>

          <div className="space-y-8">
            {/* Stack technique */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
              <h3 className="font-kode text-2xl mb-4">Stack technique</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-syne text-neutral-300">
                <div>
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li>React + TypeScript</li>
                    <li>Vite</li>
                    <li>TailwindCSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Backend (à venir)</h4>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li>Node.js / Express</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Installation locale */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
              <h3 className="font-kode text-2xl mb-4">Lancer le projet en local</h3>
              <div className="bg-neutral-950 p-4 rounded overflow-x-auto mb-4">
                <pre className="text-sm">
                  <code>{`# Clone le dépôt
git clone https://github.com/raxmou/noiseport-commons.git
cd noiseport-commons

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev`}</code>
                </pre>
              </div>
              <p className="font-syne text-sm text-neutral-400">
                Le site sera accessible sur <code className="bg-neutral-900 px-2 py-1 rounded">http://localhost:5173</code>
              </p>
            </div>

            {/* Workflow de contribution */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
              <h3 className="font-kode text-2xl mb-4">Workflow de contribution</h3>
              <ol className="font-syne text-neutral-300 space-y-3 ml-6 list-decimal">
                <li>Fork le dépôt GitHub</li>
                <li>Crée une branche pour ta feature : <code className="bg-neutral-900 px-2 py-1 rounded text-sm">git checkout -b feature/ma-feature</code></li>
                <li>Fais tes modifications et commits</li>
                <li>Push ta branche : <code className="bg-neutral-900 px-2 py-1 rounded text-sm">git push origin feature/ma-feature</code></li>
                <li>Ouvre une Pull Request sur GitHub</li>
              </ol>
            </div>

            {/* Good first issues */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
              <h3 className="font-kode text-2xl mb-4">Par où commencer ?</h3>
              <p className="font-syne text-neutral-300 mb-4">
                Regarde les issues marquées <code className="bg-neutral-900 px-2 py-1 rounded text-sm">good first issue</code> sur GitHub.
                Ce sont des tâches accessibles pour démarrer en douceur.
              </p>
              <a
                href="https://github.com/raxmou/noiseport-commons/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Voir les good first issues →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-800"></div>

      {/* Contribuer politiquement / symboliquement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-kode text-3xl md:text-5xl mb-8">Soutenir le projet autrement</h2>
          <p className="font-syne text-lg text-neutral-300 mb-12">
            Au-delà du code et de la doc, tu peux aussi contribuer en faisant connaître Noiseport.
          </p>

          <div className="space-y-8">
            {/* Parler du projet */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">📣</span>
                Parler du projet autour de toi
              </h3>
              <p className="font-syne text-neutral-300">
                Présente Noiseport à ton crew, ta coloc, ton collectif.
                Plus on est nombreux·ses à l'utiliser, plus le projet prend du sens.
              </p>
            </div>

            {/* Organiser une écoute */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">🎧</span>
                Organiser une écoute commune
              </h3>
              <p className="font-syne text-neutral-300">
                Monte un serveur avec tes potes et organisez une session d'écoute collective.
                C'est exactement pour ça que Noiseport existe.
              </p>
            </div>

            {/* Écrire */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">✍️</span>
                Écrire un article, une newsletter, un post
              </h3>
              <p className="font-syne text-neutral-300">
                Tu tiens un blog, une newsletter, un compte quelque part ? Parle de Noiseport,
                partage ton expérience, explique pourquoi ça compte pour toi.
              </p>
            </div>

            {/* Financement */}
            <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/30">
              <h3 className="font-kode text-2xl mb-3 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Soutenir financièrement
              </h3>
              <p className="font-syne text-neutral-300 mb-4">
                Pour l'instant, Noiseport est un projet bénévole sans structure de financement.
              </p>
              <p className="font-syne text-sm text-neutral-400">
                Si le projet grandit, on envisagera peut-être un financement participatif ou une association.
                Mais pour le moment, ton temps et ton énergie sont les meilleurs soutiens possibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-neutral-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-kode text-3xl md:text-4xl mb-6">Envie de contribuer ?</h2>
          <p className="font-syne text-lg text-neutral-300 mb-8">
            Que ce soit pour une petite correction ou un gros chantier, toutes les contributions sont bienvenu·e·s.
            N'hésite pas à nous contacter si tu as des questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/raxmou/noiseport-commons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-primary text-neutral-950 font-kode shadow hover:bg-primary/80 transition-colors"
            >
              Voir le code sur GitHub
            </a>
            <a
              href="mailto:contact@noiseport.org"
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-neutral-600 text-neutral-100 hover:border-primary hover:text-primary transition-colors"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
