import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/292fb55d-43f1-4298-8858-e5ed0e9a57e0/files/7041a8a9-267d-4243-89e9-ac7398c329c2.jpg";

const services = [
  {
    icon: "Droplets",
    title: "Leak Repair",
    desc: "Fast detection and repair for visible leaks, dripping taps, and pipe issues.",
  },
  {
    icon: "Wind",
    title: "Drain Cleaning",
    desc: "Help with slow drains, blockages, and recurring sink or shower backups.",
  },
  {
    icon: "Wrench",
    title: "Fixture Installation",
    desc: "Installation of taps, sinks, toilets, and other essential bathroom or kitchen fixtures.",
  },
  {
    icon: "ShowerHead",
    title: "Bathroom Plumbing",
    desc: "Practical plumbing support for bathroom updates, replacements, and maintenance.",
  },
];

const benefits = [
  {
    icon: "Zap",
    title: "Fast response",
    desc: "Clear communication and quick scheduling for urgent and planned jobs.",
  },
  {
    icon: "Receipt",
    title: "Transparent pricing",
    desc: "Straightforward rates with no hidden surprises.",
  },
  {
    icon: "Star",
    title: "Clean, careful work",
    desc: "Respect for your home, tidy finishes, and attention to detail.",
  },
  {
    icon: "MapPin",
    title: "Local and reliable",
    desc: "A dependable plumbing service focused on Zurich and nearby areas.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell us what's wrong",
    desc: "Call or send a message with a short description of the issue.",
  },
  {
    num: "02",
    title: "Get a clear next step",
    desc: "We confirm availability, timing, and what to expect.",
  },
  {
    num: "03",
    title: "Problem solved",
    desc: "We complete the work efficiently and leave the space clean.",
  },
];

const reviews = [
  {
    name: "Anna Muller",
    location: "Zurich Altstadt",
    rating: 5,
    text: "Absolutely excellent service. They arrived within two hours, fixed our leaking pipe, and left the kitchen spotless. Pricing was exactly as quoted.",
    avatar: "AM",
  },
  {
    name: "Thomas Keller",
    location: "Zurich Oerlikon",
    rating: 5,
    text: "Professional from start to finish. Clear communication, no surprises on the invoice. I've already recommended them to my neighbors.",
    avatar: "TK",
  },
  {
    name: "Sophie Brunner",
    location: "Zurich Seefeld",
    rating: 5,
    text: "We had a blocked drain emergency on a Sunday evening. They responded quickly and solved everything efficiently. Highly reliable team.",
    avatar: "SB",
  },
  {
    name: "Markus Weber",
    location: "Zurich Wiedikon",
    rating: 5,
    text: "New bathroom fittings installed perfectly. Very clean work, respected our home completely. Will definitely use again for future projects.",
    avatar: "MW",
  },
];

