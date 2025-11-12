interface NavigationItem {
  id: string;
  label: string;
  subsections?: { id: string; label: string }[];
}

const navigationItems: NavigationItem[] = [
  { 
    id: 'overview', 
    label: 'Vue d\'ensemble',
  },
  {
    id: 'apps',
    label: 'Applications',
    subsections: [
      { id: 'desktop', label: 'Desktop' },
      { id: 'mobile', label: 'Mobile' },
    ],
  },
  {
    id: 'server',
    label: 'Serveur',
    subsections: [
      { id: 'choose-machine', label: 'Choisir la machine' },
      { id: 'install-docker', label: 'Installer Docker' },
      { id: 'get-code', label: 'Récupérer le code' },
      { id: 'install-make', label: 'Installer make' },
      { id: 'run-wizard', label: 'Lancer l\'assistant' },
    ],
  },
];

interface InstallerNavigationProps {
  activeTab: 'apps' | 'server';
  onTabChange: (tab: 'apps' | 'server') => void;
}

export default function InstallerNavigation({ activeTab, onTabChange }: InstallerNavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubsectionClick = (parentId: string, subsectionId: string) => {
    // Determine which tab this subsection belongs to
    const targetTab = parentId === 'apps' ? 'apps' : 'server';
    
    // If we're not on the right tab, switch first
    if (activeTab !== targetTab) {
      onTabChange(targetTab);
      // Wait for the tab content to render before scrolling
      setTimeout(() => {
        scrollToSection(subsectionId);
      }, 100);
    } else {
      // Already on the right tab, just scroll
      scrollToSection(subsectionId);
    }
  };

  return (
    <nav className="bg-black border-r border-neutral-800 p-4 md:p-6 overflow-y-auto h-full sticky top-[73px]">
      <h2 className="font-kode text-lg mb-4 text-neutral-100">Navigation</h2>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                if (item.id === 'apps') {
                  onTabChange('apps');
                } else if (item.id === 'server') {
                  onTabChange('server');
                } else {
                  scrollToSection(item.id);
                }
              }}
              className={`w-full text-left px-3 py-2 rounded transition-colors duration-200 font-syne ${
                (item.id === 'apps' && activeTab === 'apps') || 
                (item.id === 'server' && activeTab === 'server')
                  ? 'bg-primary text-neutral-950 font-bold'
                  : 'text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100'
              }`}
            >
              {item.label}
            </button>
            {item.subsections && (
              <ul className="ml-4 mt-2 space-y-1">
                {item.subsections.map((sub) => (
                  <li key={sub.id}>
                    <button
                      onClick={() => handleSubsectionClick(item.id, sub.id)}
                      className="w-full text-left px-3 py-1.5 rounded text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200 transition-colors duration-200 font-syne"
                    >
                      {sub.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
