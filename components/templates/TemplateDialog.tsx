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
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface TemplateDialogProps {
  template: Template;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ZOOM_STEPS = [1, 1.5, 2, 3];

export function TemplateDialog({ template, open, onOpenChange }: TemplateDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(0);

  const zoom = ZOOM_STEPS[zoomIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? template.screenshots.length - 1 : prev - 1
    );
    setZoomIndex(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === template.screenshots.length - 1 ? 0 : prev + 1
    );
    setZoomIndex(0);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setCurrentIndex(0);
      setZoomIndex(0);
    }
    onOpenChange(isOpen);
  };

  const zoomIn = () => setZoomIndex((prev) => Math.min(prev + 1, ZOOM_STEPS.length - 1));
  const zoomOut = () => setZoomIndex((prev) => Math.max(prev - 1, 0));
  const resetZoom = () => setZoomIndex(0);

  const handleImageClick = () => {
    setZoomIndex((prev) => (prev + 1) % ZOOM_STEPS.length);
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
          {/* Zoom controls */}
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
            {zoom > 1 && (
              <span className="text-xs bg-background/80 px-2 py-1 rounded shadow-md text-muted-foreground">
                {Math.round(zoom * 100)}%
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-background/80 hover:bg-background shadow-md"
              onClick={zoomOut}
              disabled={zoomIndex === 0}
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-background/80 hover:bg-background shadow-md"
              onClick={resetZoom}
              disabled={zoomIndex === 0}
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-background/80 hover:bg-background shadow-md"
              onClick={zoomIn}
              disabled={zoomIndex === ZOOM_STEPS.length - 1}
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Scrollable image container */}
          <div
            className="overflow-auto"
            style={{
              maxHeight: "70vh",
              cursor: zoom < ZOOM_STEPS[ZOOM_STEPS.length - 1] ? "zoom-in" : "zoom-out",
            }}
          >
            <div
              style={{
                width: `${zoom * 100}%`,
                minWidth: "100%",
                transition: "width 0.2s ease",
              }}
              onClick={handleImageClick}
            >
              <Image
                src={template.screenshots[currentIndex]}
                alt={`Screenshot ${currentIndex + 1} di ${template.name}`}
                width={1600}
                height={2400}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
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
            <span className="text-xs text-muted-foreground">
              Clicca sull&apos;immagine per zoomare
            </span>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 flex-wrap">
            {template.screenshots.map((src, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentIndex(idx); setZoomIndex(0); }}
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
