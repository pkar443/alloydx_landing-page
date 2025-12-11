import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { content } from "@/content/landing";

export function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="bg-slate-950 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-3xl p-12 lg:p-16 border border-cyan-500/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {content.finalCta.title}
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              {content.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-base px-8 py-6"
              >
                {content.finalCta.ctaPrimary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-base px-8 py-6"
              >
                {content.finalCta.ctaSecondary}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
