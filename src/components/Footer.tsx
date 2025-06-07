import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background border-t border-border/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                TB
              </div>
              <span className="font-semibold">Tanisha Bhatt</span>
            </div>
            <p className="text-muted text-sm mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;