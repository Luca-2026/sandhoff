import { Link } from "react-router-dom";
import { ArrowRight, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Bereit für Ihre moderne{" "}
            <span className="gradient-text">Arbeitswelt</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Starten Sie jetzt Ihre Projektanfrage – unverbindlich und kostenfrei. 
            Laden Sie Grundrisse oder bestehende Planungen direkt hoch und 
            erhalten Sie eine fundierte Ersteinschätzung.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Upload className="h-4 w-4 text-primary" />
              Grundrisse hochladen
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              Kostenfreies Erstgespräch
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-glow text-base px-8">
              <Link to="/projektanfrage">
                Projektanfrage starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/kontakt">
                Direkt kontaktieren
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
