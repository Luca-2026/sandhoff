import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Thomas Bergmann",
    position: "IT-Leiter",
    company: "Mittelständisches Maschinenbauunternehmen",
    rating: 5,
    text: "Die Zusammenarbeit mit Luca Sandhoff war von Anfang an professionell und zielführend. Er hat unsere Anforderungen genau verstanden und eine maßgeschneiderte Lösung für unsere Konferenzräume entwickelt. Die Installation verlief reibungslos und die Schulung war praxisnah.",
  },
  {
    name: "Dr. Sandra Müller",
    position: "Geschäftsführerin",
    company: "Beratungsgesellschaft",
    rating: 5,
    text: "Nach Jahren mit unzuverlässiger Videokonferenztechnik haben wir endlich eine Lösung, die einfach funktioniert. Die herstellerunabhängige Beratung hat uns geholfen, die richtige Technik für unser Budget zu finden. Absolute Empfehlung!",
  },
  {
    name: "Michael Hartmann",
    position: "Facility Manager",
    company: "Logistikunternehmen",
    rating: 5,
    text: "Von der Planung bis zur Umsetzung alles aus einer Hand. Besonders beeindruckt hat mich die Transparenz bei den Kosten und die ehrliche Beratung. Keine versteckten Gebühren, keine überteuerten Produkte – genau das, was wir gesucht haben.",
  },
];

export const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfahren Sie, wie Unternehmen von professioneller Medientechnik-Beratung profitieren
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover:shadow-lg transition-shadow duration-300 relative overflow-hidden scroll-hidden-right ${
                cardsVisible ? "scroll-visible-x" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicator */}
        <div 
          ref={trustRef}
          className={`mt-12 text-center scroll-hidden-scale ${
            trustVisible ? "scroll-visible-scale" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Durchschnittliche Bewertung: <span className="font-semibold text-foreground">5.0</span> von 5 Sternen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
