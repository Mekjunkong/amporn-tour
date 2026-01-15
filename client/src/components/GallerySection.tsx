import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function GallerySection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            {t.nav.gallery}
          </h2>
          <p className="text-lg text-slate-600">
            Explore our tour packages to see more photos and details
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/tours" 
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
}
