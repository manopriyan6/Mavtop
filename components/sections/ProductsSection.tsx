"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="products" className="py-24 bg-[#FAFAFA]" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-jakarta font-bold text-slate-900 tracking-tight"
          >
            One platform to create, manage, <br />
            and scale your digital business
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - Dark Blue Card (e.g. AI Screen Recorder) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 flex flex-col justify-between bg-gradient-to-b from-[#1C2039] to-[#0A1753] rounded-[2rem] p-8 min-h-[500px] shadow-sm relative overflow-hidden group"
          >
            <div className="z-10">
              <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold text-[#1C2039] tracking-wider mb-8">
                MAVTOP CRM
              </span>
              
              {/* Fake UI Graphic */}
              <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden mt-4 mb-8 transform group-hover:scale-105 transition-transform duration-500">
                 <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 </div>
                 <div className="p-4 space-y-3">
                   <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                   <div className="w-full h-8 bg-slate-100 rounded border border-slate-200"></div>
                   <div className="w-full h-8 bg-[#2563EB] rounded flex items-center justify-center mt-2">
                     <div className="w-1/3 h-2 bg-white/50 rounded"></div>
                   </div>
                 </div>
              </div>
            </div>

            <div className="z-10 mt-auto">
              <h3 className="text-2xl font-jakarta font-bold text-white mb-3">
                Intelligent customer relationships
              </h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                AI insights, automated workflows, and 360° views. Turn every interaction into an opportunity.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Light Blue Wide Card (e.g. Multilingual Video Player) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 lg:col-span-2 flex flex-col justify-between bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#DBEAFE] rounded-[2rem] p-8 min-h-[500px] shadow-sm relative overflow-hidden group"
          >
            <div className="z-10 flex justify-between items-start">
              <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 tracking-wider">
                WHATSAPP CLOUD
              </span>
            </div>
            
            {/* Fake Video/Graphic element overlapping */}
            <div className="absolute right-0 top-0 w-2/3 h-2/3 opacity-80 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F3E8FF] z-10"></div>
              {/* Abstract shape */}
              <div className="w-full h-full bg-[#3B82F6]/10 rounded-bl-full overflow-hidden flex items-center justify-end pr-10">
                 {/* Floating UI element */}
                 <div className="w-48 bg-slate-800/80 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/10 z-20 mr-12 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3 p-2 bg-white/10 rounded-lg">
                      <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">W</div>
                      <div className="flex-1 h-2 bg-white/40 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <div className="w-6 h-6 rounded bg-slate-600"></div>
                      <div className="flex-1 h-2 bg-white/20 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="z-10 mt-auto relative pt-40 lg:pt-0">
              {/* Video progress bar fake */}
              <div className="w-full max-w-sm bg-white/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-4 mb-8 shadow-sm">
                <Play className="w-4 h-4 text-slate-600" />
                <div className="flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#2563EB]"></div>
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-jakarta font-bold text-slate-900 mb-3 max-w-lg">
                Enterprise messaging at scale
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-md">
                Bulk campaigns, AI chatbots, and multi-agent inboxes. Connect with your customers where they already are.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Wide bottom card (Expressive AI Avatar style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 lg:col-span-3 flex flex-col lg:flex-row justify-between bg-[#F1F3F5] rounded-[2rem] p-8 md:p-12 min-h-[400px] shadow-sm relative overflow-hidden group"
          >
            <div className="z-10 lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-jakarta font-bold text-slate-900 mb-4">
                Deploy your own Enterprise AI
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                Your company's private AI assistant. Trained on your secure data, integrated with your internal tools, with zero data leakage.
              </p>
              <div>
                <span className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-700 tracking-wider shadow-sm">
                  PRIVATE AI ASSISTANT
                </span>
              </div>
            </div>
            
            {/* Graphic side */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 relative flex items-center justify-center">
               <div className="w-full max-w-sm aspect-square bg-white rounded-full shadow-2xl border-4 border-slate-50 flex items-center justify-center p-8 relative transform group-hover:scale-105 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] rounded-full opacity-10 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] to-[#2563EB]">
                       AI
                     </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-10 right-0 bg-white shadow-lg rounded-full p-3 flex items-center gap-2 border border-slate-100">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="text-xs font-bold text-slate-700">Secure</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
