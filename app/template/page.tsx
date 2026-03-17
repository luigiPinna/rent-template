import { Metadata } from "next";
import { templates } from "@/lib/data";
import { TemplateCard } from "@/components/templates/TemplateCard";

export const metadata: Metadata = {
  title: "Template",
  description: "Scopri i nostri template professionali per B&B e affittacamere.",
};

export default function TemplatePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Template</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Soluzioni web pronte all&apos;uso, pensate appositamente per B&B e strutture
          ricettive. Ogni template è personalizzabile e ottimizzato per le prenotazioni.
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 p-8 rounded-2xl bg-muted/40 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          Non trovi quello che cerchi?
        </h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Possiamo realizzare un template completamente su misura per la tua struttura.
        </p>
        <a
          href="/contatti"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Contattaci per un preventivo →
        </a>
      </div>
    </div>
  );
}
