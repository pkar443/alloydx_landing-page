import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/content/landing";
import { CheckCircle2 } from "lucide-react";

export function ForClinicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="for-clinics" ref={ref} className="bg-slate-900 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.forClinics.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {content.forClinics.leftColumn.title}
            </h3>
            <ul className="space-y-4">
              {content.forClinics.leftColumn.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {content.forClinics.rightColumn.title}
            </h3>
            <ul className="space-y-4">
              {content.forClinics.rightColumn.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
