"use client";

import { useState } from "react";
import Image from "next/image";
import { Template } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TemplateDialog } from "./TemplateDialog";
import { Eye } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={template.thumbnail}
            alt={`Anteprima ${template.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold">{template.name}</h3>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {template.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {template.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={() => setDialogOpen(true)}
            className="w-full gap-2"
            variant="outline"
          >
            <Eye className="h-4 w-4" />
            Vedi Gallery
          </Button>
        </CardFooter>
      </Card>

      <TemplateDialog
        template={template}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
