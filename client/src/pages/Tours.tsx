import { Link } from 'wouter';
import { getAllTours } from '@/lib/tours-data';
import { Clock, Users, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

/**
 * Tours Listing Page
 * Displays all available tour packages
 */
export default function Tours() {
  const tours = getAllTours();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our Tours & Experiences
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Explore Northern Thailand with our carefully curated tour packages. Each tour is designed to provide authentic experiences and unforgettable memories.
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <OptimizedImage
                  src={tour.heroImage.replace(/\.(jpg|jpeg|png|webp)$/i, '')}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2 line-clamp-2">
                  {tour.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {tour.shortDescription}
                </p>

                {/* Quick Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.difficulty}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-slate-600 text-xs mb-1">Price Per Person</p>
                  <p className="text-2xl font-bold text-primary">
                    {tour.pricePerPerson.toLocaleString()} {tour.currency}
                  </p>
                </div>

                {/* Seasonal Note */}
                {tour.seasonalNote && (
                  <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded mb-4">
                    {tour.seasonalNote}
                  </p>
                )}

                {/* CTA */}
                <Link href={`/tour/${tour.id}`}>
                  <a className="flex items-center justify-between w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">
            Can't Find Your Perfect Tour?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We offer custom tour packages tailored to your interests, schedule, and preferences. Contact us to create your ideal Northern Thailand experience.
          </p>
          <a
            href="https://wa.me/66899995677?text=Hello%2C%20I%20would%20like%20to%20create%20a%20custom%20tour%20package.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            <span>💬</span>
            <span>Custom Tour Inquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
