import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Clock, MessageCircle, Phone } from 'lucide-react';
import { useMemo } from 'react';
import type { FormEvent } from 'react';

const WHATSAPP_NUMBER = '66899995677';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;
  }, [t.whatsapp.message]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = new FormData(e.currentTarget);
    const name = String(fields.get('name') || '').trim();
    const email = String(fields.get('email') || '').trim();
    const inquiry = String(fields.get('message') || '').trim();

    const message = [
      'Hello Amporn Tour, I would like to check availability and price.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${inquiry}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Fastest contact</p>
          <h2 id="contact-heading" className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl font-display">
            Ask availability on WhatsApp
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Send your travel date, group size, hotel area, and preferred tour. Amporn Tour will confirm the price and inclusions before booking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <MessageCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">WhatsApp</h3>
                  <p className="text-slate-600">{t.footer.phone}</p>
                  <p className="mt-2 text-sm font-medium text-primary">Ask availability, price, and pickup details</p>
                </div>
              </div>
            </a>

            <a href={`tel:+${WHATSAPP_NUMBER}`} className="block rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Phone</h3>
                  <p className="text-slate-600">{t.footer.phone}</p>
                  <p className="mt-2 text-sm font-medium text-primary">Tap to call from mobile</p>
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Response time</h3>
                  <p className="text-slate-600">Please contact us for availability. WhatsApp is the fastest channel during Thai daytime.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-slate-900 font-display">Draft your WhatsApp message</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              This form opens WhatsApp with your message. It does not silently submit or store your information.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Travel date, group size, hotel area, preferred tour"
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
