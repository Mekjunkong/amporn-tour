import { Award, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Trust Signals Section
 * Displays company credentials, certifications, and trust indicators
 */
export default function TrustSignals() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const credentials = [
    {
      icon: Award,
      title: 'Licensed Tour Operator',
      description: 'Official Tourism License #22/00688 & #22/00648',
      highlight: true,
    },
    {
      icon: Users,
      title: '10+ Years Experience',
      description: 'Serving international travelers since 2014',
    },
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Always available via WhatsApp and phone',
    },
    {
      icon: Shield,
      title: 'Safety Certified',
      description: 'Accident insurance included in all tours',
    },
    {
      icon: CheckCircle2,
      title: '1000+ Happy Customers',
      description: 'Trusted by travelers from 50+ countries',
    },
    {
      icon: Award,
      title: 'Professional Guides',
      description: 'Trained, certified, and English-speaking guides',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Why Trust Amporn Tour
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're committed to providing safe, professional, and memorable tour experiences backed by official credentials and customer satisfaction.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                  sectionVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: sectionVisible ? `${index * 50}ms` : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {credential.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - License Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">
                Official Licenses & Certifications
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-amber-400 font-semibold mb-1">
                    Amporn Tour Chiang Mai
                  </p>
                  <p className="text-slate-300 text-sm">
                    Tourism License: <span className="font-mono">22/00688</span>
                  </p>
                  <p className="text-slate-300 text-sm">
                    Location: T2B Hostel, 146/5 Ratchiangsaen Road
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-amber-400 font-semibold mb-1">
                    Leisure Hub Travel
                  </p>
                  <p className="text-slate-300 text-sm">
                    Tourism License: <span className="font-mono">22/00648</span>
                  </p>
                  <p className="text-slate-300 text-sm">
                    Location: 71/6 Sridonchai Road, Changklan
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Trust Stats */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-2">10+</p>
                  <p className="text-slate-300 text-sm">Years in Business</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-2">1000+</p>
                  <p className="text-slate-300 text-sm">Happy Customers</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-2">50+</p>
                  <p className="text-slate-300 text-sm">Countries Served</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-2">100%</p>
                  <p className="text-slate-300 text-sm">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
