import { useState } from "react";
import Icon from "@/components/ui/icon";

const serviceOptions = [
  "Leak Repair",
  "Drain Cleaning",
  "Fixture Installation",
  "Emergency Plumbing",
  "Other",
];

const reassurances = [
  {
    icon: "Zap",
    title: "Quick response",
    desc: "We aim to reply within a few hours on working days.",
  },
  {
    icon: "Eye",
    title: "Transparent process",
    desc: "Clear communication about scope, timing, and pricing.",
  },
  {
    icon: "Shield",
    title: "No obligation",
    desc: "Get a quote with no commitment required.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#F7FAFC] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5E8FB1]">
            Contact
          </span>
          <h1 className="text-3xl md:text-[44px] font-bold text-[#16212B] mt-3 mb-5 leading-tight">
            Contact your Zurich plumber
          </h1>
          <p className="text-[17px] text-[#16212B]/60 leading-relaxed max-w-2xl mx-auto">
            Get in touch for urgent repairs, planned work, or a pricing request.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-[#F7FAFC] border border-[#D7E2EA] rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EBF2F8] flex items-center justify-center mx-auto mb-5">
                    <Icon name="Check" size={24} className="text-[#1E4E79]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#16212B] mb-2">
                    Request sent
                  </h3>
                  <p className="text-[#16212B]/60 leading-relaxed">
                    Thank you for your message. We'll get back to you as soon as
                    possible with availability and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#16212B] mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#D7E2EA] rounded-xl px-4 py-3 text-[15px] text-[#16212B] bg-[#F7FAFC] focus:outline-none focus:border-[#1E4E79] focus:ring-1 focus:ring-[#1E4E79] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#16212B] mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-[#D7E2EA] rounded-xl px-4 py-3 text-[15px] text-[#16212B] bg-[#F7FAFC] focus:outline-none focus:border-[#1E4E79] focus:ring-1 focus:ring-[#1E4E79] transition-colors"
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#16212B] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#D7E2EA] rounded-xl px-4 py-3 text-[15px] text-[#16212B] bg-[#F7FAFC] focus:outline-none focus:border-[#1E4E79] focus:ring-1 focus:ring-[#1E4E79] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#16212B] mb-1.5">
                      Service needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[#D7E2EA] rounded-xl px-4 py-3 text-[15px] text-[#16212B] bg-[#F7FAFC] focus:outline-none focus:border-[#1E4E79] focus:ring-1 focus:ring-[#1E4E79] transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#16212B] mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-[#D7E2EA] rounded-xl px-4 py-3 text-[15px] text-[#16212B] bg-[#F7FAFC] focus:outline-none focus:border-[#1E4E79] focus:ring-1 focus:ring-[#1E4E79] transition-colors resize-none"
                      placeholder="Describe the issue or what you need help with..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF8A3D] hover:bg-[#e97a30] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-[15px]"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#F7FAFC] border border-[#D7E2EA] rounded-2xl p-7 space-y-6">
                <h3 className="font-bold text-[#16212B] text-lg">
                  Contact details
                </h3>
                {[
                  {
                    icon: "Phone",
                    label: "Phone",
                    value: "+41 XX XXX XX XX",
                  },
                  {
                    icon: "Mail",
                    label: "Email",
                    value: "hello@zurichplumbing.ch",
                  },
                  {
                    icon: "MapPin",
                    label: "Address",
                    value: "Zurich, Switzerland",
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EBF2F8] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={icon} size={16} className="text-[#1E4E79]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#16212B]/50 mb-0.5">
                        {label}
                      </div>
                      <div className="text-[15px] font-medium text-[#16212B]">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#D7E2EA]">
                  <h4 className="font-semibold text-[#16212B] mb-3 text-sm">
                    Working hours
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#16212B]/60">Mon — Fri</span>
                      <span className="font-medium text-[#16212B]">
                        08:00 — 18:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#16212B]/60">Saturday</span>
                      <span className="font-medium text-[#16212B]">
                        09:00 — 14:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#16212B]/60">Emergency</span>
                      <span className="font-medium text-[#FF8A3D]">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16212B] mb-4 leading-tight">
              Fast response, clear next steps
            </h2>
            <p className="text-[#16212B]/60 leading-relaxed">
              Tell us what you need, and we'll get back to you with availability
              and the best next step.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reassurances.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-[#D7E2EA] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2F8] flex items-center justify-center mx-auto mb-4">
                  <Icon name={r.icon} size={22} className="text-[#1E4E79]" />
                </div>
                <h3 className="font-semibold text-[#16212B] mb-2">{r.title}</h3>
                <p className="text-sm text-[#16212B]/55 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
