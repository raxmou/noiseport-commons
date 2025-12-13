import { motion } from "framer-motion";

export default function Contact() {
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
        Contact
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base md:text-lg text-neutral-300 mb-8 leading-relaxed">
          Pour toute question, collaboration, ou simplement échanger sur
          NoisePort, rejoignez la communauté Discord. C'est l'endroit idéal pour
          partager vos idées, obtenir de l'aide, et contribuer au projet.
        </p>

        <motion.div
          className="my-8 p-6 sm:p-8 rounded-lg border-2 border-neutral-800 hover:border-primary/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 hover:from-neutral-900/80 hover:to-neutral-950/80 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-12 h-12 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.447.864-.614 1.249a18.214 18.214 0 0 0-5.487 0 12.522 12.522 0 0 0-.625-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.683 4.369a.064.064 0 0 0-.028.027C.533 8.159-.32 11.87.099 15.539a.08.08 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.992 3.029a.07.07 0 0 0 .076-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.273-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.372-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .075.009c.12.099.246.197.372.291a.07.07 0 0 1-.006.117 11.578 11.578 0 0 1-1.873.892.07.07 0 0 0-.038.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .076.027c1.96-.607 3.95-1.522 5.992-3.029a.08.08 0 0 0 .031-.056c.5-4.088-.838-7.763-3.287-11.143a.061.061 0 0 0-.028-.027ZM8.02 15.331c-.789 0-1.438-.724-1.438-1.615 0-.892.637-1.616 1.438-1.616.807 0 1.45.732 1.438 1.616 0 .891-.637 1.615-1.438 1.615Zm7.974 0c-.788 0-1.438-.724-1.438-1.615 0-.892.637-1.616 1.438-1.616.807 0 1.45.732 1.438 1.616 0 .891-.631 1.615-1.438 1.615Z" />
            </svg>
            <h2 className="font-kode text-2xl text-neutral-100 m-0">Discord</h2>
          </div>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Rejoignez notre serveur Discord pour discuter avec la communauté,
            poser vos questions, partager vos configurations, et participer au
            développement de NoisePort.
          </p>

          <a
            href="https://discord.gg/TejsH5wa8X"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 text-neutral-950 font-kode text-lg transition-all duration-300 no-underline hover:gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.447.864-.614 1.249a18.214 18.214 0 0 0-5.487 0 12.522 12.522 0 0 0-.625-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.683 4.369a.064.064 0 0 0-.028.027C.533 8.159-.32 11.87.099 15.539a.08.08 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.992 3.029a.07.07 0 0 0 .076-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.273-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.372-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .075.009c.12.099.246.197.372.291a.07.07 0 0 1-.006.117 11.578 11.578 0 0 1-1.873.892.07.07 0 0 0-.038.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .076.027c1.96-.607 3.95-1.522 5.992-3.029a.08.08 0 0 0 .031-.056c.5-4.088-.838-7.763-3.287-11.143a.061.061 0 0 0-.028-.027ZM8.02 15.331c-.789 0-1.438-.724-1.438-1.615 0-.892.637-1.616 1.438-1.616.807 0 1.45.732 1.438 1.616 0 .891-.637 1.615-1.438 1.615Zm7.974 0c-.788 0-1.438-.724-1.438-1.615 0-.892.637-1.616 1.438-1.616.807 0 1.45.732 1.438 1.616 0 .891-.631 1.615-1.438 1.615Z" />
            </svg>
            Rejoindre le Discord
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="mt-8 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-kode text-xl text-primary mb-3">
            Autres moyens de contact
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>
                <strong>GitHub :</strong> Pour signaler des bugs, proposer des
                fonctionnalités, ou contribuer au code
              </span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>
                <strong>Email :</strong> Pour les demandes privées ou
                partenariats
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
