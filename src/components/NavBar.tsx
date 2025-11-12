
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/manifeste', label: 'Manifeste' },
  { to: '/installer', label: 'Installer' },
  { to: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-neutral-800 bg-black fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Noiseport Logo" className="h-12 w-12 object-contain" />
          <Link to="/" className="font-kode text-2xl tracking-tight">NoisePort</Link>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-syne text-base">
            {navItems.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`hover:text-primary transition-colors duration-200 ${pathname === item.to ? 'text-primary font-bold underline' : ''}`}
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
            {theme === 'dark' ? (
              <svg 
                className="w-6 h-6 text-neutral-100" 
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
                className="w-6 h-6 text-neutral-800" 
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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 font-syne text-base bg-black">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`block py-2 px-2 rounded hover:bg-neutral-900 hover:text-primary transition-colors duration-200 ${pathname === item.to ? 'text-primary font-bold underline' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Theme toggle in mobile menu */}
          <li>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-2 py-2 px-2 rounded hover:bg-neutral-900 transition-colors duration-200"
            >
              {theme === 'dark' ? (
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
