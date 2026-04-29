import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

interface QuizProps {
  onComplete: (scores: Record<string, { left: number; right: number }>, tieBreaker: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, { left: number; right: number }>>({
    CIR: { left: 0, right: 0 },
    RS: { left: 0, right: 0 },
    NE: { left: 0, right: 0 },
    KA: { left: 0, right: 0 }
  });

  const handleAnswer = (dimension: string, value: { left: number; right: number }, optionIndex: number) => {
    const newScores = { ...scores };
    
    if (dimension === 'ALL') {
      // For Q10 (Tie-break), we add to all relevant dimensions (though logic only needs the index)
      // But based on เกณฑ์.md, Q10 maps to R/S, N/E, K/A simultaneously
      ['RS', 'NE', 'KA'].forEach(dim => {
        newScores[dim].left += value.left;
        newScores[dim].right += value.right;
      });
    } else {
      newScores[dimension].left += value.left;
      newScores[dimension].right += value.right;
    }
    
    setScores(newScores);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newScores, optionIndex);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 py-8 sm:py-16">
      {/* Progress Bar */}
      <div className="mb-10 sm:mb-16">
        <div className="flex justify-between text-royal-red font-bold mb-4 sm:mb-6 font-sans text-xl sm:text-3xl">
          <span>คำถามที่ {currentIndex + 1} จาก {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-4 sm:h-7 bg-gray-200 rounded-full overflow-hidden border-2 border-royal-gold/30">
          <motion.div 
            className="h-full bg-royal-red"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="silk-bg p-10 sm:p-16 md:p-20 rounded-[3rem] shadow-2xl thai-border"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-thai-charcoal mb-12 sm:mb-20 leading-tight font-sans">
            {currentQuestion.text}
          </h2>

          <div className="grid gap-6 sm:gap-8">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.dimension, option.value, idx)}
                className="w-full p-6 sm:p-10 text-left text-2xl sm:text-3xl md:text-4xl font-sans border-[4px] border-royal-gold/20 
                           rounded-[2rem] hover:border-royal-red hover:bg-royal-red/5 active:bg-royal-red/10
                           transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-full 
                                 bg-royal-gold/10 text-royal-red font-bold text-xl sm:text-3xl group-hover:bg-royal-red group-hover:text-royal-gold transition-colors">
                    {String.fromCharCode(64 + idx + 1)}
                  </span>
                  <span className="flex-1 text-thai-charcoal group-hover:text-royal-red font-bold">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
