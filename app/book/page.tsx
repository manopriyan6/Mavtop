import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Call | Mavtop Technologies",
  description: "Schedule a free consultation with our enterprise software experts.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0D0D0F]">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/80 dark:from-brand-blue/5 via-transparent to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
              Let's Discuss Your Next <span className="text-electric-blue">Big Move</span>
            </h1>
            <p className="font-jakarta text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Pick a time below that works for you. We'll hop on a quick call to understand your needs and see how we can help.
            </p>
          </div>

          <div className="bg-white dark:bg-[#131524] shadow-2xl border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden min-h-[700px] relative">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20VutzAcFL8uN6O2t8hOnZXcq3eLJgrRgJ7DersadCmfnxOH6QbVJ5Hdhd9ZVAFRPOqIM2wIzX?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="700" 
              frameBorder="0"
              className="w-full h-[700px] bg-white absolute inset-0 z-10 dark:invert dark:hue-rotate-180 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
