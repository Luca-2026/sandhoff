import { MessageSquare, Search, FileCheck, Wrench, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Bedarf klären",
    description: "Im Erstgespräch analysieren wir Ihre Anforderungen, Nutzungsszenarien und Rahmenbedingungen.",
  },
  {
    icon: Search,
    number: "02",
    title: "Konzept entwickeln",
    description: "Ich erstelle ein maßgeschneidertes Konzept mit Testsystemen und Wirtschaftlichkeitsbetrachtung.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Ausschreibung begleiten",
    description: "Herstellerneutrale Leistungsverzeichnisse und fundierte Vergabeempfehlungen.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Integration umsetzen",
    description: "Koordination der Umsetzung, Qualitätssicherung und nahtlose IT-Integration.",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Betrieb sichern",
    description: "Proaktives Monitoring, Support und kontinuierliche Optimierung als Managed Service.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            So arbeiten wir zusammen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein strukturierter Prozess für erfolgreiche Projekte – von der ersten Idee 
            bis zum laufenden Betrieb.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Number Badge */}
                <span className="absolute top-0 right-1/2 translate-x-8 -translate-y-1 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
