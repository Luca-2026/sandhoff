import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const Impressum = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">
              Rechtliches
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-muted-foreground">
                  Luca Sandhoff<br />
                  Sandhoff | IT- & Mediensysteme<br />
                  Marienforster Weg 2<br />
                  53343 Wachtberg
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Kontakt</h2>
                <p className="text-muted-foreground">
                  E-Mail: luca@sandhoff.org
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [Wird nach Anmeldung ergänzt]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-muted-foreground">
                  Luca Sandhoff<br />
                  Marienforster Weg 2<br />
                  53343 Wachtberg
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Streitschlichtung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
                  (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf 
                  diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 
                  10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte 
                  oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Haftung für Links
                </h2>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte 
                  wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                  keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
                  jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Urheberrecht</h2>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des 
                  Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
                  bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
