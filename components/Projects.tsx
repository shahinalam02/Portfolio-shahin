import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "FinTrack Banking",
    category: "Mobile App • Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    description: "A complete redesign of a banking application focusing on financial literacy, streamlined transfers, and dark mode usability."
  },
  {
    id: 2,
    title: "Lumina Dashboard",
    category: "Web App • SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    description: "Analytics dashboard for a data visualization platform featuring real-time graphical data processing and custom widget layouts."
  },
  {
    id: 3,
    title: "Aura E-Commerce",
    category: "UI/UX • Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
    description: "Modern e-commerce experience designed for a luxury streetwear brand, focusing on visual storytelling and seamless checkout."
  },
  {
    id: 4,
    title: "HealthSync",
    category: "Mobile App • Health",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    description: "Telemedicine app connecting patients with specialists in real-time, featuring secure video calls and digital prescription management."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container mx-auto max-w-7xl relative z-10">
         {/* Header */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
              <h2 className="text-brand-green font-medium tracking-widest uppercase mb-4">Selected Work</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-display">
                Featured <br/> Projects
              </h3>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
            >
               <a href="#contact" className="text-gray-400 border-b border-brand-green/30 pb-1 hover:text-brand-green hover:border-brand-green transition-all">
                 View all case studies
               </a>
            </motion.div>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
         </div>
       </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-brand-green/30 transition-all duration-500 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
    >
        {/* Image Container */}
        <div className="aspect-[4/3] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            
            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            
            {/* Overlay Button */}
            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-black shadow-lg shadow-brand-green/20">
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-8 relative">
             {/* Gradient Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <p className="text-brand-green text-xs font-mono tracking-widest uppercase mb-3">{project.category}</p>
            <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors font-display">{project.title}</h4>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{project.description}</p>
        </div>
    </motion.div>
  )
}

export default Projects;