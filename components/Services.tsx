import React from 'react';
import { LayoutTemplate, TabletSmartphone, Globe, Shapes, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-brand-green font-medium tracking-widest uppercase mb-4">Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Design solutions for <br /> every platform.
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-lg">
            Comprehensive design services tailored to your brand's unique needs and goals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card */}
          <BentoCard 
            title="UI/UX Design"
            description="Complete product design from research to high-fidelity prototypes."
            icon={<LayoutTemplate size={32} strokeWidth={1.5} />}
            colSpan="md:col-span-2"
          />

          {/* Standard Card */}
          <BentoCard 
            title="Mobile Apps"
            description="Native iOS & Android experiences."
            icon={<TabletSmartphone size={32} strokeWidth={1.5} />}
          />

          {/* Standard Card */}
          <BentoCard 
            title="Web Design"
            description="Responsive, fast, and accessible websites."
            icon={<Globe size={32} strokeWidth={1.5} />}
          />

          {/* Large Card */}
          <BentoCard 
            title="Brand Identity"
            description="Logos, typography, and visual systems that stand out."
            icon={<Shapes size={32} strokeWidth={1.5} />}
            colSpan="md:col-span-2"
            highlight={false}
          />

        </div>
      </div>
    </section>
  );
};

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
  highlight?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, icon, colSpan = "", highlight = false }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`
      ${colSpan} p-8 rounded-3xl border 
      ${highlight ? 'bg-white text-black border-transparent' : 'bg-[#0a0a0a] border-white/10 text-white hover:border-white/20'}
      flex flex-col justify-between min-h-[260px] relative overflow-hidden group transition-all duration-300
    `}
  >
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl ${highlight ? 'bg-black/5 text-black' : 'bg-brand-green/10 text-brand-green'}`}>
        {icon}
      </div>
      <div className={`opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 ${highlight ? 'text-black' : 'text-white'}`}>
        <ArrowUpRight size={24} strokeWidth={1.5} />
      </div>
    </div>

    <div className="relative z-10">
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className={`${highlight ? 'text-black/70' : 'text-gray-400'} text-base leading-relaxed`}>{description}</p>
    </div>

    {/* Glow Effect for dark cards */}
    {!highlight && (
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] group-hover:bg-brand-green/10 transition-colors pointer-events-none" />
    )}
  </motion.div>
);

export default Services;