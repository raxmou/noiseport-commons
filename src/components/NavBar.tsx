import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/manifeste", label: "Manifeste" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const commencerItems = [
  {
    to: "/rejoindre",
    label: "Rejoindre un serveur",
    description: "Connectez-vous à un serveur existant·e",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    to: "/creer",
    label: "Créer un serveur",
    description: "Hébergez votre propre serveur",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isCommencerActive = pathname === "/rejoindre" || pathname === "/creer";

  return (
    <nav className="w-full border-b border-neutral-800 bg-black fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Noiseport Logo"
            className="h-12 w-12 object-contain"
          />
          <Link to="/" className="font-kode text-2xl tracking-tight">
            NoisePort
          </Link>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-syne text-base items-center">
            {/* Accueil */}
            <li key="/">
              <Link
                to="/"
                className={`hover:text-primary transition-colors duration-200 ${
                  pathname === "/" ? "text-primary font-bold underline" : ""
                }`}
              >
                Accueil
              </Link>
            </li>

            {/* Commencer dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isCommencerActive
                    ? "bg-primary text-neutral-950 font-bold"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Commencer
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {commencerItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-5 py-4 hover:bg-neutral-800 transition-colors duration-200 border-b border-neutral-800 last:border-b-0 ${
                        pathname === item.to ? "bg-neutral-800" : ""
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-0.5">{item.icon}</div>
                        <div className="flex-1">
                          <div
                            className={`font-kode text-base mb-1 ${
                              pathname === item.to
                                ? "text-primary"
                                : "text-neutral-100"
                            }`}
                          >
                            {item.label}
                          </div>
                          <div className="text-xs text-neutral-400 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Other nav items */}
            {navItems.slice(1).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`hover:text-primary transition-colors duration-200 ${
                    pathname === item.to
                      ? "text-primary font-bold underline"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Burger menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-neutral-100 focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 font-syne text-base bg-black">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`block py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-primary transition-colors duration-200 ${
                  pathname === item.to
                    ? "text-primary font-bold bg-neutral-900"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Commencer section in mobile */}
          <li className="mt-2 pt-2 border-t border-neutral-800">
            <div className="text-neutral-400 text-xs font-bold mb-2 px-3 uppercase tracking-wide">
              Commencer
            </div>
            <div className="space-y-1">
              {commencerItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block py-3 px-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200 ${
                    pathname === item.to
                      ? "bg-primary/10 border-l-2 border-primary"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary">{item.icon}</div>
                    <div className="flex-1">
                      <div
                        className={`font-kode text-sm mb-0.5 ${
                          pathname === item.to
                            ? "text-primary font-bold"
                            : "text-neutral-100"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </li>

          {/* Theme toggle in mobile menu */}
          <li className="mt-2 pt-2 border-t border-neutral-800">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <>
                  <svg
                    className="w-5 h-5 text-neutral-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Mode clair</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 text-neutral-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <span>Mode sombre</span>
                </>
              )}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
