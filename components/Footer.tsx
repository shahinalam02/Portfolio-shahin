import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-10 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <a href="#" className="text-xl font-bold tracking-tight text-white">
            SHAHIN<span className="text-brand-green">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">© 2024 Shahin Alam. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <SocialLink href="#" icon={<Instagram size={18} strokeWidth={1.5} />} />
          <SocialLink href="#" icon={<Twitter size={18} strokeWidth={1.5} />} />
          <SocialLink href="#" icon={<Linkedin size={18} strokeWidth={1.5} />} />
          <SocialLink href="#" icon={<Github size={18} strokeWidth={1.5} />} />
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-green hover:bg-brand-green/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;