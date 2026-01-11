import { Heart, Shield, Map, TrendingUp } from 'lucide-react';

/**
 * European Travelers Section
 * Highlights benefits and services for European travelers
 */
export default function EuropeanSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Comfort & Safety',
      description:
        'We prioritize your comfort and safety with professional guides, reliable transportation, and well-planned itineraries.',
    },
    {
      icon: Map,
      title: 'Flexible Scheduling',
      description:
        'We accommodate your schedule and preferences, whether you prefer early starts, leisurely mornings, or specific activity times.',
    },
    {
      icon: Heart,
      title: 'Local Knowledge',
      description:
        'Our guides have deep knowledge of Northern Thailand and can take you beyond typical tourist routes to authentic experiences.',
    },
    {
      icon: TrendingUp,
      title: 'Excellent Value',
      description:
        'Enjoy premium tour experiences at competitive prices compared to European tour operators.',
    },
  ];

  return (
    <section id="european" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
            For European Travelers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We welcome guests from across Europe and understand your travel expectations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/66899995677?text=Hello%2C%20I%20found%20Amporn%20Tour%20through%20your%20website%20and%20would%20like%20to%20ask%20about%20tours%20in%20Chiang%20Mai."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            <span>💬</span>
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
