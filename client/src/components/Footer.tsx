import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '66899995677';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-2">Amporn Tour</h3>
            <p className="text-slate-300 text-sm">
              Professional private tours in Northern Thailand
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {t.footer.phone}
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t.footer.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.footer.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  {t.nav.tours}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
