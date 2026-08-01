import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score?: string;
  highlights: string[];
}

const educationList: EducationItem[] = [
  {
    degree: "Masters of Business Administration",
    field: "MBA",
    institution: "Parul University",
    period: "July 2024 — Present",
    highlights: [
      "Strategic Business Management & IT Leadership",
      "Enterprise Resource Planning (ERP) & E-Commerce Strategy",
      "Product Management & Scalable Business Operations"
    ]
  },
  {
    degree: "Bachelor of Science in Information Technology",
    field: "B.Sc. IT",
    institution: "Sarvajanik University",
    period: "2021 — 2024",
    score: "CGPA: 8.45",
    highlights: [
      "Core Computer Science, Software Engineering & Data Structures",
      "Web Application Development & Database Management Systems",
      "Graduated with Distinction (CGPA 8.45 / 10)"
    ]
  }
];

const EducationSection = () => {
  return (
    <section className="py-16 bg-navy border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">03.</span> Education & Academic Background
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-navy-dark/90 p-6 sm:p-8 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all shadow-xl space-y-4 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-navy-light rounded-xl text-highlight group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                {edu.score && (
                  <span className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/30 font-bold">
                    🏆 {edu.score}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-highlight text-sm font-mono mt-1">
                  {edu.institution}
                </p>
                <p className="text-slate-light text-xs font-mono mt-0.5 flex items-center gap-1">
                  <Calendar size={13} /> {edu.period}
                </p>
              </div>

              <ul className="space-y-2 pt-2 border-t border-slate-dark/40">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-slate text-xs flex items-center gap-2">
                    <span className="text-highlight font-mono">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
