import { Shield, Euro, Settings, BarChart3, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const trustPoints = [
  {
    icon: Shield,
    title: "8+ Jahre Erfahrung",
    description: "Expertise in AV & UC",
  },
  {
    icon: Euro,
    title: "Transparente Kosten",
    description: "Keine versteckten Gebühren",
  },
  {
    icon: Settings,
    title: "IT-Integration",
    description: "Nahtlose Einbindung",
  },
  {
    icon: BarChart3,
    title: "Proaktives Monitoring",
    description: "24/7 Systemüberwachung",
  },
  {
    icon: Headphones,
    title: "Persönlicher Support",
    description: "Direkter Ansprechpartner",
  },
];

export function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className={`flex flex-col items-center text-center p-4 scroll-hidden ${
                isVisible ? "scroll-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {point.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
