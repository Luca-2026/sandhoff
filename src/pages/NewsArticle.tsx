import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

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
    date: "2026-02-04",
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
            <strong>Datum:</strong> 4. – 7. Februar 2026<br />
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
