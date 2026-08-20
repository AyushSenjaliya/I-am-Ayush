import { X, ExternalLink, Github, Sparkles, CheckCircle, Server, ShieldCheck, Zap, Layers, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DetailedProject {
  id?: string;
  title: string;
  category: string;
  stackLabel?: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  type?: string;
  role?: string;
  status?: string;
  whyImportant?: string;
  coreWorkflow?: string[];
  contribution?: string[];
  keyAreas?: string[];
}

interface ProjectModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F1B1E]/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-[var(--text)]">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 bg-[#0F1B1E]/95 backdrop-blur-md px-6 py-4 border-b border-[var(--line)] flex justify-between items-center z-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[var(--gold)] font-mono text-xs bg-[var(--gold)]/10 px-2.5 py-1 rounded border border-[var(--gold)]/20 flex items-center gap-1.5 font-semibold">
              <Sparkles size={13} /> Case Study Breakdown
            </span>
            <span className="text-[var(--muted)] text-xs font-mono">| {project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title, Badges & Summary */}
          <div className="space-y-3">
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {project.status && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30">
                  {project.status}
                </span>
              )}
              {project.role && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[var(--surface-2)] text-[var(--text)] border border-[var(--line)] flex items-center gap-1">
                  <Briefcase size={11} className="text-[var(--gold)]" /> {project.role}
                </span>
              )}
              {project.type && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--line)]">
                  {project.type}
                </span>
              )}
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)] leading-tight">
              {project.title}
            </h2>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed font-body">
              {project.summary}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative rounded-xl overflow-hidden border border-[var(--line)] max-h-[260px] bg-[var(--surface-2)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="theme-card-nested space-y-2">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <Zap size={16} className="text-[var(--gold)]" /> Challenge & Problem
              </h4>
              <p className="text-[var(--muted)] text-xs leading-relaxed font-body">
                {project.problem}
              </p>
            </div>

            <div className="theme-card-nested space-y-2">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <CheckCircle size={16} className="text-[var(--gold)]" /> Engineering Solution
              </h4>
              <p className="text-[var(--muted)] text-xs leading-relaxed font-body">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Core Workflow / Key Focus Areas (if available) */}
          {(project.coreWorkflow || project.keyAreas) && (
            <div className="theme-card-nested space-y-3">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <Layers size={16} className="text-[var(--gold)]" />
                {project.coreWorkflow ? "Core Workflow & Operations" : "Key Technical Focus Areas"}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(project.coreWorkflow || project.keyAreas)?.map((item, idx) => (
                  <li key={idx} className="text-[var(--muted)] text-xs font-body flex items-start gap-2 bg-[var(--surface)] p-2 rounded border border-[var(--line)]">
                    <span className="text-[var(--gold)] font-mono font-bold text-xs mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contribution Highlights (if available) */}
          {project.contribution && project.contribution.length > 0 && (
            <div className="theme-card-nested space-y-3">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <Briefcase size={16} className="text-[var(--gold)]" /> Developer Contribution & Value
              </h4>
              <ul className="space-y-2">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="text-[var(--muted)] text-xs font-body flex items-start gap-2">
                    <span className="text-[var(--gold)] font-mono font-bold text-xs mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture & Technical Decisions */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="theme-card-nested space-y-3">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <Server size={16} className="text-[var(--gold)]" /> Architecture & Technical Decisions
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="text-[var(--muted)] text-xs font-body flex items-start gap-2">
                    <span className="text-[var(--gold)] font-mono font-bold text-xs mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-[var(--text)] font-display font-bold text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--gold)]" /> Quantifiable Impact & System Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[var(--surface-2)] p-3 rounded-lg border border-[var(--gold)]/20 text-xs text-[var(--gold)] font-mono">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why It's Important Callout */}
          {project.whyImportant && (
            <div className="p-4 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 space-y-2">
              <h4 className="text-[var(--gold)] font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                <Star size={14} className="fill-[var(--gold)]" /> Why It Matters / Interview Highlight
              </h4>
              <p className="text-[var(--text)] text-xs leading-relaxed font-body">
                {project.whyImportant}
              </p>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <h4 className="text-[var(--muted)] text-xs font-mono tracking-wider uppercase">TECHNOLOGY STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--line)] text-[var(--gold)] font-mono text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-3 justify-end">
            <Button
              className="bg-[var(--gold)] text-[#0F1B1E] hover:bg-[var(--gold)]/90 font-mono font-bold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              View Live Application <ExternalLink size={14} />
            </Button>
            <Button
              className="border border-[var(--line)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] bg-[var(--surface-2)] font-mono font-semibold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github size={14} /> Source Code
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
