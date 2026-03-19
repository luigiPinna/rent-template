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
  name: "Luigi Pinna",
  role: "Software Engineer & Architect",
  bio: "Software Engineer con esperienza nello sviluppo di soluzioni software per grandi istituti bancari e imprese strutturate. Si concentra sulla progettazione di sistemi backend scalabili, combinando solidità tecnica e attenzione al risultato. Lavora principalmente con Python, AI e LLM per applicazioni web e sistemi di automazione dei processi, con esperienza anche lato frontend e UI. Affianca i clienti trasformando esigenze complesse in soluzioni digitali concrete ed efficaci.",
  avatar: "https://i.pravatar.cc/150?img=12",
},
  {
    id: "member-2",
    name: "Matteo Scano",
    role: "Software Engineer & UI/UX Designer",
    bio: "Sviluppatore Full Stack con esperienza nello sviluppo di siti e applicazioni web per Pubbliche Amministrazioni e aziende private. Lavoro quotidianamente con PHP, JavaScript, Next.js, Joomla e WordPress, curando sia la parte frontend (interfacce accessibili e responsive) sia l’integrazione con backend, database e servizi esterni. Affianco i clienti nella raccolta dei requisiti, propongo soluzioni digitali sostenibili e li accompagno in tutte le fasi del progetto, dal concept al rilascio e alla manutenzione evolutiva.",
    avatar: "https://i.pravatar.cc/150?img=33",
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
