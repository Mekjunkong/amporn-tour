import { useParams } from 'wouter';
import { getTourById } from '@/lib/tours-data';
import { Clock, MapPin, Users, Zap, CheckCircle2, Package, X } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

/**
 * Tour Detail Page
 * Displays comprehensive information about a specific tour package
 */
export default function TourDetail() {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tourId ? getTourById(tourId) : null;

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Tour Not Found</h1>
          <p className="text-slate-600 mb-8">The tour you're looking for doesn't exist.</p>
          <a href="/tours" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90">
            Back to Tours
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-slate-200">
        {tour.heroImage && (
          <LazyImage
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container pb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">
              {tour.title}
            </h1>
            <p className="text-lg text-white/90">{tour.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="md:col-span-2">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-600">Duration</span>
                </div>
                <p className="font-semibold text-slate-900">{tour.duration}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-600">Group Size</span>
                </div>
                <p className="font-semibold text-slate-900">{tour.groupSize}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-600">Difficulty</span>
                </div>
                <p className="font-semibold text-slate-900">{tour.difficulty}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-600">Pickup</span>
                </div>
                <p className="font-semibold text-slate-900 text-sm">{tour.pickupTime}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Highlights</h2>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Activities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tour.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-slate-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Itinerary</h2>
              <p className="text-slate-700 leading-relaxed">{tour.itinerary}</p>
            </div>

            {/* Gallery */}
            {tour.images.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Tour Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <LazyImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white border border-border rounded-lg shadow-lg p-6">
              {/* Price */}
              <div className="mb-6">
                <p className="text-slate-600 text-sm mb-2">Price Per Person</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {tour.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-slate-600 font-semibold">{tour.currency}</span>
                </div>
              </div>

              {/* Group Discounts */}
              {tour.groupDiscounts && tour.groupDiscounts.length > 0 && (
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="font-semibold text-slate-900 mb-4">Group Discounts</h3>
                  <div className="space-y-2">
                    {tour.groupDiscounts.map((discount, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded">
                        <span className="text-slate-700 text-sm">{discount.minPeople}+ people</span>
                        <span className="font-semibold text-green-600">{discount.discount}% off</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Package Includes */}
              <div className="mb-8 pb-8 border-b border-border">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Package Includes
                </h3>
                <ul className="space-y-2">
                  {tour.packageIncludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package Excludes */}
              {tour.packageExcludes && tour.packageExcludes.length > 0 && (
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-slate-400" />
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.packageExcludes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Payment Terms */}
              {tour.paymentTerms && (
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">Payment Terms</h3>
                  <p className="text-slate-600 text-xs">{tour.paymentTerms}</p>
                </div>
              )}

              {/* Cancellation Policy */}
              {tour.cancellationPolicy && (
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">Cancellation Policy</h3>
                  <p className="text-slate-600 text-xs">{tour.cancellationPolicy}</p>
                </div>
              )}

              {/* Seasonal Note */}
              {tour.seasonalNote && (
                <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>Note:</strong> {tour.seasonalNote}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/66899995677?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title)}%20tour.%20Can%20you%20provide%20more%20details%20and%20availability?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors text-center"
                >
                  💬 Book on WhatsApp
                </a>
                <a
                  href="tel:+66899995677"
                  className="block w-full px-4 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-colors text-center"
                >
                  📞 Call Us
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-slate-600 mb-2">Questions?</p>
                <p className="text-xs text-slate-500">
                  Contact us for custom itineraries and group discounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
