import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import LazyImage from '@/components/LazyImage';

const galleryImages = [
  '/images/Screenshot_2026-01-11-07-43-36-073_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-43-53-500_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-44-11-686_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-44-25-184_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-44-43-818_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-44-56-315_com.whatsapp-edit.jpg',
  '/images/Screenshot_2026-01-11-07-45-07-968_com.whatsapp-edit.jpg',
];

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
            Moments from our tours and adventures
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            >
              <LazyImage
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
