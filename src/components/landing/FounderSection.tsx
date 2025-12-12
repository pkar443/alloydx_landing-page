import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/content/landing";
import { User } from "lucide-react";

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const people = [
    {
      name: content.founder.name,
      role: content.founder.role,
      bio: content.founder.bio,
    },
    {
      name: content.academic_advisor.name,
      role: content.academic_advisor.role,
      bio: content.academic_advisor.bio,
    },
    {
      name: content.clinical_advisor.name,
      role: content.clinical_advisor.role,
      bio: content.clinical_advisor.bio,
    },
  ];

  return (
    <section id="about" ref={ref} className="bg-slate-950 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.founder.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden p-8">
            <div className="grid gap-8 md:grid-cols-3">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col h-full items-center text-center bg-slate-900/60 border border-slate-800 rounded-xl p-6"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-3">{person.role}</p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
