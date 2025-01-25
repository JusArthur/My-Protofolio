"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: "Failed to send the message." });
      }
    } catch (error) {
      setStatus({ success: false, message: "An error occurred. Try again." });
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-primary bg-background text-foreground"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-primary bg-background text-foreground"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg border-2 border-primary bg-background text-foreground"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-background font-bold rounded-lg hover:bg-primary-light transition"
          >
            Send Message
          </button>
          {status.message && (
            <p
              className={`mt-4 text-center ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/justinxia30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-3xl hover:text-primary-light transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JusArthur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-3xl hover:text-primary-light transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
