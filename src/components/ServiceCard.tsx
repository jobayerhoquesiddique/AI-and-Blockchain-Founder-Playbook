import { Service } from "@/data/services";
import { useState } from "react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="gradient-card rounded-lg border border-border p-5 card-shadow hover:glow-border transition-all duration-300 cursor-pointer group"
      style={{ animationDelay: `${index * 40}ms` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{service.emoji}</span>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm">
          {service.priceRange}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
          {service.category}
        </span>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
          <div className="mb-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
              📦 Deliverables
            </h4>
            <ul className="space-y-1">
              {service.deliverables.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
              🎯 Built For
            </h4>
            <p className="text-sm text-muted-foreground">{service.targetAudience}</p>
          </div>
        </div>
      )}

      <div className="mt-3 text-xs text-muted-foreground/50 text-right font-mono">
        {expanded ? "▲ collapse" : "▼ details"}
      </div>
    </div>
  );
};

export default ServiceCard;
