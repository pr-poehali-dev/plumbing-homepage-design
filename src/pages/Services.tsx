import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const servicesList = [
  {
    icon: "Droplets",
    title: "Leak Repair",
    desc: "Fast detection and repair for visible leaks, dripping taps, and pipe issues.",
    features: [
      "Dripping and leaking tap repair",
      "Pipe joint and connection fixes",
      "Water damage prevention advice",
    ],
  },
  {
    icon: "Wind",
    title: "Drain Cleaning",
    desc: "Help with slow drains, blockages, and recurring sink or shower backups.",
    features: [
      "Kitchen and bathroom drain clearing",
      "Blockage identification and removal",
      "Preventive drain maintenance",
    ],
  },
  {
    icon: "Wrench",
    title: "Fixture Installation",
    desc: "Installation of taps, sinks, toilets, and other essential bathroom or kitchen fixtures.",
    features: [
      "Tap and mixer installation",
      "Sink, basin, and toilet fitting",
      "Shower and bath fixture setup",
    ],
  },
  {
    icon: "AlertTriangle",
    title: "Emergency Plumbing",
    desc: "Fast help for urgent plumbing issues such as leaks, burst pipes, overflows, and unexpected failures.",
    features: [
      "Burst pipe response and repair",
      "Overflow and flooding assistance",
      "After-hours emergency support",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-[#F7FAFC] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
            Services
          </span>
          <h1 className="text-3xl md:text-[44px] font-bold text-[#16212B] mt-3 mb-5 leading-tight">
            Plumbing services in Zurich
          </h1>
          <p className="text-[17px] text-[#16212B]/60 leading-relaxed max-w-2xl mx-auto">
            Practical plumbing support for urgent repairs, everyday problems,
            and planned installations.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {servicesList.map((s) => (
              <div
                key={s.title}
                className="bg-[#F7FAFC] border border-[#D7E2EA] rounded-2xl p-8 hover:border-[#5E8FB1] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2F8] group-hover:bg-[#1E4E79] flex items-center justify-center mb-6 transition-colors">
                  <Icon
                    name={s.icon}
                    size={22}
                    className="text-[#1E4E79] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#16212B] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#16212B]/60 leading-relaxed mb-5">
                  {s.desc}
                </p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[#16212B]/70"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-[#1E4E79] mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
                alt="Plumber working in a clean bathroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
                Our approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] leading-tight">
                Practical solutions, careful work
              </h2>
              <p className="text-[17px] text-[#16212B]/60 leading-relaxed">
                We focus on efficient repairs, clean finishes, and service that
                fits the real needs of your home or property.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { icon: "Clock", text: "Same-day scheduling" },
                  { icon: "ShieldCheck", text: "Licensed professionals" },
                  { icon: "Sparkles", text: "Clean work guaranteed" },
                  { icon: "ThumbsUp", text: "Satisfaction focused" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm font-medium text-[#16212B]/70"
                  >
                    <Icon name={icon} size={14} className="text-[#1E4E79]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E79] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to book a service?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
            Tell us what you need and we'll arrange a convenient time to get the
            job done.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FF8A3D] hover:bg-[#e97a30] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Request Service
          </Link>
        </div>
      </section>
    </>
  );
}
