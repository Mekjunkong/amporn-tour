import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Sticky header with logo, navigation, and WhatsApp button
 * English-only version for European market
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tours', href: '#tours' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/images/amporn-logo.png"
            alt="Amporn Tour Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <div className="hidden sm:block">
            <div className="text-lg md:text-xl font-bold text-slate-900 font-display">
              Amporn Tour
            </div>
            <div className="text-xs text-slate-600">Northern Thailand</div>
          </div>
        </a>

        {/* Center - Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right - WhatsApp Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/66899995677?text=Hello%2C%20I%20found%20Amporn%20Tour%20through%20your%20website%20and%20would%20like%20to%20ask%20about%20tours%20in%20Chiang%20Mai."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/66899995677?text=Hello%2C%20I%20found%20Amporn%20Tour%20through%20your%20website%20and%20would%20like%20to%20ask%20about%20tours%20in%20Chiang%20Mai."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>💬</span>
              <span>Message on WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
