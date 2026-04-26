import React from 'react';
import type { FoodResult } from '../data/foodMapping';
import { Sparkles } from 'lucide-react';

interface ShareCardProps {
  result: FoodResult;
  code: string;
}

const ShareCard: React.FC<ShareCardProps> = ({ result, code }) => {
  return (
    <div 
      id="share-card"
      className="fixed -left-[9999px] top-0 w-[1080px] h-[1920px] bg-royal-cream p-16 flex flex-col items-center text-center font-sans overflow-hidden"
      style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/silk.png")',
        border: '40px solid #D4AF37',
        boxSizing: 'border-box'
      }}
    >
      {/* Inner Border */}
      <div className="absolute inset-4 border-4 border-royal-gold pointer-events-none" />

      {/* Header */}
      <div className="mt-20 mb-12">
        <h3 className="text-royal-red text-4xl font-bold tracking-[0.3em] uppercase mb-4">
          MBTI FOOD TEST
        </h3>
        <div className="w-48 h-1 bg-royal-gold mx-auto" />
      </div>

      <h1 className="text-royal-red text-6xl font-bold mb-16">
        คุณคืออาหารชาววังชนิดไหน?
      </h1>

      {/* Main Image */}
      <div className="w-[800px] h-[800px] rounded-full overflow-hidden border-[15px] border-royal-gold shadow-2xl mb-16 relative">
        <img 
          src={result.image} 
          alt={result.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Result Name */}
      <div className="mb-12">
        <p className="text-royal-gold text-3xl font-bold tracking-[0.2em] mb-4 uppercase">
          ตัวตนของคุณคือ...
        </p>
        <h2 className="text-royal-red text-9xl font-bold">
          {result.name}
        </h2>
      </div>

      {/* Personality */}
      <div className="w-full bg-royal-gold/10 p-12 rounded-[50px] border-l-[15px] border-royal-gold mb-12">
        <div className="flex items-center justify-center gap-4 mb-6 text-royal-red font-bold text-4xl">
          <Sparkles className="w-10 h-10" />
          <span>ลักษณะนิสัยเด่น (รหัส: {code})</span>
        </div>
        <p className="text-5xl text-thai-charcoal font-bold leading-tight">
          {result.personality}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto mb-12 text-royal-red/60 text-3xl font-bold tracking-widest">
        WWW.MBTIFOOD.COM
      </div>
    </div>
  );
};

export default ShareCard;
