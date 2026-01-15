import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const partners = [
  { name: "Crestron", logo: "/assets/partners/crestron.png" },
  { name: "Q-Sys", logo: "/assets/partners/qsys.png" },
  { name: "Yealink", logo: "/assets/partners/yealink.png" },
  { name: "Shure", logo: "/assets/partners/shure.png" },
  { name: "Sennheiser", logo: "/assets/partners/sennheiser.png" },
  { name: "AVer", logo: "/assets/partners/aver.png" },
  { name: "Huddly", logo: "/assets/partners/huddly.png" },
  { name: "Nureva", logo: "/assets/partners/nureva.png" },
  { name: "Lightware", logo: "/assets/partners/lightware.png" },
  { name: "Purelink", logo: "/assets/partners/purelink.png" },
  { name: "Iiyama", logo: "/assets/partners/iiyama.png" },
  { name: "Samsung", logo: "/assets/partners/samsung.png" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-background rounded-xl border border-border p-6 flex items-center justify-center aspect-[3/2] card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Placeholder with name - replace with actual logos */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              </div>
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
