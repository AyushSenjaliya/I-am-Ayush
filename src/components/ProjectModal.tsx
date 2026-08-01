import { X, ExternalLink, Github, Sparkles, CheckCircle, Server, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface DetailedProject {
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-md animate-fade-in">
      <div className="bg-navy border border-highlight/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-navy-dark/95 backdrop-blur-md px-6 py-4 border-b border-slate-dark/60 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <span className="text-highlight font-mono text-xs bg-highlight/10 px-2 py-1 rounded border border-highlight/20 flex items-center gap-1">
              <Sparkles size={12} /> Case Study Breakdown
            </span>
            <span className="text-slate text-xs font-mono">| {project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-light hover:text-white hover:bg-navy-light transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Banner */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-slate text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-dark/60 max-h-[280px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-dark/80 p-5 rounded-xl border border-slate-dark/60">
              <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                <Zap size={16} className="text-yellow-400" /> Challenge & Problem
              </h4>
              <p className="text-slate text-xs leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-navy-dark/80 p-5 rounded-xl border border-slate-dark/60">
              <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle size={16} className="text-highlight" /> Engineering Solution
              </h4>
              <p className="text-slate text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Highlights */}
          <div className="bg-navy-light/40 p-5 rounded-xl border border-slate-dark/60 space-y-3">
            <h4 className="text-white font-semibold text-sm flex items-center gap-2">
              <Server size={16} className="text-highlight" /> Architecture & Key Design Decisions
            </h4>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="text-slate text-xs flex items-start gap-2">
                  <span className="text-highlight font-mono font-bold text-xs mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Metrics */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-highlight" /> Quantifiable Impact & Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-navy-dark p-3 rounded-lg border border-highlight/20 text-xs text-highlight font-mono">
                  {metric}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-slate-light text-xs font-mono mb-2">TECHNOLOGY STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="bg-navy-light border border-slate-dark text-highlight text-xs font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-dark/60 flex flex-wrap gap-4 justify-end">
            <Button
              className="bg-highlight text-navy-dark hover:bg-highlight/90 font-semibold text-sm flex items-center gap-2"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              View Live Application <ExternalLink size={15} />
            </Button>
            <Button
              className="border border-slate-dark text-slate-light bg-navy-light/60 hover:bg-navy-light text-sm flex items-center gap-2"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github size={15} /> Repository
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
