import React from 'react';
import { ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 sm:mb-10 flex justify-center">
          <div className="p-4 sm:p-6 bg-royal-gold rounded-full shadow-2xl">
            <ChefHat className="w-12 h-12 sm:w-20 sm:h-20 text-royal-red" />
          </div>
        </div>
        
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-royal-gold mb-3 sm:mb-4 font-sans tracking-[0.2em] sm:tracking-[0.4em] uppercase">
          Royal Thai Cuisine Quiz
        </h2>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-royal-red mb-6 sm:mb-10 font-sans leading-tight">
          คุณคืออาหารชาววัง<br/>ชนิดไหน?
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-thai-charcoal mb-10 sm:mb-16 font-sans leading-relaxed">
          ค้นหาตัวตนที่ซ่อนอยู่ในรสชาติไทยโบราณ<br className="hidden sm:block" />
          ผ่านแบบทดสอบบุคลิกภาพที่สะท้อนถึงสุนทรียภาพแห่งสำรับชาววัง
        </p>

        <button
          onClick={onStart}
          className="px-10 py-5 sm:px-16 sm:py-7 bg-royal-red text-royal-gold text-2xl sm:text-4xl font-bold rounded-full 
                     shadow-[0_6px_0_0_#660000] active:shadow-none active:translate-y-1 
                     transition-all duration-200 border-[3px] border-royal-gold font-sans"
        >
          เริ่มค้นหาตัวตน
        </button>
        
        <div className="mt-16 sm:mt-24 flex justify-center gap-6 opacity-30">
          <div className="w-3 h-3 rounded-full bg-royal-gold" />
          <div className="w-3 h-3 rounded-full bg-royal-gold" />
          <div className="w-3 h-3 rounded-full bg-royal-gold" />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
