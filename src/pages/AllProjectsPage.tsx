import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, ExternalLink, Github } from "lucide-react";
import { projectsData, ProjectItem } from "../data/projectsData";
import ProjectModal, { DetailedProject } from "../components/ProjectModal";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

const AllProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative antialiased">
      {/* Sticky Top Header */}
      <Header />

      <main className="pt-28 pb-20 max-w-[1080px] mx-auto px-6 space-y-12">
        {/* Back Link & Page Title */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="space-y-2">
            <div className="section-eyebrow">COMPLETE PORTFOLIO CATALOG</div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)]">
              All Engineering Projects ({projectsData.length})
            </h1>
            <p className="text-[var(--muted)] font-body text-base max-w-2xl">
              Explore deep engineering case studies covering autonomous multi-agent AI systems, high-concurrency Node.js backends, real-time telemetry, and e-commerce platforms.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="theme-card space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search projects or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--surface-2)] border border-[var(--line)] focus:border-[var(--gold)] rounded-lg pl-10 pr-4 py-2.5 text-xs font-mono text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)]"
              />
            </div>

            {/* Category Badges */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${selectedCategory === cat
                      ? "bg-[var(--gold)] text-[#0F1B1E] font-bold shadow-sm"
                      : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--text)] border border-[var(--line)]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="theme-card text-center py-16 space-y-3">
            <p className="font-mono text-sm text-[var(--muted)]">
              No projects found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-mono text-[var(--gold)] underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="theme-card hover:border-[var(--gold)] transition-all duration-300 cursor-pointer space-y-4 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[var(--gold)] tracking-wider">
                      {project.stackLabel}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--surface-2)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[var(--text)] group-hover:text-[var(--gold)] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--gold)] flex-shrink-0" />
                  </h3>

                  <p className="text-[var(--muted)] text-sm leading-relaxed font-body">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--line)] text-[var(--muted)] font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-1 text-xs font-mono text-[var(--gold)] font-semibold">
                    <span>Click to view case study breakdown</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactSection />
    </div>
  );
};

export default AllProjectsPage;
