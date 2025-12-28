import React from 'react';

const skills = [
  "User Interface", "User Experience", "Prototyping", "Wireframing", 
  "Mobile App Design", "Web Design", "Figma", "Design Systems", 
  "Branding", "Interaction Design", "Frontend Development"
];

const Stats: React.FC = () => {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden flex items-center">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-scroll whitespace-nowrap flex items-center gap-16">
          {/* Double the list to create seamless loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-4xl md:text-6xl font-bold text-white/20 uppercase tracking-tighter hover:text-white/80 transition-colors cursor-default">
                {skill}
              </span>
              <span className="block w-3 h-3 rounded-full bg-brand-green/50"></span>
            </div>
          ))}
        </div>
        
        {/* Gradient fades on sides */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Stats;