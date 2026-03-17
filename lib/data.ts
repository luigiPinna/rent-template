import { Template, TeamMember, Service } from "@/types";

export const templates: Template[] = [
  {
    id: "template-elegance",
    name: "Elegance B&B",
    description:
      "Template elegante e moderno pensato per B&B di charme. Design sofisticato con galleria immagini prominente, sezione camere dettagliata e sistema di prenotazione integrato.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/templates/elegance/elegance1.png",
    screenshots: [
      "/images/templates/elegance/elegance1.png",
      "/images/templates/elegance/elegance2.png",
    ],
  },
  {
    id: "template-minimal",
    name: "Minimal Stay",
    description:
      "Template essenziale e pulito per affittacamere e B&B moderni. Design bianco e minimalista, spazio bianco generoso, focus sulle foto della struttura e prenotazione diretta immediata.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/templates/minimal/minimal1.png",
    screenshots: [
      "/images/templates/minimal/minimal1.png",
      "/images/templates/minimal/minimal2.png",
      "/images/templates/minimal/minimal3.png",
      "/images/templates/minimal/minimal4.png",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Marco Rossi",
    role: "Web Developer & Co-founder",
    bio: "Sviluppatore full-stack con 8+ anni di esperienza. Specializzato in applicazioni web moderne con React e Next.js. Appassionato di UX design e performance web.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "member-2",
    name: "Giulia Ferrari",
    role: "UX Designer & Co-founder",
    bio: "Designer con background in comunicazione visiva. Crea interfacce intuitive e belle che convertono visitatori in clienti. Esperta in branding per il settore hospitality.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export const services: Service[] = [
  {
    id: "service-customization",
    title: "Personalizzazione Design",
    description:
      "Adattiamo il template scelto alla tua identità visiva: colori, font, logo e stile grafico per un sito unico e riconoscibile.",
    icon: "Palette",
  },
  {
    id: "service-seo",
    title: "Ottimizzazione SEO",
    description:
      "Ottimizziamo il tuo sito per i motori di ricerca, aumentando la visibilità organica e portando più prenotazioni dirette.",
    icon: "TrendingUp",
  },
  {
    id: "service-maintenance",
    title: "Manutenzione & Aggiornamenti",
    description:
      "Gestiamo aggiornamenti, backup e sicurezza del tuo sito in modo continuativo, così tu puoi concentrarti sugli ospiti.",
    icon: "Settings",
  },
  {
    id: "service-booking",
    title: "Integrazione Booking",
    description:
      "Integriamo il tuo sistema di prenotazione preferito: Booking.com, Airbnb, o un sistema diretto personalizzato.",
    icon: "Calendar",
  },
  {
    id: "service-content",
    title: "Gestione Contenuti",
    description:
      "Forniamo formazione e supporto per aggiornare autonomamente testi, foto e disponibilità senza competenze tecniche.",
    icon: "FileEdit",
  },
  {
    id: "service-support",
    title: "Assistenza Tecnica",
    description:
      "Supporto tecnico dedicato per risolvere qualsiasi problema in tempi rapidi. Non sei mai solo con il tuo sito.",
    icon: "Headphones",
  },
];
