import { ArrowRight } from "lucide-react";

export const EyeAnatomy = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-700 mb-12">
          Let's Know Our Eye
        </h2>

        {/* Anatomy Image */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-teal-50 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-0" />
          <img 
            src="https://img.freepik.com/free-vector/realistic-human-eye-structure-infographic-with-editable-text-captions-pointing-appropriate-parts-eyeball-vector-illustration_1284-77443.jpg?t=st=1732551600~exp=1732555200~hmac=9c00000000000000000000000000000000000000000000000000000000000000&w=1380" 
            alt="Human Eye Anatomy Diagram" 
            className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl shadow-xl shadow-teal-900/5"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium text-justify">
            The human eye is a complex sensory organ that allows for sight by capturing light and converting it into electrical signals for the brain to interpret. Key parts include the <span className="text-teal-600 font-bold">cornea</span>, which focuses light; the <span className="text-teal-600 font-bold">iris and pupil</span>, which regulate the amount of light entering; the <span className="text-teal-600 font-bold">lens</span>, which further focuses light onto the retina; and the <span className="text-teal-600 font-bold">optic nerve</span>, which transmits the signals to the brain. The retina contains light-sensitive cells called rods and cones that turn the light into nerve impulses.
          </p>

          {/* Button */}
          <button className="know-more-button mx-auto">
            <span>Know more..</span>
          </button>
        </div>

      </div>
    </section>
  );
};
