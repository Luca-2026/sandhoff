import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Download } from "lucide-react";

interface ArticleData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const articlesData: Record<string, ArticleData> = {
  "ise-2026-barcelona": {
    slug: "ise-2026-barcelona",
    title: "Neues aus der AV-Welt von der ISE 2026 in Barcelona",
    metaDescription: "Highlights und Innovationen von der ISE 2026 in Barcelona – die weltweit größte Fachmesse für professionelle AV-Technik. Trends, Produktneuheiten und Eindrücke.",
    keywords: "ISE 2026, Barcelona, AV Messe, Medientechnik Trends, ProAV, Integrated Systems Europe",
    date: "2026-02-03",
    readTime: "5 Min.",
    category: "Messe",
    content: (
      <div className="prose prose-lg max-w-none">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Fira Barcelona, Gran Via</span>
          </div>
          <p className="text-muted-foreground mb-0">
            <strong>Datum:</strong> 3. – 6. Februar 2026<br />
            <strong>Ort:</strong> Barcelona, Spanien
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die ISE 2026 – Weltleitmesse für AV und Systemintegration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die Integrated Systems Europe (ISE) ist die weltweit größte Fachmesse für professionelle 
          audiovisuelle Technik und Systemintegration. Jährlich versammeln sich hier die führenden 
          Hersteller, Integratoren und Experten der Branche, um die neuesten Innovationen zu präsentieren 
          und sich über aktuelle Trends auszutauschen.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Unsere Highlights – Coming Soon
        </h2>
        <Card className="border-dashed border-2 border-muted-foreground/30 bg-muted/30">
          <CardContent className="p-8 text-center">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Inhalte werden in Kürze ergänzt
            </h3>
            <p className="text-muted-foreground">
              Nach unserem Besuch auf der ISE 2026 werden wir hier ausführlich über die 
              wichtigsten Neuheiten, Trends und unsere persönlichen Eindrücke berichten.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Was Sie erwarten können
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Produktneuheiten:</strong> Die spannendsten Launches und Ankündigungen der führenden Hersteller</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Technologie-Trends:</strong> KI in der AV-Technik, Cloud-basierte Lösungen, Nachhaltigkeit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Collaboration-Lösungen:</strong> Neue Ansätze für hybride Meetings und moderne Arbeitsplätze</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Display-Technologien:</strong> LED, MicroLED, OLED – die Zukunft der Visualisierung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Audio-Innovationen:</strong> Neue Lösungen für Konferenzräume und Auditorien</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-card border rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Mehr zur ISE
          </h3>
          <p className="text-muted-foreground mb-4">
            Offizielle Website der Integrated Systems Europe:
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.iseurope.org" target="_blank" rel="noopener noreferrer">
              iseurope.org besuchen
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    ),
  },
  "huddly-speaker-mode-ki-kamera": {
    slug: "huddly-speaker-mode-ki-kamera",
    title: "Huddly Speaker Mode: KI-Kameras, die den Sprecher im Blick behalten",
    metaDescription: "Huddly Kameras mit Speaker Mode erkennen automatisch den aktiven Sprecher und passen das Bild dynamisch an. Erfahren Sie mehr über die C1 Videobar und KI-gesteuerte Kamerasysteme.",
    keywords: "Huddly Speaker Mode, Huddly C1, KI Kamera, Videokonferenz Kamera, AI Tracking, Huddly L1, Huddly Crew",
    date: "2026-01-26",
    readTime: "4 Min.",
    category: "Produktnews",
    content: (
      <div className="prose prose-lg max-w-none">
        {/* Video Header */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8 bg-black">
          <video 
            src="https://stream.mux.com/7sXxfory8L02Y8tU2Ih02WajBQWENTUAnBcpQiKag021Dw.m3u8?min_resolution=720p"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Intelligentes Framing für natürliche Meetings
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Mit dem <strong>Huddly Speaker Mode</strong> sehen Sie jederzeit, wer spricht – unabhängig vom Platz 
          im Raum. Die KI erkennt automatisch den aktiven Sprecher und passt das Bild dynamisch an. 
          Sobald das Gespräch weitergeht, folgt das Bild automatisch.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Als wäre immer ein Regisseur am Werk</strong>, der den Sprecher im Blick hält, damit Sie 
          sich ganz auf den Inhalt konzentrieren können.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die Huddly C1 Videobar – KI-Power für kleine und mittlere Räume
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die <strong>Huddly C1</strong> ist eine AI-gesteuerte Videobar, die erstklassige Videoqualität mit 
          innovativer Audio-Technologie verbindet. Mit einem ultra-weiten <strong>150°-Objektiv</strong> wird 
          jeder Platz im Raum erfasst – niemand sitzt außerhalb des Bildes.
        </p>
        
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>4K-Sensor</strong> mit intelligenter Bildverarbeitung für gestochen scharfe Videos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Huddly Intelligence:</strong> Onboard-KI für dynamisches Framing von Einzelpersonen und Gruppen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Premium-Audio:</strong> Integrierte Mikrofone und Lautsprecher für kristallklare Kommunikation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Modulares Design:</strong> Erweiterbar für zukünftige Anforderungen</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Huddly Crew – Multi-Kamera-System mit KI-Regie
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Für größere Räume bietet <strong>Huddly Crew</strong> ein revolutionäres Multi-Kamera-System. 
          Die onboard KI übernimmt die Rolle eines virtuellen Regisseurs und wählt automatisch die beste 
          Kameraperspektive – ob Sprecherfokus oder Gruppenansicht.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Mit der neuesten <strong>3D Spatial Awareness</strong> Technologie erstellt das System eine 
          dreidimensionale Karte des Raums für noch präziseres und natürlicheres Framing.
        </p>

        {/* YouTube Embed */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Speaker Mode in Aktion
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L-BYXom1cxw"
            title="Huddly Speaker Mode Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-0"
          />
        </div>

        {/* Partner Box */}
        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            🎁 Exklusiv als Huddly Partner
          </h3>
          <p className="text-muted-foreground mb-4">
            Als offizieller <strong>Huddly Partner</strong> bieten wir Ihnen:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Sonderpreise</strong> für Huddly Kameras und Zubehör</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Kostenlose Teststellungen</strong> zum Ausprobieren in Ihren Räumen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Fachberatung</strong> zur optimalen Kamera-Auswahl und Platzierung</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/projektanfrage">
                Teststellung anfragen
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/assets/docs/huddly-c1-datenblatt.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Datenblatt C1 (PDF)
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.huddly.com" target="_blank" rel="noopener noreferrer">
                Huddly Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  "hochwertige-technik-trotzdem-chaos": {
    slug: "hochwertige-technik-trotzdem-chaos",
    title: "Hochwertige Technik – trotzdem Chaos im Konferenzraum?",
    metaDescription: "Warum erstklassige Technik allein nicht reicht. Erfahren Sie, wie durchdachte Systemintegration den Unterschied macht.",
    keywords: "Konferenzraum Technik, Mediensteuerung, AV Integration, Meeting Raum, Systemintegration",
    date: "2026-01-28",
    readTime: "3 Min.",
    category: "Praxistipp",
    content: (
      <div className="prose prose-lg max-w-none">
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src="/assets/news/konferenzraum-chaos.jpg" 
            alt="Chaos im Konferenzraum"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Technik vorhanden – trotzdem Chaos?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Viele Konferenzräume sind mit erstklassiger Technik ausgestattet. Doch warum fühlt sich 
          der Start eines Meetings trotzdem oft an wie eine technische Herausforderung?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Fünf Fernbedienungen</strong>, ein Kabelsalat unter dem Tisch und die ewige Frage: 
          <em>Welcher Eingang war nochmal der richtige?</em>
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Das Problem: Fehlende Integration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die beste Technik nützt wenig, wenn sie nicht aufeinander abgestimmt ist. Einzelne 
          Komponenten – Display, Kamera, Mikrofon, Mediensteuerung – müssen als 
          <strong> Gesamtsystem</strong> funktionieren.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zeitverlust:</strong> Jedes Meeting beginnt mit technischen Problemen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Frustration:</strong> Mitarbeiter meiden den Raum oder nutzen private Geräte</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Unprofessionalität:</strong> Externe Teilnehmer erleben holprige Meetings</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die Lösung: Durchdachte Systemintegration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Bei <strong>Sandhoff | IT- & Mediensysteme</strong> sorgen wir dafür, dass Ihre Technik 
          zusammenarbeitet. Ein Knopfdruck startet das Meeting – Display, Beleuchtung und 
          Videokonferenz sind sofort bereit.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>One-Touch-Join:</strong> Meeting starten mit einem einzigen Klick</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intuitive Bedienung:</strong> Jeder kann die Technik nutzen – ohne Schulung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zukunftssicher:</strong> Modulare Systeme, die mitwachsen</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Lassen Sie uns Ordnung schaffen
          </h3>
          <p className="text-muted-foreground mb-4">
            Ich bin gerne Ihr Ansprechpartner, wenn Ihr Konferenzraum endlich so funktionieren soll, 
            wie er sollte.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    ),
  },
  "man-hoert-nichts-schon-wieder": {
    slug: "man-hoert-nichts-schon-wieder",
    title: "Man hört nichts – schon wieder",
    metaDescription: "Audio-Probleme in Konferenzräumen vermeiden. Erfahren Sie, wie professionelle Audioplanung für klare Kommunikation sorgt.",
    keywords: "Audio Probleme, Konferenzraum Audio, Mikrofon Platzierung, Raumakustik, Meeting Audio",
    date: "2026-01-25",
    readTime: "4 Min.",
    category: "Praxistipp",
    content: (
      <div className="prose prose-lg max-w-none">
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src="/assets/news/audio-probleme.jpg" 
            alt="Audio-Probleme im Meeting"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Ein alltägliches Szenario
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Ein Meeting startet. Alle sind da. Und trotzdem geht es nicht los, weil 
          <strong> niemand etwas hört</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Audio-Probleme gehören zu den häufigsten Störfaktoren in Konferenzräumen. 
          Das Frustrierende: Die Technik funktioniert – nur nicht zusammen.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die häufigsten Ursachen
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Falsche Mikrofonplatzierung:</strong> Zu weit vom Sprecher entfernt oder ungünstig positioniert</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Schlechte Raumakustik:</strong> Hall, Echo und Hintergrundgeräusche stören die Verständlichkeit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Nicht abgestimmte Komponenten:</strong> Mikrofon, Verstärker und Lautsprecher arbeiten nicht optimal zusammen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Fehlende Echounterdrückung:</strong> Rückkopplungen und doppelte Stimmen verwirren Teilnehmer</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Was das kostet
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Schlechte Audioqualität ist nicht nur nervig – sie hat konkrete Auswirkungen:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zeitverlust:</strong> Die ersten Minuten gehen für Troubleshooting drauf</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Konzentrationsverlust:</strong> Wer sich anstrengen muss zu hören, ermüdet schneller</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Unprofessioneller Eindruck:</strong> Externe Partner erleben ein holpriges Meeting</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Klare Kommunikation – so geht's
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Bei <strong>Sandhoff | IT- & Mediensysteme</strong> sorgen wir dafür, dass Sprache klar, 
          verständlich und zuverlässig übertragen wird:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Raumanalyse:</strong> Wir bewerten Akustik und identifizieren Problemzonen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Mikrofonkonzept:</strong> Die richtige Technologie am richtigen Ort</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Systemabstimmung:</strong> Alle Komponenten arbeiten nahtlos zusammen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Akustikoptimierung:</strong> Falls nötig, Empfehlungen für bauliche Maßnahmen</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Kommunikation, die funktioniert
          </h3>
          <p className="text-muted-foreground mb-4">
            Ich bin gerne Ihr Ansprechpartner, wenn Kommunikation wieder funktionieren soll.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    ),
  },
};

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <Layout>
      <SEOHead
        title={`${article.title} – News`}
        description={article.metaDescription}
        keywords={article.keywords}
        canonical={`/news/${article.slug}`}
      />

      {/* Article Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <Badge>{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} Lesezeit
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {article.content}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Haben Sie Fragen zu AV-Technologien?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Wir beraten Sie gerne zu den neuesten Lösungen für Ihre Anforderungen.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Projekt anfragen
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
