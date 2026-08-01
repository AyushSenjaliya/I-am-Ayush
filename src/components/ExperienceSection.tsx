import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "May 2025 — Present",
    role: "Full Stack & Shopify Developer",
    company: "Independent / Freelance Projects",
    type: "Freelance",
    location: "Surat, Gujarat, India (Remote)",
    description: [
      "Designed and developed custom Shopify stores, optimizing liquid themes, payment gateway flows, and responsive user experiences.",
      "Built a personalized eCommerce business management web application featuring real-time order tracking, inventory controls, and automated customer notifications.",
      "Integrated Shopify Admin REST/GraphQL APIs with Node.js backend systems for real-time product & order synchronization.",
      "Helped small-to-mid businesses digitize manual workflows, eliminate operational overhead, and scale their online sales footprint."
    ],
    skills: ["React", "Next.js", "Node.js", "Shopify API", "Liquid", "Express", "MongoDB", "Webhooks", "Tailwind CSS"]
  },
  {
    period: "Jun 2024 — April 2025",
    role: "FullStack Developer",
    company: "Dot3 Solutions",
    type: "Full-Time",
    location: "Surat, Gujarat, India",
    description: [
      "Built and optimized scalable web applications, architecting full-stack features across React, Next.js, Node.js, and NestJS.",
      "Engineered real-time data streaming pipelines and WebSockets for low-latency client communication.",
      "Structured database schemas in MongoDB, MySQL, and managed type-safe migrations with Prisma ORM."
    ],
    skills: ["React", "Next.js", "Node.js", "NestJS", "WebSockets", "MongoDB", "MySQL", "Prisma ORM", "TypeScript"]
  },
  {
    period: "Dec 2023 — Jun 2024",
    role: "React.js Intern",
    company: "Dot3 Solutions",
    type: "Internship",
    location: "Surat, Gujarat, India",
    description: [
      "Developed the Accounting Management System, building accessible React UI components, complex form states, and backend REST integrations.",
      "Integrated React Hook Form, TanStack Query, Zustand, and ShadCN UI to deliver clean financial dashboards."
    ],
    skills: ["React", "JavaScript", "React Hook Form", "TanStack Query", "Zustand", "ShadCN UI", "REST APIs"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-navy-dark relative border-t border-slate-dark/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">04.</span> Professional Work Experience
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            My career timeline spanning full-stack web development at Dot3 Solutions and independent e-commerce engineering.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-dark/60 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-navy border-2 border-highlight flex items-center justify-center group-hover:scale-125 group-hover:bg-highlight transition-all">
                <div className="w-2 h-2 rounded-full bg-highlight group-hover:bg-navy-dark"></div>
              </div>

              {/* Card Container */}
              <div className="bg-navy p-6 sm:p-8 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all shadow-xl space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-dark/40 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors flex items-center gap-2">
                      <Briefcase size={18} className="text-highlight" />
                      {exp.role}
                    </h3>
                    <p className="text-highlight text-sm font-mono mt-0.5">
                      {exp.company} • <span className="text-slate">{exp.location}</span>
                    </p>
                  </div>

                  <span className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1.5 rounded-full border border-highlight/20 self-start sm:self-auto flex items-center gap-1.5">
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>

                {/* Description Bullet points */}
                <ul className="space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate text-sm flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={16} className="text-highlight flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-navy-light text-slate-light border-slate-dark text-xs font-mono"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
