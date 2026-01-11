import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const WHATSAPP_NUMBER = '66899995677';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <section id="home" className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/images/doi-inthanon-hero.jpg"
          alt="Doi Inthanon Mountain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display drop-shadow-lg">
          {t.hero.headline}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-slate-100">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.whatsapp}
            </Button>
          </a>
          <a href={`tel:+${WHATSAPP_NUMBER}`}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white border-white gap-2 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              {t.footer.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
