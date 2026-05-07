import { ExternalLink, MessageCircle, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '66899995677';
const reviewLinks = [
  {
    title: 'Google Maps office profile',
    text: 'Check the live business profile, directions, and public guest feedback before you book.',
    href: 'https://maps.app.goo.gl/2wbPCLXRqcieFkeFA',
  },
  {
    title: 'Leisure Hub Travel location',
    text: 'Second licensed office location in Chiang Mai with phone contact and map directions.',
    href: 'https://maps.google.com/?q=71/6+Sridonchai+Road+Chiang+Mai',
  },
];

const proofPoints = [
  'Licensed office details are shown openly on this site.',
  'WhatsApp quote confirms price, inclusions, pickup, and payment terms before booking.',
  'Real guest reviews should be checked from public platforms instead of anonymous website quotes.',
];

export default function TestimonialsSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Amporn Tour, I checked your website and would like to ask for recent reviews and availability for a tour.'
  )}`;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Verified review path</p>
          <h2 id="reviews-heading" className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl font-display">
            Check public reviews before you book.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Instead of anonymous website testimonials, use the public map profiles and ask the team for recent guest feedback on WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400" aria-label="Five star review platform">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{link.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{link.text}</p>
              </a>
            ))}
          </div>

          <aside className="rounded-2xl bg-slate-900 p-6 text-white md:p-8">
            <h3 className="mb-5 text-2xl font-bold font-display">What to verify before confirming</h3>
            <ul className="mb-8 space-y-4">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-green-600 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Ask for recent reviews
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
