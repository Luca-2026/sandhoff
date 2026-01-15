import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Monitor, 
  Layers, 
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle
} from "lucide-react";

const categories = [
  { id: "all", name: "Alle Projekte" },
  { id: "boardroom", name: "Boardroom" },
  { id: "schulung", name: "Schulung" },
  { id: "management", name: "Management" },
  { id: "multi-room", name: "Multi-Room" },
];

const projects = [
  {
    id: "aluminium-norf",
    company: "Aluminium Norf GmbH",
    category: "boardroom",
    categoryLabel: "Boardroom & Schulung",
    location: "Neuss",
    year: "2023",
    icon: Building2,
    heroImage: null, // Platzhalter
    shortDescription: "Modernisierung des Vorstandsbereichs und Aufbau eines vollausgestatteten Schulungsraums.",
    challenge: "Der bestehende Vorstandsbereich entsprach nicht mehr den Anforderungen an moderne hybride Meetings. Zusätzlich fehlte ein professioneller Schulungsraum für interne Weiterbildungen.",
    solution: "Komplettmodernisierung des Boardrooms mit Cisco-Videokonferenzsystem, Microsoft Teams-Integration und akustischer Optimierung. Parallel dazu Aufbau eines Schulungsraums mit interaktivem Display und Aufnahmemöglichkeit.",
    results: [
      "Nahtlose hybride Meetings mit internationalen Partnern",
      "Professioneller Schulungsraum für 20 Teilnehmer",
      "Intuitive Bedienung durch Mediensteuerung",
      "Deutlich verbesserte Audioqualität durch Akustikmaßnahmen",
    ],
    tags: ["Cisco", "MS Teams", "LED-Display", "Akustik"],
  },
  {
    id: "pfeifer-langen",
    company: "Pfeifer & Langen GmbH & Co. KG",
    category: "multi-room",
    categoryLabel: "Multi-Room Rollout",
    location: "Köln",
    year: "2023",
    icon: Monitor,
    heroImage: null, // Platzhalter
    shortDescription: "Standardisierte Ausstattung von über 20 Konferenzräumen inklusive einer 136\" LED-Wall.",
    challenge: "Die bestehende Konferenzraumausstattung war heterogen und veraltet. Nutzer beklagten eine uneinheitliche Bedienung und häufige technische Probleme bei Video-Meetings.",
    solution: "Entwicklung eines einheitlichen Raumstandards für alle Raumgrößen. Rollout über 20 Räume mit zentraler Managementplattform. Highlight: 136\" LED-Wall im Managementbereich für beeindruckende Präsentationen.",
    results: [
      "Einheitliche Nutzererfahrung in allen Räumen",
      "Zentrale Verwaltung und Monitoring aller Systeme",
      "136\" LED-Wall als Aushängeschild für Kundenbesuche",
      "Deutlich reduzierte Supportanfragen durch intuitive Bedienung",
    ],
    tags: ["20+ Räume", "LED-Wall", "Standardisierung", "Zentrale Verwaltung"],
  },
  {
    id: "gea-farm",
    company: "GEA Farm Technologies",
    category: "management",
    categoryLabel: "Management Room",
    location: "Bönen",
    year: "2022",
    icon: Users,
    heroImage: null, // Platzhalter
    shortDescription: "Konzeption und Umsetzung eines modernen Managementraums mit nahtloser UC-Integration.",
    challenge: "Das Management benötigte einen repräsentativen Raum für Präsentationen, Video-Meetings und strategische Workshops – mit höchsten Ansprüchen an Technik und Design.",
    solution: "Entwicklung eines Raumkonzepts mit nahtloser UC-Integration, hochwertiger Displaytechnik und professioneller Mediensteuerung. Besonderer Fokus auf Akustik und Beleuchtungsdesign.",
    results: [
      "Repräsentativer Raum für Kunden- und Investorenpräsentationen",
      "Nahtlose Integration aller gängigen UC-Plattformen",
      "Intuitive Steuerung per Touch-Panel",
      "Optimale Akustik für Verständlichkeit bei Videokonferenzen",
    ],
    tags: ["UC-Integration", "Akustik", "Mediensteuerung", "Premium-Design"],
  },
];

const Projekte = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Referenzen
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ausgewählte Projekte
            </h1>
            <p className="text-lg text-muted-foreground">
              Ein Einblick in realisierte Projekte – von einzelnen Boardrooms 
              bis zu unternehmensweiten Rollouts mit über 20 Räumen.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-y border-border sticky top-16 lg:top-20 z-40">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="transition-all"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-card border-border overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image Placeholder */}
                  <div className="aspect-video lg:aspect-auto bg-secondary flex items-center justify-center relative">
                    <project.icon className="h-24 w-24 text-muted-foreground/20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {project.categoryLabel}
                      </Badge>
                    </div>
                    <p className="absolute bottom-4 left-4 right-4 text-xs text-muted-foreground text-center">
                      Bildplatzhalter – Hier kommt ein Projektfoto
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {project.company}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {project.shortDescription}
                    </p>

                    {expandedProject === project.id ? (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Ausgangslage</h3>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Lösung</h3>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Ergebnis</h3>
                          <ul className="space-y-2">
                            {project.results.map((result) => (
                              <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedProject(null)}
                        >
                          Weniger anzeigen
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedProject(project.id)}
                        >
                          Details anzeigen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ähnliches Projekt geplant?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Lassen Sie uns über Ihr Vorhaben sprechen. Im kostenfreien Erstgespräch 
            analysieren wir Ihre Anforderungen und entwickeln erste Lösungsansätze.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Projektanfrage starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
