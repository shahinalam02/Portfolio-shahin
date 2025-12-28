import React from 'react';
import { motion } from 'framer-motion';
import { Send, AtSign, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div>
                <h2 className="text-brand-green font-medium tracking-widest uppercase mb-4">Contact</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight font-display mb-6">
                  Let's start a <br /> project together.
                </h3>
                <p className="text-gray-400 text-lg max-w-md">
                  Have an idea in mind? I'm currently available for new projects. Send me a message and let's discuss.
                </p>
             </div>

             <div className="space-y-6 pt-8">
                <ContactInfo 
                  icon={<AtSign strokeWidth={1.5} />} 
                  label="Email" 
                  value="shahinalam982.as@gmail.com" 
                />
                <ContactInfo 
                  icon={<Phone strokeWidth={1.5} />} 
                  label="Phone" 
                  value="+880 1518 479218 / +880 1682 491761" 
                />
                <ContactInfo 
                  icon={<MapPin strokeWidth={1.5} />} 
                  label="Location" 
                  value="Vatara, Notun bazar, Dhaka, Bangladesh (Remote Available)" 
                />
             </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Name" placeholder="John Doe" />
                 <InputGroup label="Email" placeholder="john@example.com" type="email" />
               </div>
               <InputGroup label="Service" placeholder="UI/UX, Web Design..." />
               
               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                 <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell me about your project..."
                 ></textarea>
               </div>

               <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                 Send Message <Send size={18} strokeWidth={1.5} />
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-black transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-white font-medium group-hover:text-brand-green transition-colors">{value}</p>
    </div>
  </div>
);

const InputGroup: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>
    <input 
      type={type}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;