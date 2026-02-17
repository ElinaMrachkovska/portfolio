import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center max-w-4xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Заголовок */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">Me</span>
        </motion.h1>

        {/* Основний текст */}
        <motion.div 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6"
        >
          <p>
            Work with <span className="text-white font-medium">HTML5, modern CSS3, and ES6+ JavaScript</span>, 
            specializing in building interactive user interfaces using <span className="text-[#22d3ee]">React</span>.
          </p>
          
          <p>
            I excel in translating complex designs into responsive, high-quality code, 
            utilizing CSS preprocessors <span className="text-pink-400">(Sass)</span> and ensuring 
            <span className="italic"> pixel-perfect</span> implementation across various devices.
          </p>
          
          <p>
            Possess basic knowledge of <span className="text-green-400">Node.js</span> for full-stack 
            understanding. In life and professional activity, I strive to realize 
            my potential as much as possible and acquire new skills and experience.
          </p>
        </motion.div>

        {/* Декоративний елемент під текстом */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 flex justify-center gap-4"
        >
          <div className="h-1 w-12 bg-pink-500 rounded-full" />
          <div className="h-1 w-12 bg-pink-300 rounded-full opacity-50" />
          <div className="h-1 w-12 bg-pink-100 rounded-full opacity-20" />
        </motion.div>
      </motion.div>
    </section>
  );
}