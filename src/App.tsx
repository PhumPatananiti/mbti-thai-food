import { useState } from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';

type View = 'intro' | 'quiz' | 'result';

function App() {
  const [view, setView] = useState<View>('intro');
  const [scores, setScores] = useState<Record<string, { left: number; right: number }>>({
    CIR: { left: 0, right: 0 },
    RS: { left: 0, right: 0 },
    NE: { left: 0, right: 0 },
    KA: { left: 0, right: 0 }
  });
  const [tieBreaker, setTieBreaker] = useState(0);

  const handleStart = () => setView('quiz');
  
  const handleComplete = (finalScores: Record<string, { left: number; right: number }>, tieBreakerIdx: number) => {
    setScores(finalScores);
    setTieBreaker(tieBreakerIdx);
    setView('result');
  };

  const handleReset = () => {
    setScores({
      CIR: { left: 0, right: 0 },
      RS: { left: 0, right: 0 },
      NE: { left: 0, right: 0 },
      KA: { left: 0, right: 0 }
    });
    setTieBreaker(0);
    setView('intro');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-2 sm:p-4">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-royal-gold/10 rounded-full blur-3xl -mr-32 -mt-32 sm:-mr-48 sm:-mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-royal-red/5 rounded-full blur-3xl -ml-32 -mb-32 sm:-ml-48 sm:-mb-48" />
      </div>

      <main className="w-full flex justify-center py-8">
        {view === 'intro' && <Intro onStart={handleStart} />}
        {view === 'quiz' && <Quiz onComplete={handleComplete} />}
        {view === 'result' && <Result scores={scores} tieBreaker={tieBreaker} onReset={handleReset} />}
      </main>
      
      {/* Footer Branding */}
      <footer className="w-full text-center pb-6 px-4 text-royal-red/40 text-[10px] sm:text-sm font-bold tracking-[0.1em] sm:tracking-widest uppercase font-sans">
        สุนทรียภาพแห่งรสชาติไทย • Royal Thai Cuisine Personality Quiz
      </footer>
    </div>
  );
}

export default App;
