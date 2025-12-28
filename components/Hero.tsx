import { motion } from "framer-motion";
import {
  ArrowDownRight,
  MapPin,
  MousePointer2,
  Sparkles,
  User,
} from "lucide-react";
import React, { useState } from "react";
import shahin2 from "../assets/images/shahin2.png";

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
        {/* Top Meta Row - Architectural / Technical Vibe */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-16 border-b border-white/5 pb-6 gap-4 md:gap-0">
          <div className="hidden md:block">
            <p className="text-gray-500 text-xs font-mono tracking-widest mb-1">
              LOCATION
            </p>
            <p className="text-white text-sm font-mono flex items-center gap-2">
              <MapPin
                size={14}
                className="text-brand-green"
                strokeWidth={1.5}
              />
              VATARA, DHAKA
            </p>
          </div>
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-full px-8 py-3 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-brand-green text-xs font-bold tracking-widest uppercase">
              Available for new projects
            </span>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-gray-500 text-xs font-mono tracking-widest mb-1">
              EXPERIENCE
            </p>
            <p className="text-white text-sm font-mono">EST. 2020</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Large Typography Left */}
          <div className="md:col-span-7 lg:col-span-8 relative z-20 order-2 md:order-1">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15vw] md:text-[9rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-brand-green mix-blend-difference"
              >
                SHAHIN
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ml-2 md:ml-4 mt-2"
              >
                <h1 className="text-[15vw] md:text-[9rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-white bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 opacity-50">
                  ALAM
                </h1>
                <div className="hidden md:block h-[1px] w-32 bg-white/20 mt-8"></div>
                <span className="hidden md:block text-brand-green font-display text-xl tracking-widest mt-6 animate-pulse">
                  ●
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 md:mt-16 max-w-xl md:pl-4 border-l border-white/10 pl-6"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                A multidisciplinary{" "}
                <span className="text-white font-medium">Product Designer</span>{" "}
                crafting high-end digital experiences for forward-thinking
                brands.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-brand-green hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                >
                  View Selected Work
                  <ArrowDownRight
                    className="group-hover:rotate-45 transition-transform duration-300"
                    size={20}
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image Card - Floating & Interactive */}
          <div className="md:col-span-5 lg:col-span-4 relative h-[450px] md:h-[650px] w-full order-1 md:order-2 group perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full preserve-3d"
            >
              <div className="absolute inset-0 bg-brand-green/20 rounded-[2rem] blur-2xl transform translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* 
                                INSTRUCTIONS:
                                1. Rename your photo to 'hero.jpg'.
                                2. Place it in the 'public' folder.
                                3. The code below uses object-top to ensure your face is visible.
                             */}
                {!imageError ? (
                  <img
                    src={shahin2}
                    onError={() => setImageError(true)}
                    // Removed grayscale by default to show your image clearly. Added object-top.
                    className="w-full h-full object-cover object-top opacity-100 transition-all duration-700 hover:scale-105"
                    alt="Shahin Alam"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a]">
                    <div className="p-4 rounded-full bg-white/5 text-white/20 mb-3">
                      <User size={48} strokeWidth={1} />
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
                      Image not found
                    </p>
                    <p className="text-[10px] text-white/20 mt-1"></p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Floating Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                      <Sparkles
                        className="text-brand-green"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/5 text-xs text-white/70">
                      UI/UX • DEV
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-1">
                    Shahin Alam
                  </h3>
                  <p className="text-gray-400">Senior Product Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Background decorative ring */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 rounded-full -z-10 animate-blob" />
            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-brand-green/10 rounded-full blur-[50px] -z-10" />
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <MousePointer2 size={16} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
