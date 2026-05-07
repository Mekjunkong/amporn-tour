import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Sticky header with logo, navigation, and Ask availability button
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
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <img
            src="/images/amporn-logo-new.jpg"
            alt="Amporn Tour Logo"
            className="w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-800" style={{fontFamily: '"Georgia", serif', fontWeight: '700', letterSpacing: '-0.5px'}}>
              Amporn Tour
            </div>
            <div className="hidden sm:block text-xs text-slate-600 font-medium tracking-wide">Northern Thailand Adventures</div>
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

        {/* Right - Ask availability Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/66899995677?text=Hello%20Amporn%20Tour%2C%20I%20would%20like%20to%20check%20availability%20and%20price%20for%20a%20Chiang%20Mai%20private%20tour.%20My%20travel%20date%20is%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            <span>💬</span>
            <span>Ask availability</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav id="mobile-navigation" className="container py-4 flex flex-col gap-4">
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
              href="https://wa.me/66899995677?text=Hello%20Amporn%20Tour%2C%20I%20would%20like%20to%20check%20availability%20and%20price%20for%20a%20Chiang%20Mai%20private%20tour.%20My%20travel%20date%20is%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>💬</span>
              <span>Ask availability on WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
