import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Service } from "@/types";
import {
  Palette,
  TrendingUp,
  Settings,
  Calendar,
  FileEdit,
  Headphones,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  TrendingUp,
  Settings,
  Calendar,
  FileEdit,
  Headphones,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Settings;

  return (
    <Card className="hover:shadow-md transition-shadow duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold">{service.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
