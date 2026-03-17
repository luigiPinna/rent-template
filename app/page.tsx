import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Smartphone,
  Search,
  Zap,
  Shield,
  LayoutTemplate,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Perfetto su qualsiasi dispositivo: smartphone, tablet e desktop.",
  },
  {
    icon: Search,
    title: "SEO Ottimizzato",
    description: "Struttura tecnica pensata per posizionarsi sui motori di ricerca.",
  },
  {
    icon: Zap,
    title: "Caricamento Veloce",
    description: "Performance elevate per non perdere visitatori impazienti.",
  },
  {
    icon: Shield,
    title: "Sicuro e Affidabile",
    description: "Certificati SSL, backup regolari e protezione da attacchi.",
  },
  {
    icon: LayoutTemplate,
    title: "Facile da Gestire",
    description: "Aggiorna testi, foto e disponibilità in autonomia, senza tecnici.",
  },
  {
    icon: HeartHandshake,
    title: "Supporto Dedicato",
    description: "Siamo qui per te anche dopo la messa online del sito.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
            <span>✦</span>
            <span>Template professionali per l&apos;hospitality</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Siti web professionali per{" "}
            <span className="text-primary">B&B e Affittacamere</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Trasforma la tua struttura ricettiva con un sito elegante, veloce e
            ottimizzato per le prenotazioni dirette. Smetti di pagare commissioni
            ai portali di terze parti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/template">
                Scopri i Template
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contatti">Parlaci del tuo progetto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tutto quello che ti serve
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I nostri template sono progettati specificamente per le strutture ricettive,
              con tutte le funzionalità necessarie già incluse.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto a fare il salto?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Guarda i nostri template e scegli quello più adatto alla tua struttura.
            Poi contattaci per personalizzarlo.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/template">
              Vedi tutti i template
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
