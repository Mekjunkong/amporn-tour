import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '66899995677';

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const t = translations[language];

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden"
      title="Chat on WhatsApp"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-pulse">
        <MessageCircle className="w-6 h-6" />
      </div>
    </a>
  );
}
