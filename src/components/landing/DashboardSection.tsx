import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { content } from "@/content/landing";
import { List, ScanEye, FileText, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState("worklist");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" ref={ref} className="bg-slate-950 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.dashboard.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {content.dashboard.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-slate-900 border border-slate-800 p-1 mb-12">
              {content.dashboard.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-slate-400"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.dashboard.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden"
                >
                  {/* Tab Content Header */}
                  <div className="p-8 border-b border-slate-800">
                    <h3 className="text-2xl font-bold text-white mb-3">{tab.title}</h3>
                    <p className="text-slate-400">{tab.description}</p>
                  </div>

                  {/* Mock Dashboard UI */}
                  <div className="p-8">
                    {tab.id === "worklist" && <WorklistMock />}
                    {tab.id === "viewer" && <ViewerMock />}
                    {tab.id === "report" && <ReportMock />}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function WorklistMock() {
  const cases = [
    { id: "001", patient: "Patient A", study: "CT Brain", priority: "urgent", status: "pending" },
    { id: "002", patient: "Patient B", study: "Chest X-Ray", priority: "routine", status: "pending" },
    { id: "003", patient: "Patient C", study: "MRI Spine", priority: "stat", status: "pending" },
  ];

  return (
    <div className="space-y-3">
      {cases.map((case_) => (
        <div
          key={case_.id}
          className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
              <List className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <p className="text-white font-medium">{case_.patient}</p>
              <p className="text-sm text-slate-400">{case_.study}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {case_.priority === "urgent" && (
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-400 font-medium">
                Urgent
              </span>
            )}
            {case_.priority === "stat" && (
              <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-400 font-medium">
                STAT
              </span>
            )}
            {case_.priority === "routine" && (
              <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-400 font-medium">
                Routine
              </span>
            )}
            <Clock className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ViewerMock() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="aspect-square bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden">
        <ScanEye className="w-24 h-24 text-slate-700" strokeWidth={1} />
        <div className="absolute top-4 left-4 space-y-2">
          <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-xs text-cyan-400 font-medium">
            AI: Lesion detected
          </div>
          <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-xs text-cyan-400 font-medium">
            Size: 12.4mm
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <h4 className="text-white font-semibold mb-2">AI Findings</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
              <span>Suspicious lesion in right upper lobe</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>No acute hemorrhage detected</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Normal cardiac silhouette</span>
            </li>
          </ul>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <h4 className="text-white font-semibold mb-2">Measurements</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Lesion diameter:</span>
              <span className="text-white font-medium">12.4 mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Volume:</span>
              <span className="text-white font-medium">998 mm³</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportMock() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-cyan-400" />
          <h4 className="text-white font-semibold text-lg">Structured Report</h4>
        </div>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-slate-500 uppercase text-xs font-semibold mb-1">Indication</p>
            <p className="text-slate-300">Follow-up of known pulmonary nodule</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase text-xs font-semibold mb-1">Technique</p>
            <p className="text-slate-300">Non-contrast CT chest, axial images</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase text-xs font-semibold mb-1">Findings (AI-Assisted)</p>
            <p className="text-slate-300">
              Right upper lobe nodule measures 12.4 mm (previously 11.8 mm). Spiculated margins. 
              No new nodules identified. No pleural effusion. Heart size normal.
            </p>
          </div>
          <div>
            <p className="text-slate-500 uppercase text-xs font-semibold mb-1">Impression</p>
            <p className="text-slate-300">
              Slight interval growth of right upper lobe nodule. Recommend follow-up CT in 3 months 
              or consider tissue diagnosis.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
          Approve & Sign
        </button>
        <button className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors">
          Edit Report
        </button>
      </div>
    </div>
  );
}
