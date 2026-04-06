import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const pricingCards = [
  {
    icon: "Clock",
    title: "Standard Service",
    price: "From CHF XX/hr",
    desc: "Hourly rate for general plumbing work and scheduled visits.",
    highlight: false,
  },
  {
    icon: "Truck",
    title: "Call-Out Fee",
    price: "Available on request",
    desc: "Travel and inspection fee available on request.",
    highlight: true,
  },
  {
    icon: "AlertTriangle",
    title: "Emergency Service",
    price: "Priced separately",
    desc: "Separate rates for urgent or after-hours plumbing support.",
    highlight: false,
  },
];

const factors = [
  {
    icon: "Layers",
    title: "Complexity",
    desc: "Scope and difficulty of the repair or installation.",
  },
  {
    icon: "Package",
    title: "Materials",
    desc: "Cost of replacement parts, fittings, and supplies.",
  },
  {
    icon: "DoorOpen",
    title: "Access",
    desc: "Ease of reaching the problem area in your property.",
  },
  {
    icon: "Timer",
    title: "Urgency",
    desc: "Whether the work is standard or emergency callout.",
  },
];

const included = [
  "Free initial assessment",
  "Clear quote before work begins",
  "Clean and tidy work area",
  "Invoice provided after completion",
];

export default function Pricing() {
  return (
    <>
      <section className="bg-[#F7FAFC] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
            Pricing
          </span>
          <h1 className="text-3xl md:text-[44px] font-bold text-[#16212B] mt-3 mb-5 leading-tight">
            Clear pricing, explained simply
          </h1>
          <p className="text-[17px] text-[#16212B]/60 leading-relaxed max-w-2xl mx-auto">
            We keep pricing straightforward and transparent. The final cost
            depends on the type of work, urgency, and materials involved.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-7 text-center transition-shadow hover:shadow-md ${
                  card.highlight
                    ? "bg-[#1E4E79] text-white border-2 border-[#1E4E79]"
                    : "bg-[#F7FAFC] border border-[#D7E2EA]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 ${
                    card.highlight ? "bg-white/15" : "bg-[#EBF2F8]"
                  }`}
                >
                  <Icon
                    name={card.icon}
                    size={22}
                    className={card.highlight ? "text-white" : "text-[#1E4E79]"}
                  />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    card.highlight ? "text-white" : "text-[#16212B]"
                  }`}
                >
                  {card.title}
                </h3>
                <div
                  className={`text-2xl font-bold mb-3 ${
                    card.highlight ? "text-[#FF8A3D]" : "text-[#1E4E79]"
                  }`}
                >
                  {card.price}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    card.highlight ? "text-white/70" : "text-[#16212B]/55"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Pricing details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 mb-4 leading-tight">
              What affects the final price
            </h2>
            <p className="text-[#16212B]/60 leading-relaxed">
              The total cost may depend on the complexity of the issue, required
              parts, access to the problem area, and whether the work is
              standard or urgent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {factors.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-[#D7E2EA] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF2F8] flex items-center justify-center mx-auto mb-4">
                  <Icon name={f.icon} size={20} className="text-[#1E4E79]" />
                </div>
                <h3 className="font-semibold text-[#16212B] mb-2">{f.title}</h3>
                <p className="text-sm text-[#16212B]/55 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
              What's always included
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-[#F7FAFC] border border-[#D7E2EA] rounded-xl px-5 py-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF2F8] flex items-center justify-center shrink-0">
                  <Icon name="Check" size={16} className="text-[#1E4E79]" />
                </div>
                <span className="text-[15px] font-medium text-[#16212B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E79] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Need a quote for your project?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
            Tell us about the issue and we'll provide a clear, no-obligation
            estimate.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FF8A3D] hover:bg-[#e97a30] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
