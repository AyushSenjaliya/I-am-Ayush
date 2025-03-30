import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript / TypeScript",
    "React / Next.js ",
    "Node.js / NestJS / Express",
    "MongoDB / MySQL / Redis",
    "RESTful APIs / WebSockets",
    " Event-Driven Architecture",
    "Docker / AWS / Kafka",
    "Scalability & Performance",
    "Clean Code & Best Practices",
    "Real-Time Data Processing",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate text-lg">
              I'm a passionate Full Stack Developer with a strong focus on
              building efficient, scalable, and real-time applications. With
              1.5+ years of experience, I continuously expand my skills to stay
              ahead in the fast-evolving tech landscape.
            </p>
            <p className="text-slate text-lg">
              I specialize in JavaScript-based technologies, particularly React
              (Next.js) for frontend and Node.js/NestJS for backend development.
              Additionally, I have hands-on experience with databases (MongoDB,
              MySQL, Redis), cloud services (AWS, Docker), and event-driven
              architectures (Kafka, WebSockets).
            </p>
            <p className="text-slate text-lg">
              I thrive on solving complex problems and enjoy working with
              real-time data, AI-driven solutions, and cutting-edge
              technologies. Whether it’s optimizing performance, ensuring
              scalability, or exploring the latest trends in tech, I am always
              eager to learn and innovate.
            </p>
            <p className="text-slate text-lg">
              Let’s build something amazing together! 🚀
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle size={18} className="text-highlight" />
                  <span className="text-slate-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
