import { Download, FileText, CheckSquare, BookOpen, Layers } from "lucide-react";
import { Template } from "@/data/templates";

interface TemplateCardProps {
  template: Template;
}

const typeIcon = {
  Checklist: CheckSquare,
  Template: FileText,
  Guide: BookOpen,
  "Prompt Pack": Layers,
  Worksheet: FileText,
};

const typeStyle = {
  Checklist: "badge-green",
  Template: "badge-primary",
  Guide: "badge-gold",
  "Prompt Pack": "bg-purple-500/10 text-purple-400 border border-purple-500/20 badge",
  Worksheet: "badge-muted",
};

export default function TemplateCard({ template }: TemplateCardProps) {
  const Icon = typeIcon[template.type] || FileText;

  return (
    <div className="group card-base p-6 flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div>
          <span className={typeStyle[template.type]}>{template.type}</span>
          <p className="text-xs text-text-muted mt-1">{template.format}</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold font-display text-text-main group-hover:text-accent transition-colors mb-2">
        {template.title}
      </h3>

      <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
        {template.description}
      </p>

      <button
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors w-fit"
        type="button"
        aria-label={`Download ${template.title}`}
      >
        <Download className="w-3.5 h-3.5" />
        Download Free
      </button>
    </div>
  );
}
