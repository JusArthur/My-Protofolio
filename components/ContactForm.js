"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail, Send } from "lucide-react";

// Social Icons as simple SVGs to match the minimalist look
const Icons = {
  Twitter: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  Github: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
  ),
  LinkedIn: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  )
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "Sending..." });
    // Simulate API call logic
    setTimeout(() => {
        setStatus({ success: true, message: "MESSAGE_RECEIVED: SUCCESS" });
        setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      {/* Label styled like Experience/Projects */}
      <h2 className="text-zinc-500 text-[10px] font-mono mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
        <ChevronRight size={14} /> Contact Protocol
      </h2>

      <div className="grid md:grid-cols-5 gap-10">
        
        {/* Left Side: Social/Info */}
        <div className="md:col-span-2 space-y-8">
            <div className="border-2 border-dotted border-zinc-800 p-8 rounded-xl bg-zinc-900/5 transition-all">
                <h3 className="text-white font-bold text-xl mb-2">Network Hub</h3>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                    Available for global projects, collaborations, or technical consultations.
                </p>
                
                <div className="space-y-3">
                    <SocialLink href="https://github.com/JusArthur" icon={<Icons.Github />} label="GitHub" />
                    <SocialLink href="https://linkedin.com/in/justinxia30" icon={<Icons.LinkedIn />} label="LinkedIn" />
                    <SocialLink href="https://twitter.com" icon={<Icons.Twitter />} label="Twitter" />
                </div>
            </div>

            <div className="px-4">
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-2">Direct Mail</p>
                <a href="mailto:justinxmay@gmail.com" className="text-zinc-300 hover:text-blue-500 transition-colors font-medium">
                    justinxmay@gmail.com
                </a>
            </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 border-2 border-dotted border-zinc-800 p-8 rounded-xl bg-black/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Identifier</label>
                    <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="NAME_REQUIRED"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-all font-mono text-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Return Address</label>
                    <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        placeholder="EMAIL_REQUIRED"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-all font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Transmission Payload</label>
                <textarea 
                    name="message" value={formData.message} onChange={handleChange} required rows="4"
                    placeholder="ENTER_MESSAGE_HERE..."
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-all font-mono text-sm resize-none"
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-zinc-100 hover:bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all uppercase text-xs tracking-[0.2em]"
            >
                <Send size={16} /> Execute Transmission
            </button>

            {status.message && (
                <p className={`text-[10px] font-mono mt-4 ${status.success ? 'text-green-500' : 'text-zinc-500'}`}>
                    {status.message}
                </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800/50 transition-all group"
  >
    <div className="flex items-center gap-3">
        <span className="text-zinc-400 group-hover:text-white transition-colors">
        {icon}
        </span>
        <span className="text-zinc-500 group-hover:text-zinc-200 text-xs font-mono uppercase tracking-widest">{label}</span>
    </div>
    <ChevronRight size={14} className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
  </a>
);

export default ContactForm;