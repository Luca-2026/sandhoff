import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Cookie, Settings2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true, // Always required
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch {
        // Legacy format - just accepted/declined string
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Main Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              {/* Icon & Text */}
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche 
                    Erfahrung auf unserer Website zu bieten. Einige sind essenziell für den 
                    Betrieb der Seite, während andere uns helfen, die Website zu verbessern.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm">
                    <Link 
                      to="/datenschutz" 
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <Shield className="h-3.5 w-3.5" />
                      Datenschutzerklärung
                    </Link>
                    <Link 
                      to="/impressum" 
                      className="text-muted-foreground hover:text-primary hover:underline"
                    >
                      Impressum
                    </Link>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 shrink-0 w-full lg:w-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowSettings(true)}
                  className="flex-1 lg:flex-initial"
                >
                  <Settings2 className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={acceptEssential}
                  className="flex-1 lg:flex-initial"
                >
                  Nur Essenzielle
                </Button>
                <Button 
                  size="sm" 
                  onClick={acceptAll}
                  className="flex-1 lg:flex-initial"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Cookie-Einstellungen
            </DialogTitle>
            <DialogDescription>
              Wählen Sie, welche Cookies Sie akzeptieren möchten. Essenzielle Cookies 
              sind für die Grundfunktionen der Website erforderlich.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Essential Cookies */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border">
              <div className="space-y-1">
                <Label className="font-medium">Essenzielle Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Notwendig für die Grundfunktionen der Website (z.B. Navigation, Formulare)
                </p>
              </div>
              <Switch 
                checked={true} 
                disabled 
                aria-label="Essenzielle Cookies (immer aktiv)"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="space-y-1">
                <Label className="font-medium">Analyse-Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren
                </p>
              </div>
              <Switch 
                checked={preferences.analytics}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, analytics: checked }))
                }
                aria-label="Analyse-Cookies"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="space-y-1">
                <Label className="font-medium">Marketing-Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Werden verwendet, um Werbung relevanter zu gestalten
                </p>
              </div>
              <Switch 
                checked={preferences.marketing}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, marketing: checked }))
                }
                aria-label="Marketing-Cookies"
              />
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Weitere Informationen finden Sie in unserer{" "}
            <Link to="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={acceptEssential}>
              Nur Essenzielle
            </Button>
            <Button onClick={saveCustomPreferences}>
              Auswahl speichern
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
