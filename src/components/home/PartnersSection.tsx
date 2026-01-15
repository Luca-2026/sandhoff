import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const partners = [
  { name: "Crestron", logo: "/assets/partners/crestron.svg", url: "https://www.crestron.com", hasLogo: true },
  { name: "Q-Sys", logo: "/assets/partners/qsys.jpg", url: "https://www.qsys.com", hasLogo: true },
  { name: "Shure", logo: "/assets/partners/shure.png", url: "https://www.shure.com", hasLogo: true },
  { name: "Sennheiser", logo: "/assets/partners/sennheiser.svg", url: "https://www.sennheiser.com", hasLogo: true },
  { name: "Nureva", logo: "/assets/partners/nureva.png", url: "https://www.nureva.com", hasLogo: true },
  { name: "Barco", logo: "/assets/partners/barco.png", url: "https://www.barco.com", hasLogo: true },
  { name: "Yealink", logo: "/assets/partners/yealink.png", url: "https://www.yealink.com", hasLogo: true },
  { name: "Lightware", logo: "/assets/partners/lightware.jpg", url: "https://www.lightware.com", hasLogo: true },
  { name: "Purelink", logo: "/assets/partners/purelink.png", url: "https://www.purelink.de", hasLogo: true },
  { name: "Iiyama", logo: "/assets/partners/iiyama.png", url: "https://www.iiyama.com", hasLogo: true },
  { name: "Samsung", logo: "/assets/partners/samsung.png", url: "https://www.samsung.com", hasLogo: true },
  { name: "AVer", logo: null, url: "https://www.aver.com", hasLogo: false },
  { name: "Huddly", logo: null, url: "https://www.huddly.com", hasLogo: false },
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
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background rounded-xl border border-border p-4 lg:p-6 flex items-center justify-center min-h-[80px] lg:min-h-[100px] card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {partner.hasLogo && partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-8 lg:max-h-10 w-auto max-w-[90%] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              )}
            </a>
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
