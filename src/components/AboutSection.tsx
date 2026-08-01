import { CheckCircle, Cpu, Layers, Zap, Server } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript / TypeScript",
    "React 18 / Next.js (App Router)",
    "Node.js / NestJS / Express",
    "MongoDB / PostgreSQL / Redis",
    "RESTful APIs / GraphQL / WebSockets",
    "AI Integration (OpenAI / Vector DBs)",
    "Prisma ORM / Drizzle ORM",
    "Event-Driven Architecture (Kafka)",
    "Docker / AWS / Vercel",
    "Scalability & Performance Optimization",
    "Clean Architecture & Microservices",
    "Custom E-commerce & SaaS Platforms",
  ];

  const highlights = [
    {
      icon: <Server size={20} className="text-highlight" />,
      title: "Backend Excellence",
      desc: "Designing resilient RESTful/WebSocket APIs and microservices handling real-time data flows."
    },
    {
      icon: <Layers size={20} className="text-highlight" />,
      title: "Modern Frontend",
      desc: "Crafting accessible, pixel-perfect UIs using React, Next.js, TypeScript, and Tailwind CSS."
    },
    {
      icon: <Cpu size={20} className="text-highlight" />,
      title: "AI & Innovation",
      desc: "Integrating intelligent LLM workflows, RAG pipelines, and automated business agents."
    },
    {
      icon: <Zap size={20} className="text-highlight" />,
      title: "Performance First",
      desc: "Optimizing database queries, caching strategies, and load times for fast performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-navy-dark">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">01.</span> About Me
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-slate text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with 1.5+ years of hands-on experience designing and delivering high-performance, real-time web applications.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              My expertise spans the entire JavaScript and TypeScript ecosystem—from crafting intuitive React and Next.js interfaces to architecting robust NestJS, Express, and database microservices (MongoDB, PostgreSQL, MySQL, Redis).
            </p>
            <p className="text-slate text-lg leading-relaxed">
              I specialize in taking complex requirements—such as multi-currency accounting systems, clinic management platforms, or real-time stock analytics—and engineering scalable, production-ready applications.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              Recently, I've been integrating generative AI capabilities and vector search pipelines into web applications to help businesses automate workflows and deliver smarter user experiences. 🚀
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-navy-light/60 border border-slate-dark/60 p-5 rounded-lg hover:border-highlight/40 transition-colors"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div id="skills" className="pt-6">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-highlight font-mono text-lg">Tech Stack & Tools</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-navy/60 p-3.5 rounded-lg border border-slate-dark/40 hover:border-highlight/30 transition-all"
              >
                <CheckCircle size={18} className="text-highlight flex-shrink-0" />
                <span className="text-slate-light font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
