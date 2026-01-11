import { tours } from '@/lib/tours-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, Leaf, Building2, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tourCategories = [
  {
    icon: Building2,
    title: 'Temple Tours',
    description: 'Visit sacred temples and spiritual landmarks',
  },
  {
    icon: Mountain,
    title: 'Mountain Treks',
    description: 'Explore lush forests and mountain peaks',
  },
  {
    icon: Leaf,
    title: 'Nature Adventures',
    description: 'Experience wildlife and natural wonders',
  },
  {
    icon: MapPin,
    title: 'Day Trips',
    description: 'Full-day excursions from Chiang Mai',
  },
  {
    icon: Users,
    title: 'Private Tours',
    description: 'Customized experiences for your group',
  },
  {
    icon: Heart,
    title: 'Ethical Experiences',
    description: 'Responsible tourism and local communities',
  },
];

export default function ToursSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      id="tours"
      className={`py-16 md:py-24 bg-slate-50 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Featured Tours
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our carefully curated tour packages designed for unforgettable experiences in Northern Thailand
          </p>
        </div>

        {/* Featured Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.slice(0, 6).map((tour, index) => (
            <Link key={tour.id} href={`/tour/${tour.id}`}>
              <a className="block h-full">
                <Card
                  className={`hover:shadow-lg transition-all duration-300 border-slate-200 h-full hover:border-primary cursor-pointer ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: sectionVisible ? `${index * 80}ms` : '0ms',
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{tour.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600 mb-4">
                      {tour.shortDescription}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-semibold">
                        {tour.pricePerPerson.toLocaleString()} {tour.currency}
                      </span>
                      <span className="text-slate-500">{tour.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>

        {/* Tour Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-8 text-center">
            Tour Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={`p-6 bg-white rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-300 ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: sectionVisible ? `${(index + 6) * 80}ms` : '0ms',
                  }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {category.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Tours CTA */}
        <div className="text-center">
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
