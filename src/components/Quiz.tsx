import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

interface QuizProps {
  onComplete: (scores: Record<string, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  });

  const handleAnswer = (dimension: string, value: number) => {
    const newAnswers = {
      ...answers,
      [dimension]: answers[dimension] + value
    };
    
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-royal-red font-bold mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-royal-gold/30">
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="silk-bg p-8 md:p-12 rounded-2xl shadow-xl thai-border"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-thai-charcoal mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.dimension, option.value)}
                className="w-full p-5 text-left text-lg font-sans border-2 border-royal-gold/20 
                           rounded-xl hover:border-royal-red hover:bg-royal-red/5 
                           transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full 
                                 bg-royal-gold/10 text-royal-red font-bold group-hover:bg-royal-red group-hover:text-royal-gold">
                    {idx === 0 ? 'A' : 'B'}
                  </span>
                  <span className="flex-1 text-thai-charcoal group-hover:text-royal-red">
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
