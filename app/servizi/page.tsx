import { Metadata } from "next";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Scopri tutti i servizi web per B&B e strutture ricettive.",
};

export default function ServiziPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Servizi</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Oltre ai template, offriamo una gamma completa di servizi per portare la
          tua struttura ricettiva ai massimi livelli online.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Come Lavoriamo</h2>
        <div className="space-y-6">
          {[
            { step: "01", title: "Consulenza Iniziale", desc: "Analizziamo la tua struttura, i tuoi obiettivi e il tuo pubblico target per identificare la soluzione più adatta." },
            { step: "02", title: "Proposta e Design", desc: "Ti presentiamo una proposta personalizzata con mockup del sito e pianificazione dei contenuti." },
            { step: "03", title: "Sviluppo e Testing", desc: "Realizziamo il sito seguendo le best practice, testando su tutti i dispositivi prima del lancio." },
            { step: "04", title: "Go Live e Formazione", desc: "Mettiamo online il sito e ti formiamo per gestirlo in autonomia. Rimaniamo disponibili per il supporto." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                {step}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-primary/5 rounded-2xl p-10">
        <h2 className="text-2xl font-bold mb-3">Iniziamo insieme?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Richiedi un preventivo gratuito e senza impegno. Risponderemo entro 24 ore.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contatti">
            Richiedi un preventivo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
