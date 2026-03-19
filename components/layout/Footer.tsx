import Link from "next/link";
import { Hotel } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/template", label: "Template" },
  { href: "/servizi", label: "Servizi" },
  { href: "/team", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Hotel className="h-6 w-6" />
              <span>StayWeb</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Realizziamo siti web professionali per B&B e affittacamere. Aiutiamo le strutture ricettive a crescere online.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Navigazione</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contatti</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>stayweb.hospitality@gmail.com</p>
              <p>+39 340 685 2842</p>
              <p>Italia</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StayWeb. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
