"use client";

import { useState } from "react";
import Image from "next/image";
import { Template } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TemplateDialogProps {
  template: Template;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TemplateDialog({ template, open, onOpenChange }: TemplateDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? template.screenshots.length - 1 : prev - 1
    );

  const goToNext = () =>
    setCurrentIndex((prev) =>
      prev === template.screenshots.length - 1 ? 0 : prev + 1
    );

  const handleOpenChange = (open: boolean) => {
    if (!open) setCurrentIndex(0);
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl">{template.name}</DialogTitle>
          <p className="text-sm text-muted-foreground">{template.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {template.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        {/* Gallery */}
        <div className="relative bg-muted/50">
          {/* Main image */}
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src={template.screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1} di ${template.name}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* Navigation buttons */}
          {template.screenshots.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
                onClick={goToPrev}
                aria-label="Immagine precedente"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
                onClick={goToNext}
                aria-label="Immagine successiva"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnails + counter */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {template.screenshots.length}
            </span>
          </div>
          {/* Thumbnail dots */}
          <div className="flex gap-2 flex-wrap">
            {template.screenshots.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-60 hover:opacity-80"
                }`}
                aria-label={`Vai all'immagine ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
