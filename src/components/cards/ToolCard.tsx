import { ExternalLink } from "lucide-react";
import { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

const pricingStyle = {
  Free: "badge-green",
  Paid: "badge-red",
  Freemium: "badge-primary",
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group card-base p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-text-main group-hover:text-accent transition-colors mb-1">
            {tool.name}
          </h3>
          <span className="text-xs text-text-muted">{tool.category}</span>
        </div>
        <span className={pricingStyle[tool.pricing]}>{tool.pricing}</span>
      </div>

      <div className="mb-3">
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Best for</span>
        <p className="text-sm text-accent mt-1">{tool.bestFor}</p>
      </div>

      <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
      >
        Visit Tool
        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
