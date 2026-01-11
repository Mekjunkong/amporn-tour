import { MapPin, FileText, Phone } from 'lucide-react';
import LazyImage from './LazyImage';

export default function OfficeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            Our Offices
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit us at one of our convenient locations in Chiang Mai
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Office 1 */}
          <div className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Amporn Tour Chiang Mai
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">License Number</p>
                    <p className="font-semibold text-slate-900">22/00688</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">Address</p>
                    <p className="font-semibold text-slate-900">
                      146/5 Ratchiangsaen Road<br />
                      Haiya, Muang Chiang Mai<br />
                      50100
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="font-semibold text-slate-900">
                      T2B Hostel
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=146/5+Ratchiangsaen+Road+Chiang+Mai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Office 2 */}
          <div className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Leisure Hub Travel
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">License Number</p>
                    <p className="font-semibold text-slate-900">22/00648</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">Address</p>
                    <p className="font-semibold text-slate-900">
                      71/6 Sridonchai Road<br />
                      Changklan, Muang Chiang Mai<br />
                      50100
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-600">Contact</p>
                    <p className="font-semibold text-slate-900">
                      +66 89 999 5677
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=71/6+Sridonchai+Road+Chiang+Mai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 md:p-8 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-xl font-bold font-display text-slate-900 mb-4">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Licensed and registered tour operators in Chiang Mai</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Professional guides with years of experience</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Customizable private and group tours</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Competitive pricing and transparent booking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>24/7 customer support via WhatsApp and phone</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
