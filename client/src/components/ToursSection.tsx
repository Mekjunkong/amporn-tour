import { tours } from '@/lib/tours-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tourFitLabels: Record<string, string> = {
  'chiang-rai-one-day-golden-triangle': 'Best for border history and classic Chiang Rai sights',
  'chiang-rai-lalita-cafe': 'Best for temple photos and cafe gardens',
  'chiang-rai-one-day': 'Best for first-time Chiang Rai visitors',
  'doi-inthanon-national-park': 'Best for mountain views and waterfalls',
  'doi-inthanon-trek-pha-dok-siew': 'Best for waterfall trekking',
  'doi-inthanon-trek-kew-mae-pan': 'Best for scenic nature trail views',
};

export default function ToursSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      id="tours"
      className={`bg-slate-50 py-16 transition-all duration-1000 md:py-24 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="featured-tours-heading"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Popular private tours</p>
          <h2 id="featured-tours-heading" className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl font-display">
            Featured Tours
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Compare the most requested routes by style, duration, and starting price. Message on WhatsApp for the final private quote by group size.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 6).map((tour, index) => (
            <Link
              key={tour.id}
              href={`/tour/${tour.id}`}
              className={`group block h-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: sectionVisible ? `${index * 80}ms` : '0ms' }}
            >
              <Card className="h-full cursor-pointer overflow-hidden border-slate-200 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <div className="h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={tour.heroImage}
                    alt={tour.images[0]?.alt || tour.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <p className="mb-2 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {tourFitLabels[tour.id] || 'Customizable private tour'}
                  </p>
                  <CardTitle className="text-xl text-slate-900">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base leading-relaxed text-slate-600">
                    {tour.shortDescription}
                  </CardDescription>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-primary">
                        From {tour.pricePerPerson.toLocaleString()} {tour.currency} / person
                      </span>
                      <span className="text-slate-500">{tour.duration}</span>
                    </div>
                    <p className="flex gap-2 text-xs leading-relaxed text-slate-500">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                      Final private price, pickup, tickets, lunch, and exclusions are confirmed before booking.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>View All Tours & Details</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
