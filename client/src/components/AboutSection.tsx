import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Shield, Zap } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const features = [
  {
    icon: Compass,
    key: 'expertise',
  },
  {
    icon: Shield,
    key: 'reliability',
  },
  {
    icon: Zap,
    key: 'flexibility',
  },
];

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            {t.about.title}
          </h2>
          <p className="text-lg text-slate-600">{t.about.intro}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <LazyImage
              src="/images/Screenshot_2026-01-11-07-45-07-968_com.whatsapp-edit.jpg"
              alt="Amporn Tour Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {t.about.story}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const featureData = (t.about as any)[feature.key];

            return (
              <Card key={feature.key} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <CardTitle className="text-lg">{featureData}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    {(t.about as any)[`${feature.key}Desc`]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
