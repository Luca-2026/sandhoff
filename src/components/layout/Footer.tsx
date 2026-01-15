import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Projekte", href: "/projekte" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Sandhoff</span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  IT- & Mediensysteme
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Videokonferenz- & AV-Lösungen für moderne Arbeitswelten. 
              Herstellerunabhängige Fachplanung und IT-Integration.
            </p>
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
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3">
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
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
