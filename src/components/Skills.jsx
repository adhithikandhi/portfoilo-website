import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    "Java", "Web Development", "Frontend Development", 
    "Graphic Design", "UI/UX Design", "Social Media Design", 
    "Problem Solving", "React", "Tailwind CSS", "Framer Motion"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-mag-blue-50/50 dark:bg-slate-900/50 rounded-[3rem] -z-10 transform -skew-y-2"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-500 font-extrabold text-xs uppercase tracking-[0.2em]">Expertise</span>
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 font-serif">
          My <span className="italic">Skills</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skillsList.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="glass-card px-6 py-4 rounded-2xl flex items-center justify-center min-w-[140px] border-b-4 border-b-brand-200 dark:border-b-brand-800 cursor-pointer"
          >
            <span className="font-bold text-slate-700 dark:text-slate-200 text-sm sm:text-base">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
