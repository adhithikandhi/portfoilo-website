import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            Web Developer
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white leading-tight tracking-tight font-serif">
            Hello, I'm <br />
            <span className="text-brand-500 bg-gradient-to-r from-brand-500 to-amber-600 bg-clip-text text-transparent italic font-bold">Adhithi Kandhi</span>
          </h1>
          
          <p className="text-slate-800 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            And I am a <strong className="text-slate-900 dark:text-white font-bold">Web Developer</strong> specializing in building responsive, user-friendly interfaces with premium design aesthetics.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#projects" 
              className="px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2"
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a 
              href="/assets/resume.png" 
              download
              className="px-7 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-sm rounded-2xl transition-all shadow-sm flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
            <a 
              href="mailto:adhithikandhi0@gmail.com" 
              className="px-7 py-3.5 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-sm rounded-2xl transition-all flex items-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image with Abstract Decorations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
            {/* Abstract Background Shapes (Teal paint stroke effect) */}
            <div className="absolute inset-[-15%] bg-teal-dark dark:bg-teal-deep rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -rotate-12 -z-10 shadow-xl"></div>
            <div className="absolute inset-[5%] bg-mustard rounded-full opacity-20 -z-10"></div>
            
            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#fdfbf7] dark:border-slate-950 shadow-2xl relative bg-mustard">
              <img 
                src="/assets/profile.jpg" 
                alt="Adhithi Kandhi" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-500">
                <span className="text-sm">Profile Image</span>
              </div>
            </div>

            {/* Floating Tag */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2"
            >
              <span className="text-xl">💻</span>
              <span className="text-xs font-bold dark:text-white">Developer</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
