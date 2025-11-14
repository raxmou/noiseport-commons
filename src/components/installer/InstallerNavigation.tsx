interface NavigationItem {
  id: string;
  label: string;
  subsections?: { id: string; label: string }[];
}

const navigationItems: NavigationItem[] = [
  {
    id: "overview",
    label: "Vue d'ensemble",
  },
  {
    id: "download",
    label: "Télécharger l'application",
    subsections: [
      { id: "desktop", label: "Desktop" },
      { id: "mobile", label: "Mobile" },
    ],
  },
  {
    id: "join",
    label: "Rejoindre un serveur",
    subsections: [
      { id: "prerequisites", label: "Informations nécessaires" },
      { id: "tailscale-macos", label: "Installation macOS" },
      { id: "tailscale-windows", label: "Installation Windows" },
      { id: "tailscale-android", label: "Installation Android" },
      { id: "connect-noiseport", label: "Connexion à NoisePort" },
    ],
  },
  {
    id: "create",
    label: "Créer un serveur",
    subsections: [
      { id: "choose-machine", label: "Choisir la machine" },
      { id: "install-docker", label: "Installer Docker" },
      { id: "get-code", label: "Récupérer le code" },
      { id: "install-make", label: "Installer make" },
      { id: "run-wizard", label: "Lancer l'assistant" },
    ],
  },
];

interface InstallerNavigationProps {
  activeTab: "download" | "join" | "create";
  onTabChange: (tab: "download" | "join" | "create") => void;
}

export default function InstallerNavigation({
  activeTab,
  onTabChange,
}: InstallerNavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubsectionClick = (parentId: string, subsectionId: string) => {
    // Determine which tab this subsection belongs to
    let targetTab: "download" | "join" | "create" = "download";
    if (parentId === "download") {
      targetTab = "download";
    } else if (parentId === "join") {
      targetTab = "join";
    } else if (parentId === "create") {
      targetTab = "create";
    }

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
    <nav className="bg-black border-r border-neutral-800 p-4 md:p-6 overflow-y-auto h-full">
      <h2 className="font-kode text-lg mb-4 text-neutral-100">Navigation</h2>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                if (item.id === "download") {
                  onTabChange("download");
                } else if (item.id === "join") {
                  onTabChange("join");
                } else if (item.id === "create") {
                  onTabChange("create");
                } else {
                  scrollToSection(item.id);
                }
              }}
              className={`w-full text-left px-3 py-2 rounded transition-colors duration-200 font-syne ${
                (item.id === "download" && activeTab === "download") ||
                (item.id === "join" && activeTab === "join") ||
                (item.id === "create" && activeTab === "create")
                  ? "bg-primary text-neutral-950 font-bold"
                  : "text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100"
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
