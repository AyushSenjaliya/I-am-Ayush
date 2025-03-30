import {
  ArrowUpRight,
  Github,
  Calculator,
  ShoppingCart,
  Calendar,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Accounting Management System",
    description:
      "A comprehensive financial management solution for businesses with advanced ledger capabilities, financial reporting, invoice generation, and expense tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Redux",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    icon: <Calculator size={24} className="text-highlight" />,
  },
  {
    title: "Import Management System",
    description:
      "A scalable platform for managing international imports, featuring shipment tracking, customs documentation, inventory management, and supplier relationship management.",
    technologies: ["Next.js", "Node.js", "Redux", "MongoDB", "MUI", "AWS"],
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    icon: <ShoppingCart size={24} className="text-highlight" />,
  },
  {
    title: "Clinic Management System",
    description:
      "A modern healthcare solution designed to streamline clinic operations with key features like appointment booking via WhatsApp, patient record management, billing automation, and medical inventory tracking.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "ShadCN",
      "Prisma",
      "Redis",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    icon: <Calendar size={24} className="text-highlight" />,
  },
  {
    title: "Garment Costing Calculator",
    description:
      "A specialized tool designed for the fashion and garment industry, enabling manufacturers to calculate production costs, estimate material requirements, manage stock, and generate pricing for both internal production and client sales.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "ShadCN",
      "NestJS",
      "MySQL",
      "Prisma",
    ],
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    icon: <BarChart3 size={24} className="text-highlight" />,
  },
  {
    title: "Real-Time Stock Market Analytics",
    description:
      "A cutting-edge stock market analytics platform that provides real-time market data visualization, customizable trading strategies, and intelligent trade recommendations to help traders make informed decisions.",
    technologies: [
      "React",
      "TypeScript",
      "ShadCN",
      "WebSockets",
      "NestJS",
      "MySQL",
      "Prisma",
      "Redis",
      "Kafka",
      "Docker",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    icon: <TrendingUp size={24} className="text-highlight" />,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-navy">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">02.</span> My Projects
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Here are some notable projects I've developed. Each solution was
            designed to solve specific business challenges.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-highlight/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-auto rounded-lg shadow-xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy-dark/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {/* <a 
                        href={project.githubUrl}
                        className="bg-navy p-3 rounded-full text-white hover:text-highlight transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="bg-navy p-3 rounded-full text-white hover:text-highlight transition-colors"
                        aria-label="View live project"
                      >
                        <ArrowUpRight size={20} />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1 text-right" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  {index % 2 === 1 ? (
                    <>
                      {project.title}
                      {project.icon}
                    </>
                  ) : (
                    <>
                      {project.icon}
                      {project.title}
                    </>
                  )}
                </h3>
                <p className="text-slate mb-4">{project.description}</p>
                <div
                  className={`flex flex-wrap gap-2 mb-6 ${
                    index % 2 === 1 ? "justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-navy-light text-highlight hover:bg-navy-light/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "justify-end" : ""
                  }`}
                >
                  {/* <Button
                    className="bg-highlight text-navy-dark hover:bg-highlight/90"
                    asChild
                  >
                    <a href={project.liveUrl}>View Project</a>
                  </Button>
                  <Button
                    className="border border-highlight text-highlight bg-transparent hover:bg-highlight/10"
                    asChild
                  >
                    <a href={project.githubUrl}>GitHub Repo</a>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
