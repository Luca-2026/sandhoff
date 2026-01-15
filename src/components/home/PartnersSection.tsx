import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const partners = [
  { name: "Shure", logo: "/assets/partners/shure.png", hasLogo: true },
  { name: "Sennheiser", logo: "/assets/partners/sennheiser.svg", hasLogo: true },
  { name: "Nureva", logo: "/assets/partners/nureva.png", hasLogo: true },
  { name: "Barco", logo: "/assets/partners/barco.png", hasLogo: true },
  { name: "Yealink", logo: "/assets/partners/yealink.png", hasLogo: true },
  { name: "Lightware", logo: "/assets/partners/lightware.jpg", hasLogo: true },
  { name: "Purelink", logo: "/assets/partners/purelink.png", hasLogo: true },
  { name: "Iiyama", logo: "/assets/partners/iiyama.png", hasLogo: true },
  { name: "Samsung", logo: "/assets/partners/samsung.png", hasLogo: true },
  { name: "Crestron", logo: null, hasLogo: false },
  { name: "Q-Sys", logo: null, hasLogo: false },
  { name: "AVer", logo: null, hasLogo: false },
  { name: "Huddly", logo: null, hasLogo: false },
];

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-6">
            <Award className="h-3 w-3 mr-1" />
            Zertifizierter Partner
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Technologiepartner
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir arbeiten mit führenden Herstellern der AV/UC-Branche zusammen und verfügen 
            über Direktkontakte sowie offizielle Zertifizierungen. Das bedeutet für Sie: 
            Schneller Support, fundierte Beratung und Zugang zu den neuesten Technologien.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-background rounded-xl border border-border p-4 lg:p-6 flex items-center justify-center min-h-[80px] lg:min-h-[100px] card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {partner.hasLogo && partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-10 lg:max-h-12 w-auto max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Certification Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <Award className="h-4 w-4 inline-block mr-1 text-primary" />
            Zertifiziert und autorisierter Partner für alle aufgeführten Hersteller
          </p>
        </div>
      </div>
    </section>
  );
}
