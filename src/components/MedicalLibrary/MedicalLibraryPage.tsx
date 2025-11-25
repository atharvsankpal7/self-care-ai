import { EyeAnatomy } from "./EyeAnatomy";
import Navbar from "../NavBar";
import { MedicalHero } from "./Hero";

export const MedicalLibraryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <MedicalHero />

      {/* Eye Anatomy Section */}
      <EyeAnatomy />

      {/* Placeholder for Library Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
           {/* We can populate this later or reuse the components from the Home page version */}
           {[1, 2, 3].map((i) => (
             <div key={i} className="h-64 bg-white rounded-2xl border border-slate-100 shadow-sm animate-pulse"></div>
           ))}
        </div>
      </section>
    </div>
  );
};
