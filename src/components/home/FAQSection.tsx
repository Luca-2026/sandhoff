import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Was bedeutet ‚herstellerneutral'?",
    answer:
      "Wir sind an keinen Hersteller gebunden und empfehlen ausschließlich die Lösungen, die optimal zu Ihren Anforderungen und Ihrer bestehenden Infrastruktur passen. Das garantiert Ihnen objektive Beratung ohne Interessenskonflikte.",
  },
  {
    question: "Arbeiten Sie nur mit großen Unternehmen?",
    answer:
      "Nein, wir betreuen Projekte unterschiedlicher Größe – vom einzelnen Konferenzraum bis zum Multi-Room-Rollout mit über 20 Räumen. Entscheidend ist nicht die Unternehmensgröße, sondern die Komplexität der Anforderungen.",
  },
  {
    question: "Was kostet eine erste Beratung?",
    answer:
      "Das Erstgespräch zur Bedarfsanalyse ist kostenfrei. Erst wenn wir gemeinsam entscheiden, ein Projekt zu starten, erstellen wir ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die Dauer hängt vom Projektumfang ab. Ein einzelner Konferenzraum kann in 4-8 Wochen umgesetzt werden, größere Rollouts benötigen entsprechend mehr Zeit. Im Erstgespräch erstellen wir einen realistischen Zeitplan.",
  },
  {
    question: "Unterstützen Sie auch bei der Beschaffung?",
    answer:
      "Ja, wir begleiten den gesamten Beschaffungsprozess: Von der Erstellung herstellerneutraler Leistungsverzeichnisse über die Bewertung der Angebote bis zur finalen Vergabeempfehlung.",
  },
  {
    question: "Was umfasst der Managed Service?",
    answer:
      "Der Managed Service beinhaltet proaktives 24/7-Monitoring, First-Level-Support für Ihre Nutzer, regelmäßige System-Updates und quartalsweise Optimierungsberichte. So läuft Ihre Technik zuverlässig.",
  },
];

export function FAQSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu unserer Arbeitsweise und unseren Leistungen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50 scroll-hidden ${
                  accordionVisible ? "scroll-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                  <span className="text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
