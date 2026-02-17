import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedBackground } from './components/AnimatedBackground';

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location]);

  const navItems = [
    { label: 'About', href: '/about', color: 'hover:text-pink-100', glow: 'bg-pink-200/20' },
    { label: 'Skills', href: '/skills', color: 'hover:text-pink-300', glow: 'bg-pink-300/20' },
    { label: 'Portfolio', href: '/portfolio', color: 'hover:text-pink-400', glow: 'bg-pink-400/20' },
    { label: 'Experience', href: '/experience', color: 'hover:text-pink-500', glow: 'bg-pink-500/20' },
    { label: 'Education', href: '/education', color: 'hover:text-pink-600', glow: 'bg-pink-600/20' }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0B1121] text-white">
      <AnimatedBackground />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1121]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-bold text-xs tracking-tight w-10 h-10 flex items-center justify-center">
            <img src="logo.png" alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.div key={item.label} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative group">
                <Link to={item.href} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 text-gray-300 ${item.color} relative z-10`}>
                  {item.label}
                </Link>
                {/* Анімований фон-неон */}
                <motion.div className={`absolute inset-0 ${item.glow} rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity`} layoutId="navGlow" />
              </motion.div>
            ))}
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className="fixed inset-0 z-40 bg-[#0B1121]/95 backdrop-blur-xl pt-24 px-8 md:hidden">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} className={`text-2xl font-bold border-b border-white/10 pb-4 ${item.color.replace('hover:', '')}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">
        <Outlet /> {/* Сюди підставляються секції */}
      </main>
    </div>
  );
}