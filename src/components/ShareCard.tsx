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
      className="fixed left-0 top-0 w-[1080px] h-[1920px] bg-royal-cream p-24 flex flex-col items-center text-center font-sans overflow-hidden -z-[100] pointer-events-none"
      style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/silk.png")',
        border: '60px solid #D4AF37',
        boxSizing: 'border-box',
        transform: 'translateX(-200%)' 
      }}
    >
      {/* Inner Border */}
      <div className="absolute inset-6 border-8 border-royal-gold pointer-events-none" />

      {/* Header */}
      <div className="mt-28 mb-16">
        <h3 className="text-royal-red text-6xl font-bold tracking-[0.3em] uppercase mb-6">
          MBTI FOOD TEST
        </h3>
        <div className="w-72 h-2 bg-royal-gold mx-auto" />
      </div>

      <h1 className="text-royal-red text-8xl font-bold mb-20 leading-tight">
        คุณคืออาหารชาววัง<br/>ชนิดไหน?
      </h1>

      {/* Main Image */}
      <div className="w-[850px] h-[850px] rounded-full overflow-hidden border-[20px] border-royal-gold shadow-2xl mb-20 relative">
        <img 
          src={result.image} 
          alt={result.name}
          crossOrigin="anonymous"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Result Name */}
      <div className="mb-16">
        <p className="text-royal-gold text-5xl font-bold tracking-[0.2em] mb-6 uppercase">
          ตัวตนของคุณคือ...
        </p>
        <h2 className="text-royal-red text-[180px] leading-none font-bold">
          {result.name}
        </h2>
      </div>

      {/* Personality */}
      <div className="w-full bg-royal-gold/10 p-16 rounded-[70px] border-l-[25px] border-royal-gold mb-12">
        <div className="flex items-center justify-center gap-6 mb-8 text-royal-red font-bold text-5xl">
          <Sparkles className="w-14 h-14" />
          <span>ลักษณะนิสัยเด่น (รหัส: {code})</span>
        </div>
        <p className="text-7xl text-thai-charcoal font-bold leading-tight px-4">
          {result.personality}
        </p>
      </div>

      {/* Relationships */}
      <div className="w-full grid grid-cols-2 gap-12 mb-12">
        <div className="bg-green-50 p-10 rounded-[50px] border-4 border-green-200">
          <h4 className="text-green-700 text-4xl font-bold mb-6">เข้ากันได้ดีกับ</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {result.compatible.map((item, i) => (
              <span key={i} className="px-6 py-3 bg-white text-green-700 rounded-2xl text-3xl font-bold border-2 border-green-100">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-red-50 p-10 rounded-[50px] border-4 border-red-200">
          <h4 className="text-red-700 text-4xl font-bold mb-6">คู่กัดกับ</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {result.challenging.map((item, i) => (
              <span key={i} className="px-6 py-3 bg-white text-red-700 rounded-2xl text-3xl font-bold border-2 border-red-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto mb-16 text-royal-red/60 text-5xl font-bold tracking-[0.3em]">
        WWW.MBTIFOOD.COM
      </div>
    </div>
  );
};

export default ShareCard;
