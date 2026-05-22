import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-500 font-extrabold text-xs uppercase tracking-[0.2em]">The Story</span>
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 font-serif">
          About <span className="italic">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bio Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Web Developer</h3>
          <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
            I'm a passionate Computer Science student based in Hyderabad, specializing in crafting premium digital experiences. I believe in the perfect intersection of beautiful magazine-style aesthetics and robust technical functionality.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            My career goal is to constantly push the boundaries of modern web design, creating interfaces that aren't just usable, but memorable. When I'm not coding, I'm exploring new graphic design trends or brainstorming innovative UI/UX concepts.
          </p>
        </motion.div>

        {/* Timeline / Experience */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pl-4 border-l-2 border-brand-200 dark:border-brand-800"
        >
          {/* Education 1 */}
          <div className="relative">
            <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-slate-950 shadow-md"></span>
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 rounded-full">2024 — 2028</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mt-3">B.Tech in Computer Science</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">ACE Engineering College</p>
          </div>

          {/* Education 2 */}
          <div className="relative">
            <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-950"></span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">2022 — 2024</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mt-3">Intermediate Education (MPC)</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Sri Chaitanya Junior College • CGPA: 8.7/10</p>
          </div>
          
          {/* Education 3 */}
          <div className="relative">
            <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-950"></span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Completed 2022</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mt-3">Secondary Education</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Sri Chaitanya Techno Curriculum • CGPA: 9.7/10</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
