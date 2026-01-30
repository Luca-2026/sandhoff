import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";

const footerLinks = {
  leistungen: [
    { name: "Fachplanung & Beratung", href: "/leistungen#konzeption" },
    { name: "Ausschreibung & Vergabe", href: "/leistungen#fachplanung" },
    { name: "IT-Integration & Betrieb", href: "/leistungen#integration" },
    { name: "Finanzierung", href: "/finanzierung" },
  ],
  loesungen: [
    { name: "Konferenzräume", href: "/loesungen#konferenzraum-detail" },
    { name: "Auditorien", href: "/loesungen#auditorium-detail" },
    { name: "Schulungsräume", href: "/loesungen#bildung-detail" },
    { name: "Digital Signage", href: "/loesungen#empfang-detail" },
  ],
  navigation: [
    { name: "Startseite", href: "/" },
    { name: "Technologien", href: "/technologien" },
    { name: "Projekte", href: "/projekte" },
    { name: "News", href: "/news" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/assets/sandhoff-logo.jpg" 
                alt="Sandhoff IT- & Mediensysteme" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fachplaner für Medientechnik in NRW. 
              Herstellerneutrale AV-Beratung und Systemintegration.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lösungen */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Lösungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.loesungen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luca@sandhoff.org"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  luca@sandhoff.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Marienforster Weg 2<br />
                  53343 Wachtberg
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/luca-sandhoff-5a332017a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profil von Luca Sandhoff"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Sandhoff | IT- & Mediensysteme. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
