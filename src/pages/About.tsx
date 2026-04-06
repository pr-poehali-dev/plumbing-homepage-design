import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const values = [
  {
    icon: "MessageSquare",
    title: "Clear communication",
    desc: "We explain the issue, the options, and the cost before any work begins.",
  },
  {
    icon: "Award",
    title: "Quality workmanship",
    desc: "Every job is completed to high standards with lasting results.",
  },
  {
    icon: "Home",
    title: "Respect for your home",
    desc: "We treat your space with care, leaving it clean and tidy after every visit.",
  },
  {
    icon: "CalendarCheck",
    title: "Reliable scheduling",
    desc: "We arrive when we say we will and keep you informed throughout.",
  },
];

const stats = [
  { value: "10+", label: "Years in Zürich" },
  { value: "500+", label: "Jobs completed" },
  { value: "4.9", label: "Customer rating" },
  { value: "100%", label: "Licensed & insured" },
];

export default function About() {
  return (
    <>
      <section className="bg-[#F7FAFC] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
            About us
          </span>
          <h1 className="text-3xl md:text-[44px] font-bold text-[#16212B] mt-3 mb-5 leading-tight">
            A reliable plumbing company for Zurich homes and businesses
          </h1>
          <p className="text-[17px] text-[#16212B]/60 leading-relaxed max-w-2xl mx-auto">
            We help property owners across Zurich with practical plumbing
            services, from urgent repairs to everyday maintenance and fixture
            installation. Our focus is on quality work, clear communication, and
            dependable service.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional plumber at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
                Our story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] leading-tight">
                Professional, local, and straightforward
              </h2>
              <p className="text-[#16212B]/60 leading-relaxed text-[17px]">
                We believe good plumbing service should feel simple: quick
                response, honest advice, tidy work, and lasting results. We work
                with care and respect for your space.
              </p>
              <p className="text-[#16212B]/60 leading-relaxed">
                Since 2015, we've been serving homeowners, tenants, and
                businesses across Zurich with dependable plumbing solutions. Our
                team brings experience, attention to detail, and a commitment to
                getting things right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
              Our values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mt-3 leading-tight">
              What guides our work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-[#D7E2EA] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2F8] flex items-center justify-center mx-auto mb-5">
                  <Icon name={v.icon} size={22} className="text-[#1E4E79]" />
                </div>
                <h3 className="font-semibold text-[#16212B] mb-2">{v.title}</h3>
                <p className="text-sm text-[#16212B]/55 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E79] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mb-4 leading-tight">
            Need help with a plumbing issue?
          </h2>
          <p className="text-[#16212B]/60 leading-relaxed mb-8 max-w-lg mx-auto">
            Whether it's a dripping tap, a blocked drain, or a full bathroom
            installation, we're here to help with reliable, professional
            service.
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
