import React from 'react';
import { motion } from 'framer-motion';
import { foodMapping } from '../data/foodMapping';
import { RefreshCcw, Share2, Heart, ShieldAlert, Sparkles, ChefHat } from 'lucide-react';

interface ResultProps {
  scores: Record<string, { left: number; right: number }>;
  tieBreaker: number; // Index of answer to Q10 (0-4)
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ scores, tieBreaker, onReset }) => {
  const getMBTICode = () => {
    let code = "";
    
    // Axis 1: CIR (C vs I)
    if (scores.CIR.left > scores.CIR.right) code += "C";
    else if (scores.CIR.right > scores.CIR.left) code += "I";
    else {
      // Tie-break Q10 is generalized for RS/NE/KA, for CIR we look at Q10 logic: 
      // A,B are usually Calm-ish, D,E are Intense-ish. C is middle.
      code += tieBreaker <= 1 ? "C" : "I"; 
    }

    // Axis 2: RS (R vs S)
    if (scores.RS.left > scores.RS.right) code += "R";
    else if (scores.RS.right > scores.RS.left) code += "S";
    else code += tieBreaker <= 1 ? "R" : "S";

    // Axis 3: NE (N vs E)
    if (scores.NE.left > scores.NE.right) code += "N";
    else if (scores.NE.right > scores.NE.left) code += "E";
    else code += tieBreaker <= 1 ? "N" : "E";

    // Axis 4: KA (K vs A)
    if (scores.KA.left > scores.KA.right) code += "K";
    else if (scores.KA.right > scores.KA.left) code += "A";
    else code += tieBreaker <= 1 ? "K" : "A";

    return code;
  };

  const code = getMBTICode();
  const result = foodMapping[code];

  const handleShare = async () => {
    const shareData = {
      title: 'คุณคืออาหารชาววังชนิดไหน?',
      text: `ฉันได้ผลลัพธ์เป็น "${result?.name}"! ${result?.personality} ลองมาค้นหาตัวตนของคุณผ่านรสชาติไทยโบราณกันเถอะ`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        window.alert("คัดลอกข้อความและลิงก์ผลลัพธ์ลงในคลิปบอร์ดแล้ว!");
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Error sharing:', err);
      }
    }
  };

  if (!result) return <div className="p-10 text-center font-sans">ขออภัย ไม่พบผลลัพธ์ที่ตรงกับรหัส {code}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl px-2 sm:px-4 py-4 sm:py-8"
    >
      <div className="silk-bg rounded-3xl shadow-2xl overflow-hidden thai-border">
        {/* Result Header */}
        <div className="relative h-48 sm:h-64 md:h-96 overflow-hidden">
          <img 
            src={result.image} 
            alt={result.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
            <h3 className="text-royal-gold font-bold tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-sm mb-1 sm:mb-2 font-sans uppercase">
              ตัวตนของคุณคืออาหารชาววังชนิดนี้...
            </h3>
            <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold font-sans">
              {result.name}
            </h2>
          </div>
        </div>

        {/* Result Content */}
        <div className="p-5 sm:p-8 md:p-12">
          {/* Personality Summary */}
          <div className="mb-6 sm:mb-10 p-4 sm:p-6 bg-royal-gold/5 rounded-2xl border-l-4 border-royal-gold">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-royal-red font-bold font-sans text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>ลักษณะนิสัยเด่น (รหัส: {code})</span>
            </div>
            <p className="text-lg sm:text-2xl text-thai-charcoal font-bold font-sans leading-relaxed">
              {result.personality}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Left Column: Details */}
            <div className="space-y-6 sm:space-y-8">
              <section>
                <div className="flex items-center gap-2 text-royal-red font-bold mb-2 sm:mb-3 font-sans text-sm sm:text-base">
                  <ChefHat className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h4>รสชาติและหน้าที่ทางโภชนาการ</h4>
                </div>
                <div className="space-y-3 sm:space-y-4 font-sans text-thai-charcoal leading-relaxed text-sm sm:text-base">
                  <p><span className="font-bold text-royal-red">รสชาติ:</span> {result.taste}</p>
                  <p><span className="font-bold text-royal-red">สมุนไพรเด่น:</span> {result.herbs}</p>
                  <p><span className="font-bold text-royal-red">สรรพคุณ:</span> {result.purpose}</p>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-4">
                <section>
                  <div className="flex items-center gap-2 text-royal-red font-bold mb-2 sm:mb-3 font-sans text-sm sm:text-base">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h4>เข้ากันได้ดีกับ</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.compatible.map((item, i) => (
                      <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs sm:text-sm font-bold font-sans">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-2 text-royal-red font-bold mb-2 sm:mb-3 font-sans text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h4>คู่กัดกับ</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.challenging.map((item, i) => (
                      <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs sm:text-sm font-bold font-sans">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column: Description & Actions */}
            <div className="flex flex-col">
              <div className="flex-1 p-4 sm:p-6 bg-royal-cream rounded-2xl border-2 border-dashed border-royal-gold/40">
                <p className="text-base sm:text-lg text-thai-charcoal font-sans leading-relaxed italic">
                  "{result.description}"
                </p>
              </div>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <button
                  onClick={onReset}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-royal-red text-royal-gold 
                             rounded-xl font-bold shadow-lg hover:bg-royal-red/90 transition-all font-sans text-sm sm:text-base"
                >
                  <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  ทำแบบทดสอบอีกครั้ง
                </button>
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border-2 border-royal-red 
                             text-royal-red rounded-xl font-bold hover:bg-royal-red/5 transition-all font-sans text-sm sm:text-base"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  แชร์ผลลัพธ์
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 sm:mt-8 text-royal-red/60 font-bold font-sans tracking-wide text-xs sm:text-sm">
        สุนทรียภาพแห่งรสชาติไทย สะท้อนผ่านตัวตนของคุณ
      </p>
    </motion.div>
  );
};

export default Result;
