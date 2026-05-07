import { CalendarCheck, MessageCircle, Users, WalletCards } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Choose your tour',
    text: 'Pick a route or send your interests if you want a custom private day.',
  },
  {
    icon: MessageCircle,
    title: 'Message on WhatsApp',
    text: 'Send travel date, hotel area, group size, and any must-see places.',
  },
  {
    icon: Users,
    title: 'Confirm pickup and inclusions',
    text: 'The team confirms guide, pickup time, tickets, lunch, and any optional stops.',
  },
  {
    icon: WalletCards,
    title: 'Clear price before payment',
    text: 'You receive the final price and payment terms before the booking is confirmed.',
  },
];

export default function BookingFlow() {
  return (
    <section className="bg-white py-14 md:py-20" aria-labelledby="booking-flow-heading">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How booking works</p>
          <h2 id="booking-flow-heading" className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl font-display">
            Simple WhatsApp booking with no surprise price.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            You do not need to know every detail before messaging. Share your date and group size first, then Amporn Tour will help match the right route.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <span className="font-mono text-sm font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
