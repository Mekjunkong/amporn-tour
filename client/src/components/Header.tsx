import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '66899995677';

export default function Header() {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = translations[language];

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'th', flag: '🇹🇭', label: 'ไทย' },
    { code: 'he', flag: '🇮🇱', label: 'עברית' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary font-display">
            Amporn Tour
          </div>
        </div>

        {/* Center - Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.home}
          </a>
          <a href="#tours" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.tours}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.gallery}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Right - Language Toggle & WhatsApp */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded text-sm font-medium transition-all ${
                  language === lang.code
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white gap-2 hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </Button>
          </a>

          {/* Mobile WhatsApp Icon */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sm:hidden">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
