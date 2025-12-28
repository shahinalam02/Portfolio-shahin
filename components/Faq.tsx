import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in UI/UX Design for web and mobile apps, Brand Identity creation, and Front-end development (React/Tailwind). I help take products from concept to launch."
  },
  {
    question: "What is your typical process?",
    answer: "My process involves Discovery (understanding goals), Strategy & Wireframing, Visual Design (high-fidelity), and finally Handoff or Development. I maintain constant communication throughout."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. I love working with startups to define their MVP and scale their product design. The fast-paced environment matches my workflow perfectly."
  },
  {
    question: "What are your rates?",
    answer: "I work on both fixed-price project bases and hourly rates, depending on the scope. Contact me for a custom quote tailored to your specific needs."
  }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-medium tracking-widest uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Common Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border ${activeIndex === index ? 'border-brand-green/30 bg-white/5' : 'border-white/5 bg-[#0a0a0a]'} overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-medium ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full border ${activeIndex === index ? 'bg-brand-green text-black border-brand-green' : 'border-white/10 text-white'} transition-all`}>
                  {activeIndex === index ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;