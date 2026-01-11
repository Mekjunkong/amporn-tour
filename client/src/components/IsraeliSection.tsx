import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, MapPin, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    key: 'familiarity',
  },
  {
    icon: Clock,
    key: 'shabbat',
  },
  {
    icon: MapPin,
    key: 'jewish',
  },
  {
    icon: Heart,
    key: 'professional',
  },
];

export default function IsraeliSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            {t.israeli.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.israeli.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const featureData = (t.israeli as any)[feature.key];

            return (
              <Card key={feature.key} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <CardTitle className="text-xl">{featureData}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    {(t.israeli as any)[`${feature.key}Desc`]}
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