const portfolio = [
  {
    title: "Modern bathroom renovation",
    location: "Zurich Seefeld",
    tag: "Fixture Installation",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    title: "Kitchen pipe repair",
    location: "Zurich Altstadt",
    tag: "Leak Repair",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  },
  {
    title: "Drain cleaning & inspection",
    location: "Zurich Oerlikon",
    tag: "Drain Cleaning",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    title: "Bathroom plumbing upgrade",
    location: "Zurich Wiedikon",
    tag: "Bathroom Plumbing",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
  },
  {
    title: "Tap and mixer installation",
    location: "Zurich Enge",
    tag: "Fixture Installation",
    img: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80",
  },
  {
    title: "Emergency water supply fix",
    location: "Zurich Wipkingen",
    tag: "Leak Repair",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

const faqs = [
  {
    q: "How quickly can you respond to an urgent call?",
    a: "For emergency situations, we aim to respond within 1-2 hours. For standard requests, we typically schedule within the same day or the following morning.",
  },
  {
    q: "Do you provide a quote before starting work?",
    a: "Yes, always. We assess the issue first and give you a clear scope and pricing before any work begins. No surprises.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are fully licensed and carry professional liability insurance. All work meets Swiss plumbing standards.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover all districts of Zurich city and the wider canton, including Oerlikon, Seefeld, Wiedikon, Wipkingen, Enge, and surrounding areas.",
  },
  {
    q: "Do you work on weekends and public holidays?",
    a: "We offer emergency service seven days a week. Weekend and holiday callouts are priced separately -- we'll confirm exact rates when you contact us.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, TWINT, and cash. An invoice is always provided after work is completed.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#EBF2F8] text-[#1E4E79] text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E4E79]" />
              Serving Zurich since 2015
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#16212B] leading-[1.1] tracking-tight">
                Reliable plumbing
                <br />
                <span className="text-[#1E4E79]">services in Zurich</span>
              </h1>
              <p className="text-[17px] text-[#16212B]/60 leading-relaxed max-w-md">
                Fast response, clear pricing, and quality work for homes,
                apartments, and small businesses.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-[#FF8A3D] hover:bg-[#e97a30] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-[15px]"
              >
                Request Service
              </Link>
              <Link
                to="/services"
                className="bg-white border border-[#D7E2EA] hover:border-[#1E4E79] text-[#16212B] font-semibold px-6 py-3 rounded-xl transition-colors text-[15px]"
              >
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              {[
                { icon: "ShieldCheck", text: "Licensed & insured" },
                { icon: "Clock", text: "Emergency support" },
                { icon: "Tag", text: "Transparent pricing" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium text-[#16212B]/70"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EBF2F8] flex items-center justify-center">
                    <Icon name={icon} size={12} className="text-[#1E4E79]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1E4E79]/10 aspect-[4/3]">
              <img
                src={HERO_IMG}
                alt="Professional plumber at work in Zurich"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4E79]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-[#D7E2EA] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EBF2F8] flex items-center justify-center">
                <Icon name="Star" size={18} className="text-[#FF8A3D]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#16212B]">4.9 / 5.0</div>
                <div className="text-xs text-[#16212B]/50">120+ reviews</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#1E4E79] text-white rounded-xl shadow-lg px-4 py-3 text-center">
              <div className="text-xl font-bold">10+</div>
              <div className="text-xs text-white/70">Years in Zurich</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 mb-4 leading-tight">
              Plumbing services for everyday issues and urgent repairs
            </h2>
            <p className="text-[#16212B]/60 leading-relaxed">
              From leaking taps and blocked drains to fixture installation and
              bathroom plumbing, we handle the most common residential plumbing
              needs with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#F7FAFC] border border-[#D7E2EA] rounded-2xl p-6 hover:border-[#5E8FB1] hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF2F8] group-hover:bg-[#1E4E79] flex items-center justify-center mb-5 transition-colors">
                  <Icon
                    name={s.icon}
                    size={20}
                    className="text-[#1E4E79] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-[#16212B] mb-2">{s.title}</h3>
                <p className="text-sm text-[#16212B]/55 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex">
            <Link
              to="/services"
              className="flex items-center gap-2 text-[#1E4E79] font-semibold text-sm border border-[#1E4E79] hover:bg-[#1E4E79] hover:text-white px-5 py-2.5 rounded-xl transition-colors"
            >
              See all services
              <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Plumber working on site"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
                  About us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
                  Local plumbing service, done with care
                </h2>
              </div>
              <p className="text-[#16212B]/60 leading-relaxed">
                We provide dependable plumbing services for homes, apartments,
                and small businesses across Zurich. Our approach is simple: clear
                communication, honest recommendations, careful work, and service
                you can rely on.
              </p>
              <Link
                to="/about"
                className="inline-flex bg-[#1E4E79] hover:bg-[#16396b] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Why us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
              Why homeowners in Zurich choose us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF2F8] flex items-center justify-center mx-auto mb-5">
                  <Icon name={b.icon} size={22} className="text-[#1E4E79]" />
                </div>
                <h3 className="font-semibold text-[#16212B] mb-2">{b.title}</h3>
                <p className="text-sm text-[#16212B]/55 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E79] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
              Simple, clear service from first call to final fix
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-px bg-white/20" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center mb-5 relative z-10">
                    <span className="text-white font-bold text-sm">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
                Completed work in Zurich
              </h2>
            </div>
            <button className="text-sm font-semibold text-[#1E4E79] border border-[#1E4E79] hover:bg-[#1E4E79] hover:text-white px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
              View all projects
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl overflow-hidden border border-[#D7E2EA] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EBF2F8]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#5E8FB1] bg-[#EBF2F8] px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="font-semibold text-[#16212B] mt-3 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#16212B]/50">
                    <Icon name="MapPin" size={11} />
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
              What our customers say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-[#FF8A3D] fill-[#FF8A3D]"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#16212B]">4.9</span>
              <span className="text-sm text-[#16212B]/50">
                based on 120+ reviews
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-[#D7E2EA] rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={13}
                      className="text-[#FF8A3D] fill-[#FF8A3D]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#16212B]/70 leading-relaxed mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1E4E79] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {r.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#16212B]">
                      {r.name}
                    </div>
                    <div className="text-xs text-[#16212B]/45">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
                Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 mb-4 leading-tight">
                Clear pricing, explained simply
              </h2>
              <p className="text-[#16212B]/60 leading-relaxed">
                Every plumbing job is different, but we believe pricing should
                always be easy to understand. We provide clear rates, explain
                the scope, and confirm the next step before work begins.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: "Phone",
                  label: "Call-out fee",
                  note: "Available on request",
                },
                {
                  icon: "Clock",
                  label: "Hourly rates",
                  note: "For standard service",
                },
                {
                  icon: "AlertCircle",
                  label: "Emergency service",
                  note: "Priced separately",
                },
              ].map((p) => (
                <div
                  key={p.label}
                  className="bg-[#F7FAFC] border border-[#D7E2EA] rounded-2xl p-6 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EBF2F8] flex items-center justify-center mx-auto mb-4">
                    <Icon name={p.icon} size={18} className="text-[#1E4E79]" />
                  </div>
                  <div className="font-semibold text-[#16212B] mb-1">
                    {p.label}
                  </div>
                  <div className="text-sm text-[#16212B]/50">{p.note}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/pricing"
                className="bg-[#1E4E79] hover:bg-[#16396b] text-white font-semibold px-7 py-3 rounded-xl transition-colors inline-block"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#D7E2EA] rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-[#16212B] text-[15px]">
                    {faq.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={16}
                    className="text-[#1E4E79] shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#16212B]/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E79] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 leading-tight">
            Need a plumber in Zurich?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
            Whether it's an urgent repair or a planned installation, we're here
            to help with prompt, professional service.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF8A3D] hover:bg-[#e97a30] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Request Service
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 justify-center mt-12 pt-12 border-t border-white/10">
            {[
              { icon: "Phone", text: "+41 XX XXX XX XX" },
              { icon: "Mail", text: "hello@zurichplumbing.ch" },
              { icon: "MapPin", text: "Zurich, Switzerland" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <Icon name={icon} size={14} className="text-[#5E8FB1]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
