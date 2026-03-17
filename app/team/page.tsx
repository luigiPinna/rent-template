import { Metadata } from "next";
import { teamMembers } from "@/lib/data";
import { TeamCard } from "@/components/team/TeamCard";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Scopri il team di StayWeb, esperti in siti web per strutture ricettive.",
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Siamo un piccolo team appassionato di tecnologia e hospitality. La nostra
          missione è aiutare i B&B e le strutture ricettive a prosperare nel mondo digitale.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto mb-16 bg-muted/30 rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl font-bold mb-4">La Nostra Storia</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            StayWeb nasce dalla passione di due professionisti del digitale che,
            viaggiando per l&apos;Italia, hanno scoperto quanto spesso le strutture
            ricettive più belle fossero penalizzate da siti web inadeguati o dall&apos;assenza
            totale di presenza online.
          </p>
          <p>
            Abbiamo deciso di colmare questo gap offrendo template professionali e
            servizi web su misura, pensati esclusivamente per B&B, affittacamere e
            piccole strutture ricettive.
          </p>
          <p>
            La nostra <strong className="text-foreground">missione</strong> è semplice:
            aiutarti a ridurre la dipendenza dalle OTA e aumentare le prenotazioni dirette,
            mettendo il tuo sito al centro della tua strategia commerciale.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mb-0">
        <h2 className="text-2xl font-bold text-center mb-8">Il Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

    </div>
  );
}
