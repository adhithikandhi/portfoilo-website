import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    { title: "Generative AI", issuer: "Infosys Springboard", icon: "🤖" },
    { title: "Career Edge", issuer: "TCS iON Young Professional", icon: "💼" },
    { title: "CodeChef 500", issuer: "Difficulty Rating Certificate", icon: "📈" },
    { title: "AI Tools", issuer: "be10x AI Workshop Certificate", icon: "🛠️" },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-500 font-extrabold text-xs uppercase tracking-[0.2em]">Accreditation</span>
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 font-serif">
          My <span className="italic">Certificates</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 rounded-3xl flex gap-6 items-center group hover:-translate-y-1 transition-transform border-2 border-transparent hover:border-brand-200 dark:hover:border-brand-800"
          >
            <div className="w-16 h-16 bg-mustard/20 dark:bg-slate-800 text-3xl rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
              {cert.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{cert.title}</h3>
              <p className="text-slate-800 dark:text-slate-400 text-sm font-medium">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Academic Achievements Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="md:col-span-2 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center justify-between bg-[#115e59] text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-[-20%] bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Academic Achievements</h3>
            <p className="text-[#ccfbf1] text-sm max-w-xl font-medium">
              Excellent School Performance with 9.7 and 8.7 CGPA metrics. Maintaining a continuous learning loop through hands-on practice, hackathons, and professional certifications.
            </p>
          </div>
          <div className="shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl shadow-lg border border-white/30">
            🏆
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
