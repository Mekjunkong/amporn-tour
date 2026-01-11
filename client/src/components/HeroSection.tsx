import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '66899995677';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <section id="home" className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="w-full h-full"
        >
          <LazyImage
            src="/images/doi-inthanon-hero.jpg"
            alt="Doi Inthanon Mountain"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl" style={{fontFamily: '\"Playfair Display\", serif', letterSpacing: '-1px', textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
          {t.hero.headline}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg text-slate-50 font-light" style={{fontFamily: '\"Poppins\", sans-serif', letterSpacing: '0.5px'}}>
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
