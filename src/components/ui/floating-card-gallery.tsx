import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Card {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  tags?: string[];
}

interface FloatingCardGalleryProps {
  cards?: Card[];
  accentColor?: string;
  maxCards?: number;
}

const FloatingCardGallery: React.FC<FloatingCardGalleryProps> = ({ 
  cards = [],
  accentColor = "rgba(255, 255, 255, 0.15)",
  maxCards = 6
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const displayCards = cards.slice(0, maxCards);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-12 overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Ambient background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        style={{ 
          rotateX: -mousePosition.y * 0.3,
          rotateY: mousePosition.x * 0.3,
          transformStyle: 'preserve-3d'
        }}
      >
        {displayCards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            aria-expanded={activeIndex === index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              z: activeIndex === index ? 100 : 0,
              scale: activeIndex === index ? 1.05 : 1,
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ 
              z: 30,
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow effect */}
            <div 
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{ background: accentColor }}
            />
            
            {/* Card content */}
            <div className="relative bg-secondary/80 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden">
              {/* Floating elements */}
              <motion.div 
                className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20"
                style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              </div>
              
              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-primary/60 text-sm line-clamp-2">{card.description}</p>
              </div>
              
              <div className="px-6 pb-6 flex items-center justify-between">
                <span className="text-xs text-primary/40 uppercase tracking-wider px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                  {card.category}
                </span>
              </div>
            </div>
            
            {/* Expanded content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-secondary/95 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center z-10"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                    className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">{card.title}</h3>
                  <p className="text-primary/70 mb-6">{card.fullDescription || card.description}</p>
                  
                  {card.tags && (
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCardGallery;
