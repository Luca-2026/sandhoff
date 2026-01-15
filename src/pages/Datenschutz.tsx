import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">
              Rechtliches
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Allgemeine Hinweise
                </h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
                  Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich 
                  identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-muted-foreground">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-muted-foreground mt-4">
                  Luca Sandhoff<br />
                  Sandhoff | IT- & Mediensysteme<br />
                  Marienforster Weg 2<br />
                  53343 Wachtberg<br />
                  <br />
                  E-Mail: luca@sandhoff.org
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-lg font-medium text-foreground mb-2 mt-6">Kontaktformular</h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre 
                  Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
                  Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                  Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne 
                  Ihre Einwilligung weiter.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2 mt-6">Projektanfrage-Formular</h3>
                <p className="text-muted-foreground">
                  Bei Nutzung unseres Projektanfrage-Formulars werden die eingegebenen 
                  Daten (Kontaktdaten, Projektinformationen, hochgeladene Dateien) zur 
                  Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden nach Abschluss 
                  der Anfrage bzw. des Projekts gemäß den gesetzlichen Aufbewahrungsfristen 
                  gelöscht.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2 mt-6">Datei-Uploads</h3>
                <p className="text-muted-foreground">
                  Hochgeladene Dateien (z.B. Grundrisse, Planungsunterlagen) werden 
                  ausschließlich zur Bearbeitung Ihrer Projektanfrage verwendet und 
                  sicher gespeichert. Die Dateien werden nach Abschluss der Anfrage 
                  bzw. nach Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-muted-foreground">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
                  <li>Die Löschung Ihrer Daten zu verlangen</li>
                  <li>Die Einschränkung der Verarbeitung zu verlangen</li>
                  <li>Der Verarbeitung zu widersprechen</li>
                  <li>Die Datenübertragbarkeit zu verlangen</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  5. Hosting
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die 
                  auf dieser Website erfasst werden, werden auf den Servern des Hosters 
                  gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, 
                  Meta- und Kommunikationsdaten, Websitezugriffe und sonstige Daten handeln.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  6. SSL-/TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                  vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte 
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                  „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer 
                  Browserzeile.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  7. Terminbuchung
                </h2>
                <p className="text-muted-foreground">
                  Für die Terminbuchung nutzen wir einen externen Dienst (z.B. Calendly 
                  oder Cal.com). Bei Nutzung dieses Dienstes gelten zusätzlich dessen 
                  Datenschutzbestimmungen. Die im Rahmen der Terminbuchung erhobenen 
                  Daten werden ausschließlich zur Durchführung und Organisation des 
                  gebuchten Termins verwendet.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  8. Änderungen dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie 
                  stets den aktuellen rechtlichen Anforderungen entspricht oder um 
                  Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch 
                  gilt dann die neue Datenschutzerklärung.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
