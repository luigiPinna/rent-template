import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contattaci per un preventivo gratuito per il tuo sito web B&B.",
};

export default function ContattiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattaci</h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Hai domande o vuoi un preventivo? Scrivici, ti risponderemo entro 24 ore.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-card border border-border/50 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">Inviaci un messaggio</h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Informazioni di contatto</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@stayweb.it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Telefono</p>
                  <p className="text-sm text-muted-foreground">+39 000 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Dove siamo</p>
                  <p className="text-sm text-muted-foreground">Italia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-muted/40">
            <h3 className="font-medium mb-2 text-sm">Tempi di risposta</h3>
            <p className="text-xs text-muted-foreground">
              Rispondiamo a tutte le richieste entro 24 ore lavorative.
              Per urgenze, contattaci direttamente via telefono.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="font-medium mb-2 text-sm">Preventivo gratuito</h3>
            <p className="text-xs text-muted-foreground">
              Tutti i preventivi sono completamente gratuiti e senza impegno.
              Analizziamo le tue esigenze e ti proponiamo la soluzione migliore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
