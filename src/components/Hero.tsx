import React, { useEffect, useRef } from 'react';
import { ArrowDown, Database, Server, Pocket as Docker } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const icons = heroRef.current.querySelectorAll('.floating-icon');
      icons.forEach((icon: Element) => {
        const speed = (icon as HTMLElement).dataset.speed || '1';
        const translateX = (x - 0.5) * 50 * parseFloat(speed);
        const translateY = (y - 0.5) * 50 * parseFloat(speed);
        
        (icon as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      }
    },
  };

  const name = "Tanisha Bhatt".split('');

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background z-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-transparent"></div>
      </div>

      {/* Floating tech icons */}
      <div className="floating-icon absolute top-1/4 left-1/4 opacity-20 text-primary" data-speed="2">
        <Server size={64} className="animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="floating-icon absolute top-1/3 right-1/4 opacity-20 text-secondary" data-speed="1.5">
        <Database size={48} className="animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="floating-icon absolute bottom-1/3 left-1/5 opacity-20 text-primary" data-speed="3">
        <Docker size={56} className="animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-blue-300 mb-4">Hello, I'm</p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {name.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Backend Developer</h2>
          
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Crafting Scalable Backends with Precision. Specialized in building robust,
            high-performance systems that power modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted hover:text-foreground transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;