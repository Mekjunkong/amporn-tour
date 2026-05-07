import { Award, CheckCircle2, Clock, MapPin, MessageCircle, Shield, Users } from 'lucide-react';

const WHATSAPP_NUMBER = '66899995677';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Amporn Tour, I would like to check availability and price for a Chiang Mai private tour. My travel date is:'
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const trustItems = [
  {
    icon: Award,
    title: 'Thai tourism license 22/00688',
    description: 'Amporn Tour Chiang Mai is listed with an official Chiang Mai tourism license.',
  },
  {
    icon: Users,
    title: 'Local Chiang Mai guides',
    description: 'Hosted by a local team that knows the temples, mountains, waterfalls, pickup routes, and seasonal conditions.',
  },
  {
    icon: MapPin,
    title: 'Hotel pickup available',
    description: 'Pickup can be arranged from hotels in Chiang Mai city. Exact pickup time is confirmed before booking.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp booking',
    description: 'Send your date, group size, and preferred tour. The team confirms availability and price before payment.',
  },
  {
    icon: CheckCircle2,
    title: 'Custom private tours',
    description: 'Itineraries can be adjusted for families, couples, photographers, first-time visitors, and slower travel days.',
  },
  {
    icon: Shield,
    title: 'Accident insurance included',
    description: 'Core tours include transportation, guide service, listed entrance tickets, lunch where stated, and accident insurance.',
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-slate-950 py-14 md:py-20 text-white" aria-labelledby="trust-heading">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Licensed Chiang Mai private tour operator
            </p>
            <h2 id="trust-heading" className="mb-5 text-3xl font-bold leading-tight md:text-5xl font-display">
              Book with a real local office, clear prices, and fast WhatsApp confirmation.
            </h2>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Amporn Tour focuses on private and small-group day tours around Chiang Mai, Chiang Rai, Doi Inthanon, temples, waterfalls, trekking routes, and family-friendly itineraries.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Ask availability on WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/2wbPCLXRqcieFkeFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                View office on Google Maps
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Send date and group size first. Final price is confirmed before booking.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="mb-4 h-7 w-7 text-amber-300" aria-hidden="true" />
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
