import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const references = [
  {
    id: "aluminium-norf",
    company: "Aluminium Norf GmbH",
    category: "Boardroom & Schulung",
    description: "Modernisierung des Vorstandsbereichs und Aufbau eines vollausgestatteten Schulungsraums mit hybrider Meeting-Fähigkeit.",
    icon: Building2,
    tags: ["Cisco", "MS Teams", "LED-Display"],
  },
  {
    id: "pfeifer-langen",
    company: "Pfeifer & Langen",
    category: "Multi-Room Rollout",
    description: "Standardisierte Ausstattung von über 20 Konferenzräumen inklusive einer 136\" LED-Wall für das Management.",
    icon: Monitor,
    tags: ["20+ Räume", "LED-Wall", "Standardisierung"],
  },
  {
    id: "gea-farm",
    company: "GEA Farm Technologies",
    category: "Management Room",
    description: "Konzeption und Umsetzung eines modernen Managementraums mit nahtloser UC-Integration.",
    icon: Users,
    tags: ["UC-Integration", "Akustik", "Mediensteuerung"],
  },
];

export function ReferencesTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ausgewählte Referenzen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein Auszug aus meinen realisierten Projekten – von Boardrooms bis Multi-Room-Rollouts.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {references.map((ref, index) => (
            <Card
              key={ref.id}
              className="group bg-card border-border card-hover animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <ref.icon className="h-16 w-16 text-muted-foreground/30" />
                <div className="absolute top-3 left-3 z-20">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {ref.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {ref.company}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {ref.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {ref.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/projekte">
              Alle Projekte ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
