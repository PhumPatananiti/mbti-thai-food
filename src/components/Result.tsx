import React from 'react';
import { motion } from 'framer-motion';
import { foodMapping } from '../data/foodMapping';
import { RefreshCcw, Share2, Heart, ShieldAlert, Sparkles, ChefHat, Image } from 'lucide-react';
import { toPng } from 'html-to-image';
import ShareCard from './ShareCard';

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

  const handleDownloadImage = async () => {
    const node = document.getElementById('share-card');
    if (!node) {
      window.alert("ไม่พบส่วนประกอบสำหรับสร้างรูปภาพ");
      return;
    }

    try {
      // Show loading indicator or change button state if you had one
      // window.alert("กำลังสร้างรูปภาพ กรุณารอครู่หนึ่ง...");

      // Ensure all images are loaded
      const images = node.getElementsByTagName('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      }));

      // Slightly longer delay for fonts and complex styles
      await new Promise(resolve => setTimeout(resolve, 1000));

      const dataUrl = await toPng(node, {
        cacheBust: true,
        width: 1080,
        height: 1920,
        backgroundColor: '#FDF5E6',
        pixelRatio: 1,
        skipAutoScale: true,
        style: {
          transform: 'none',
          left: '0',
          top: '0',
        }
      });
      
      const link = document.createElement('a');
      link.download = `mbti-food-${result?.name || 'result'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Detailed error generating image:', err);
      // Fallback attempt with slightly different options if first one fails
      try {
        const dataUrl = await toPng(node, { 
          backgroundColor: '#FDF5E6',
          width: 1080,
          height: 1920,
        });
        const link = document.createElement('a');
        link.download = `mbti-food-result-alt.png`;
        link.href = dataUrl;
        link.click();
      } catch (secondErr) {
        console.error('Final error:', secondErr);
        window.alert("ไม่สามารถสร้างรูปภาพได้เนื่องจากข้อจำกัดของเบราว์เซอร์ (CORS) หรือความเร็วอินเทอร์เน็ต กรุณาลองเปลี่ยนเบราว์เซอร์หรือลองใหม่อีกครั้ง");
      }
    }
  };

  if (!result) return <div className="p-10 text-center font-sans">ขออภัย ไม่พบผลลัพธ์ที่ตรงกับรหัส {code}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12"
    >
      <ShareCard result={result} code={code} />
      
      <div className="silk-bg rounded-[2.5rem] shadow-2xl overflow-hidden thai-border">
        {/* Result Header */}
        <div className="relative h-64 sm:h-96 md:h-[32rem] overflow-hidden">
          <img 
            src={result.image} 
            alt={result.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10">
            <h3 className="text-royal-gold font-bold tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-lg mb-2 sm:mb-4 font-sans uppercase">
              ตัวตนของคุณคืออาหารชาววังชนิดนี้...
            </h3>
            <h2 className="text-white text-4xl sm:text-7xl md:text-8xl font-bold font-sans">
              {result.name}
            </h2>
          </div>
        </div>

        {/* Result Content */}
        <div className="p-8 sm:p-12 md:p-16">
          {/* Personality Summary */}
          <div className="mb-10 sm:mb-16 p-6 sm:p-10 bg-royal-gold/5 rounded-3xl border-l-8 border-royal-gold">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5 text-royal-red font-bold font-sans text-lg sm:text-xl">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>ลักษณะนิสัยเด่น (รหัส: {code})</span>
            </div>
            <p className="text-2xl sm:text-4xl text-thai-charcoal font-bold font-sans leading-relaxed">
              {result.personality}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
            {/* Left Column: Details */}
            <div className="space-y-10 sm:space-y-12">
              <section>
                <div className="flex items-center gap-3 text-royal-red font-bold mb-4 sm:mb-6 font-sans text-lg sm:text-xl">
                  <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h4>รสชาติและหน้าที่ทางโภชนาการ</h4>
                </div>
                <div className="space-y-4 sm:space-y-6 font-sans text-thai-charcoal leading-relaxed text-lg sm:text-2xl">
                  <p><span className="font-bold text-royal-red">รสชาติ:</span> {result.taste}</p>
                  <p><span className="font-bold text-royal-red">สมุนไพรเด่น:</span> {result.herbs}</p>
                  <p><span className="font-bold text-royal-red">จุดเด่น:</span> {result.purpose}</p>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-10">
                <section>
                  <div className="flex items-center gap-3 text-royal-red font-bold mb-4 sm:mb-6 font-sans text-lg sm:text-xl">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                    <h4>เข้ากันได้ดีกับ</h4>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {result.compatible.map((item, i) => (
                      <span key={i} className="px-5 py-2 sm:px-6 sm:py-3 bg-green-50 text-green-700 border-2 border-green-200 rounded-xl text-sm sm:text-xl font-bold font-sans">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 text-royal-red font-bold mb-4 sm:mb-6 font-sans text-lg sm:text-xl">
                    <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8" />
                    <h4>คู่กัดกับ</h4>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {result.challenging.map((item, i) => (
                      <span key={i} className="px-5 py-2 sm:px-6 sm:py-3 bg-red-50 text-red-700 border-2 border-red-200 rounded-xl text-sm sm:text-xl font-bold font-sans">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column: Description & Actions */}
            <div className="flex flex-col">
              <div className="flex-1 p-6 sm:p-10 bg-royal-cream rounded-3xl border-4 border-dashed border-royal-gold/40">
                <p className="text-xl sm:text-3xl text-thai-charcoal font-sans leading-relaxed italic">
                  "{result.description}"
                </p>
              </div>

              <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6">
                <button
                  onClick={handleDownloadImage}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-gradient-to-tr from-emerald-600 to-teal-500 text-white 
                             rounded-2xl font-bold shadow-xl hover:opacity-90 transition-all font-sans text-lg sm:text-2xl"
                >
                  <Image className="w-6 h-6 sm:w-8 sm:h-8" />
                  บันทึกเป็นรูปภาพ
                </button>
                
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 border-4 border-royal-red 
                             text-royal-red rounded-2xl font-bold hover:bg-royal-red/5 transition-all font-sans text-lg sm:text-2xl"
                >
                  <Share2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  แชร์ลิงก์ผลลัพธ์
                </button>

                <button
                  onClick={onReset}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-royal-red text-royal-gold 
                             rounded-2xl font-bold shadow-xl hover:bg-royal-red/90 transition-all font-sans text-lg sm:text-2xl"
                >
                  <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8" />
                  ทำแบบทดสอบอีกครั้ง
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 sm:mt-16 text-royal-red/60 font-bold font-sans tracking-[0.2em] text-sm sm:text-xl">
        สุนทรียภาพแห่งรสชาติไทย สะท้อนผ่านตัวตนของคุณ
      </p>
    </motion.div>

  );
};

export default Result;
