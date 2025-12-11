import { motion } from "framer-motion";
import { content } from "@/content/landing";

export function ModalityStrip() {
  // Duplicate modalities for seamless loop
  const modalities = [...content.modalities, ...content.modalities];

  return (
    <section className="bg-slate-900 py-8 overflow-hidden border-y border-slate-800">
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -50 * content.modalities.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-4"
        >
          {modalities.map((modality, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer"
            >
              <span className="text-slate-300 font-medium text-sm whitespace-nowrap">
                {modality}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
