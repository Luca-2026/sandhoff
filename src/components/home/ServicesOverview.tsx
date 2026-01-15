import { Link } from "react-router-dom";
import { Lightbulb, FileText, Monitor, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Lightbulb,
    title: "Konzeption & Beratung",
    description:
      "Bedarfsanalyse, Nutzungskonzepte und Wirtschaftlichkeitsbetrachtungen. Ich entwickle passgenaue Lösungen für Ihre Anforderungen.",
    features: ["Bedarfsanalyse", "Testsysteme", "Nutzungskonzepte"],
  },
  {
    icon: FileText,
    title: "Fachplanung & Ausschreibung",
    description:
      "Herstellerneutrale Leistungsverzeichnisse, Bewertungskriterien und Vergabebegleitung für eine fundierte Beschaffung.",
    features: ["Leistungsverzeichnisse", "Bewertungsmatrizen", "Vergabebegleitung"],
  },
  {
    icon: Monitor,
    title: "IT-Integration & Betrieb",
    description:
      "Proaktives Monitoring, User-Support und kontinuierliche Optimierung Ihrer Medientechnik – als Managed Service.",
    features: ["Monitoring", "First-Level-Support", "Managed Rooms"],
  },
];

export function ServicesOverview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der ersten Idee bis zum laufenden Betrieb – wir begleiten Ihr Projekt 
            in allen Phasen mit unserer Expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group bg-card border-border card-hover scroll-hidden ${
                cardsVisible ? "scroll-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 scroll-hidden-scale ${
            ctaVisible ? "scroll-visible-scale" : ""
          }`}
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/leistungen">
              Alle Leistungen im Detail
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
