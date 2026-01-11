import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, Leaf, Building2, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const tours = [
  {
    icon: Building2,
    key: 'chiangmai',
  },
  {
    icon: Mountain,
    key: 'nature',
  },
  {
    icon: Leaf,
    key: 'cultural',
  },
  {
    icon: MapPin,
    key: 'daytrip',
  },
  {
    icon: Users,
    key: 'private',
  },
  {
    icon: Heart,
    key: 'family',
  },
];

export default function ToursSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="tours" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            {t.tours.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.tours.subtitle}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => {
            const Icon = tour.icon;
            const tourData = (t.tours as any)[tour.key];

            return (
              <Card
                key={tour.key}
                className="hover:shadow-lg transition-shadow duration-300 border-slate-200"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tourData.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {tourData.description}
                  </CardDescription>
                  <p className="text-sm text-primary font-medium mt-4">
                    {t.tours.detailsAvailable}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Tours CTA */}
        <div className="text-center mt-12">
          <Link href="/tours">
            <a className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors">
              <span>View All Tours & Details</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
