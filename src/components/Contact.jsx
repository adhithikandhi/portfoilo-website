import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:adhithikandhi0@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-500 font-extrabold text-xs uppercase tracking-[0.2em]">Let's Connect</span>
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 font-serif">
          Get In <span className="italic">Touch</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
            Interested in collaborating on frontend design or hiring an enthusiastic developer? Reach out through any of these direct channels!
          </p>

          <a href="mailto:adhithikandhi0@gmail.com" className="glass-card rounded-2xl p-4 flex gap-4 items-center hover:-translate-y-1 transition-transform group">
            <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider">Email Direct</h4>
              <p className="font-bold text-slate-800 dark:text-white text-sm">adhithikandhi0@gmail.com</p>
            </div>
          </a>

          <a href="https://wa.me/918125337023" target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-4 flex gap-4 items-center hover:-translate-y-1 transition-transform group">
            <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider">WhatsApp</h4>
              <p className="font-bold text-slate-800 dark:text-white text-sm">+91 8125337023</p>
            </div>
          </a>

          <div className="glass-card rounded-2xl p-4 flex gap-4 items-center">
            <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-12 h-12 rounded-xl flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider">Location</h4>
              <p className="font-bold text-slate-800 dark:text-white text-sm">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-4">Send a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea 
                required rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-3.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none dark:text-white"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
