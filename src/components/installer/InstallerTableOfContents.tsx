import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface InstallerTableOfContentsProps {
  activeTab: 'apps' | 'server';
}

export default function InstallerTableOfContents({ activeTab }: InstallerTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  const appsTocItems: TocItem[] = [
    { id: 'desktop', label: 'Application Desktop' },
    { id: 'desktop-install', label: 'Installation Desktop' },
    { id: 'desktop-screenshots', label: 'Aperçu Desktop' },
    { id: 'mobile', label: 'Application Mobile' },
    { id: 'mobile-install', label: 'Installation Mobile' },
    { id: 'mobile-screenshots', label: 'Aperçu Mobile' },
  ];

  const serverTocItems: TocItem[] = [
    { id: 'choose-machine', label: '1. Choisir la machine' },
    { id: 'install-docker', label: '2. Installer Docker' },
    { id: 'get-code', label: '3. Récupérer le code' },
    { id: 'install-make', label: '4. Installer make' },
    { id: 'run-wizard', label: '5. Lancer l\'assistant' },
    { id: 'wizard-preview', label: 'Aperçu de l\'assistant' },
  ];

  const tocItems = activeTab === 'apps' ? appsTocItems : serverTocItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab, tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="bg-black border-l border-neutral-800 p-4 md:p-6 overflow-y-auto h-full sticky top-[73px]">
      <h2 className="font-kode text-lg mb-4 text-neutral-100">Sur cette page</h2>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors duration-200 font-syne border-l-2 ${
                activeSection === item.id
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
