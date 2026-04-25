import React from 'react';
import { motion } from 'framer-motion';
import { foodMapping } from '../data/foodMapping';
import { RefreshCcw, Share2 } from 'lucide-react';

interface ResultProps {
  scores: Record<string, number>;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ scores, onReset }) => {
  const getMBTICode = () => {
    let code = "";
    code += scores.EI >= 0 ? "E" : "I";
    code += scores.SN >= 0 ? "S" : "N";
    code += scores.TF >= 0 ? "T" : "F";
    code += scores.JP >= 0 ? "J" : "P";
    return code;
  };

  const code = getMBTICode();
  const result = foodMapping[code];

  if (!result) return <div>Result not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-3xl px-4 py-8"
    >
      <div className="silk-bg rounded-3xl shadow-2xl overflow-hidden thai-border">
        {/* Result Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={result.image} 
            alt={result.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-royal-gold font-bold tracking-widest text-sm mb-1">
              YOUR PERSONALITY TASTES LIKE...
            </h3>
            <h2 className="text-white text-4xl md:text-5xl font-serif">
              {result.name}
            </h2>
          </div>
        </div>

        {/* Result Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-4 py-1 bg-royal-red text-royal-gold rounded-full font-bold text-sm">
              MBTI: {code} ({result.mbti})
            </span>
            {result.traits.map((trait, i) => (
              <span key={i} className="px-4 py-1 bg-royal-gold/10 text-royal-red border border-royal-red/20 rounded-full text-sm font-medium">
                #{trait}
              </span>
            ))}
          </div>

          <p className="text-xl text-thai-charcoal font-sans leading-relaxed mb-10 italic">
            "{result.description}"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-royal-red text-royal-gold 
                         rounded-xl font-bold shadow-lg hover:bg-royal-red/90 transition-all"
            >
              <RefreshCcw className="w-5 h-5" />
              Retake Quiz
            </button>
            <button
              onClick={() => window.alert("Sharing functionality would go here!")}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-royal-red 
                         text-royal-red rounded-xl font-bold hover:bg-royal-red/5 transition-all"
            >
              <Share2 className="w-5 h-5" />
              Share Result
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-royal-red/60 font-medium">
        Spread the flavor with your friends!
      </p>
    </motion.div>
  );
};

export default Result;
