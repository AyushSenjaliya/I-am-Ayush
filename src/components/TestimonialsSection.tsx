import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  projectContext: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Enterprise Client",
    role: "Director of Operations",
    company: "Logistics & Import Solutions",
    feedback: "Ayush transformed our import tracking and customs workflow completely. His Node.js and React architecture reduced our manual dispatch overhead by 40%. Delivered on time with outstanding code quality.",
    rating: 5,
    projectContext: "Import Management Platform"
  },
  {
    name: "Medical Clinic Lead",
    role: "Managing Physician",
    company: "City Healthcare Clinic",
    feedback: "The automated WhatsApp booking bot and clinical records manager cut our patient check-in wait times by half. Ayush's attention to detail and UI polish exceeded our expectations.",
    rating: 5,
    projectContext: "Clinic Management Suite"
  },
  {
    name: "Apparel Manufacturer",
    role: "Production Head",
    company: "Fashion Textiles Enterprise",
    feedback: "The garment costing engine Ayush built gave us instant margin precision. What used to take hours of spreadsheet calculations now takes under two minutes. Highly recommended developer!",
    rating: 5,
    projectContext: "Garment Costing Calculator"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-navy-dark border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">04.</span> Client Reviews & Feedback
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            What clients and project stakeholders say about engineering quality, reliability, and business impact.
          </p>
        </div>

        {/* Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-navy p-6 sm:p-8 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all shadow-xl flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote size={28} className="text-highlight/40 group-hover:text-highlight transition-colors" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, rIdx) => (
                      <Star key={rIdx} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate text-sm leading-relaxed italic">
                  "{t.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-dark/40 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-highlight text-xs font-mono">{t.role} • {t.company}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-light bg-navy-light px-2 py-1 rounded border border-slate-dark">
                  {t.projectContext}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
