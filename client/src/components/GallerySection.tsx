import LazyImage from '@/components/LazyImage';

const galleryImages = [
  {
    src: '/images/real-doi-inthanon-1.jpg',
    alt: 'Guests at the highest point in Thailand on Doi Inthanon',
    label: 'Doi Inthanon',
  },
  {
    src: '/images/real-chiang-rai-blue-temple-exterior.jpg',
    alt: 'Guest visiting the Blue Temple in Chiang Rai',
    label: 'Chiang Rai temples',
  },
  {
    src: '/images/real-pha-dok-siew-waterfall-2.jpg',
    alt: 'Tour guests viewing a waterfall on the Pha Dok Siew trail',
    label: 'Waterfall trek',
  },
  {
    src: '/images/real-elephant-group.jpg',
    alt: 'Small group elephant experience near Chiang Mai',
    label: 'Elephant care',
  },
  {
    src: '/images/real-kew-mae-pan-1.webp',
    alt: 'Guests at Kew Mae Pan nature trail entrance',
    label: 'Kew Mae Pan',
  },
  {
    src: '/images/IMG-20260111-WA0006.webp',
    alt: 'Amporn Tour vehicle and guest travel moment in Northern Thailand',
    label: 'Private travel day',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 md:py-24" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Real trip photos</p>
          <h2 id="gallery-heading" className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl font-display">
            See the places, people, and travel days before you message.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            A quick look at the most requested Chiang Mai and Northern Thailand routes. Open each tour page for the full itinerary and more photos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={index === 0 ? 'h-80 md:h-full' : 'h-56'}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
