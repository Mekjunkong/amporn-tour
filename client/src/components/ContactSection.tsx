import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = '66899995677';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const getWhatsAppMessage = () => {
    return encodeURIComponent(t.whatsapp.message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission (in production, this would send to a backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(t.contact.form.success);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(t.contact.form.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.contact.whatsapp}</h3>
                  <p className="text-slate-600">{t.footer.phone}</p>
                  <p className="text-sm text-primary mt-2">Click to message</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a href={`tel:+${WHATSAPP_NUMBER}`}>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.contact.phone}</h3>
                  <p className="text-slate-600">{t.footer.phone}</p>
                  <p className="text-sm text-primary mt-2">Click to call</p>
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{t.contact.hours}</h3>
                <p className="text-slate-600">{t.contact.hoursText}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isLoading ? 'Sending...' : t.contact.form.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
