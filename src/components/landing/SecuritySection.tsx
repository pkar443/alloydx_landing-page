import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/content/landing";
import { Shield } from "lucide-react";

export function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-slate-900 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-green-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {content.security.title}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {content.security.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
