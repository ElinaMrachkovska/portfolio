import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: "Nothing Product",
      description: "A minimalist landing page for presenting Nothing brand phones, headphones, and accessories. Built with semantic HTML5, modular SCSS (BEM), and JavaScript using Parcel for bundling.",
      tags: ['HTML5', 'SCSS', 'JavaScript', 'Parcel', 'BEM'],
      demo: "https://elinamrachkovska.github.io/Nothing-Product",
      github: "https://github.com/ElinaMrachkovska/My_Landing_Page",
      image: "/prev/1.png" 
    },
    {
      title: "React Book Catalog",
      description: "Full-stack web application for managing a collection of books. It includes functionality for viewing, adding, and deleting books, API integration, and clean scalable architecture.",
      tags: ['React', 'Node.js', 'Express', 'Vercel', 'API'],
      demo: "https://project-bookstore-app-ashen.vercel.app/",
      github: "https://github.com/unbreakable-coders/project-bookstore_app",
      image: "/prev/2.png"
    },
    {
      title: "Vue Todo App",
      description: "Lightweight SPA for task management. Features full CRUD functionality, dynamic filtering, and leverage Axios for data fetching with Bulma for UI.",
      tags: ['Vue 3', 'Vite', 'Axios', 'Bulma', 'SCSS'],
      demo: "https://elinamrachkovska.github.io/vue-todo-app/",
      github: "https://github.com/ElinaMrachkovska/vue-todo-app",
      image: "/prev/3.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Real-world applications demonstrating full-stack capabilities and
            attention to detail.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1121] transition-all hover:border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Ліва частина */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm text-pink-300 bg-pink-500/10 rounded-full border border-pink-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-lg transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Права частина: прев’ю */}
                <div className="relative h-full min-h-[200px] rounded-xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
