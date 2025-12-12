import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { content } from "@/content/landing";
import { Brain, Eye, Scan } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MedicalImage = {
  id: string;
  title: string;
  modality: string;
  imageUrl?: string;
  icon?: LucideIcon;
  gradient?: string;
};

const defaultMedicalImages: MedicalImage[] = [
  {
    id: "ct",
    title: "CT Brain Scan",
    modality: "CT",
    icon: Brain,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "xray",
    title: "Chest X-Ray",
    modality: "X-Ray",
    icon: Scan,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "oct",
    title: "OCT Retinal Scan",
    modality: "OCT",
    icon: Eye,
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function HeroSection() {
  const configuredImages = (content.hero.medicalImages as MedicalImage[] | undefined) ?? [];
  const medicalImages: MedicalImage[] =
    configuredImages.length > 0
      ? configuredImages.map((img) => {
          const defaults = defaultMedicalImages.find((d) => d.id === img.id) ?? {};
          return { ...defaults, ...img };
        })
      : defaultMedicalImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % medicalImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const currentImage = medicalImages[currentIndex];
  const Icon: LucideIcon = currentImage.icon || Brain;

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20">
              {content.hero.badge}
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
                {content.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-base px-8 py-6"
              >
                {content.hero.ctaPrimary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-base px-8 py-6"
              >
                {content.hero.ctaSecondary}
              </Button>
            </div>

            {/* Modality Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {medicalImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    idx === currentIndex
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300"
                  }`}
                >
                  {img.modality}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative aspect-square rounded-2xl overflow-hidden"
              onMouseEnter={() => {
                setIsHovered(true);
                setShowOverlay(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setShowOverlay(false);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Medical Image */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {currentImage.imageUrl ? (
                      <img
                        src={currentImage.imageUrl}
                        alt={currentImage.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          currentImage.gradient ?? "from-cyan-500/20 to-blue-500/20"
                        }`}
                      />
                    )}

                    {/* Fallback icon if no image */}
                    {!currentImage.imageUrl && (
                      <Icon className="w-48 h-48 text-slate-700" strokeWidth={1} />
                    )}

                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/10 via-slate-950/40 to-slate-950/60" />

                    {/* AI Overlay */}
                    <AnimatePresence>
                      {showOverlay && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center"
                        >
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
                              <Brain className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div className="space-y-2">
                              <p className="text-cyan-400 font-semibold text-lg">AI Analysis Active</p>
                              <p className="text-slate-300 text-sm">Processing {currentImage.title}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* De-identification Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <p className="text-xs text-slate-400 font-medium">De-identified</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-slate-800 pointer-events-none" />
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {medicalImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-cyan-500"
                      : "w-1.5 bg-slate-700 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
