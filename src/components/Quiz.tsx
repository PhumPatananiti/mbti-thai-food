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
    <div className="w-full max-w-4xl px-4 sm:px-6 py-6 sm:py-12">
      {/* Progress Bar */}
      <div className="mb-8 sm:mb-12">
        <div className="flex justify-between text-royal-red font-bold mb-3 sm:mb-4 font-sans text-lg sm:text-2xl">
          <span>คำถามที่ {currentIndex + 1} จาก {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-3 sm:h-5 bg-gray-200 rounded-full overflow-hidden border-2 border-royal-gold/30">
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
          className="silk-bg p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-2xl thai-border"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-thai-charcoal mb-10 sm:mb-14 leading-tight font-sans">
            {currentQuestion.text}
          </h2>

          <div className="grid gap-4 sm:gap-6">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.dimension, option.value, idx)}
                className="w-full p-5 sm:p-8 text-left text-xl sm:text-2xl md:text-3xl font-sans border-[3px] border-royal-gold/20 
                           rounded-3xl hover:border-royal-red hover:bg-royal-red/5 active:bg-royal-red/10
                           transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-full 
                                 bg-royal-gold/10 text-royal-red font-bold text-lg sm:text-2xl group-hover:bg-royal-red group-hover:text-royal-gold transition-colors">
                    {String.fromCharCode(64 + idx + 1)}
                  </span>
                  <span className="flex-1 text-thai-charcoal group-hover:text-royal-red font-medium">
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
  );
};

export default Quiz;
