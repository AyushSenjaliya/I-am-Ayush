import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectModal, { DetailedProject } from "./ProjectModal";
import { projectsData, ProjectItem } from "../data/projectsData";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  // Show top featured projects on homepage
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="section-eyebrow">PORTFOLIO CASE STUDIES</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--gold)] hover:text-[var(--gold)]/80 transition-colors border border-[var(--line)] hover:border-[var(--gold)] px-4 py-2.5 rounded-lg bg-[var(--surface-2)] shadow-sm"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="theme-card hover:border-[var(--gold)] transition-all duration-300 cursor-pointer space-y-4 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Tech Stack Gold Label */}
                <div className="font-mono text-xs font-bold text-[var(--gold)] tracking-wider">
                  {project.stackLabel}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[var(--text)] group-hover:text-[var(--gold)] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--gold)]" />
                </h3>

                {/* Description */}
                <p className="text-[var(--muted)] text-sm leading-relaxed font-body">
                  {project.summary}
                </p>
              </div>

              {/* Tag Chips */}
              <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--line)] text-[var(--muted)] font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-1 rounded bg-[var(--surface-2)] text-[var(--gold)] font-mono text-[11px]">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout / Redirect CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[var(--surface)] text-[var(--gold)] hover:text-[#0F1B1E] border border-[var(--gold)] hover:bg-[var(--gold)] font-mono text-xs font-bold px-6 py-3.5 rounded-lg transition-all shadow-md hover:-translate-y-0.5"
          >
            <span>Browse All Engineering Case Studies ({projectsData.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
