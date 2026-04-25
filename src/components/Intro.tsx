import React from 'react';
import { Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-royal-gold rounded-full shadow-lg">
            <Utensils className="w-12 h-12 text-royal-red" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif text-royal-red mb-4">
          What Thai Food Are You?
        </h1>
        
        <p className="text-xl text-thai-charcoal mb-10 font-sans leading-relaxed">
          Discover your inner flavor. Take our MBTI-inspired personality quiz 
          to find out which iconic Thai dish matches your unique soul.
        </p>

        <button
          onClick={onStart}
          className="px-10 py-4 bg-royal-red text-royal-gold text-xl font-bold rounded-full 
                     shadow-[0_4px_0_0_#660000] hover:shadow-none hover:translate-y-1 
                     transition-all duration-200 border-2 border-royal-gold"
        >
          Begin the Journey
        </button>
        
        <div className="mt-12 flex justify-center gap-4 opacity-50">
          <div className="w-2 h-2 rounded-full bg-royal-gold" />
          <div className="w-2 h-2 rounded-full bg-royal-gold" />
          <div className="w-2 h-2 rounded-full bg-royal-gold" />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
