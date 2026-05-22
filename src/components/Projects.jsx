import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Food Waste Management System",
      description: "Developed a frontend-focused platform connecting neighborhood food donors with NGOs to efficiently redistribute surplus meals and minimize wastage.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/adhithikandhi/food-waste-management-system",
      demo: "https://food-waste-name.vercel.app",
      icon: "♻️"
    },
    {
      title: "Social Connect Hub",
      description: "Designed and constructed a dynamic interface prototype for digital social interactions, prioritizing clean layout structuring and smooth responsive workflows.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/adhithikandhi/social-connect-hub",
      demo: "https://social-connect-hub-auqg.onrender.com",
      icon: "💬"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-500 font-extrabold text-xs uppercase tracking-[0.2em]">Portfolio</span>
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 font-serif">
          Featured <span className="italic">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-mag-yellow-100 dark:bg-brand-900/20 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed min-h-[80px]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-xl font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 flex gap-3 relative z-10 mt-auto">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-slate-900 dark:bg-slate-800 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors flex items-center justify-center gap-2 text-sm font-bold shadow-md shadow-brand-500/20"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
