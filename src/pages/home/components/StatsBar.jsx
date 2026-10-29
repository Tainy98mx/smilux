import { useEffect, useState } from 'react';
import { Calendar, Users, Award, ShieldCheck } from 'lucide-react';

function useCountUp(targetNumber, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const easeOut = 1 - (1 - progressRatio) * (1 - progressRatio);

      setCount(Math.floor(easeOut * targetNumber));

      if (progressRatio < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration]);

  return count;
}

export default function StatsBar() {
  const yearsExperience = useCountUp(10, 1500);
  const totalPatients = useCountUp(500, 1800);
  const satisfactionRate = useCountUp(99, 1700);
  const proceduresCount = useCountUp(1200, 2000);

  return (
    <section className="relative z-20 w-full bg-slate-950 text-white py-10 sm:py-12 border-y border-slate-800 shadow-xl">
      <div className="w-full px-4 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        
        {/* Métrica 1: Años de experiencia */}
        <div className="flex items-center gap-3.5 group/stat cursor-default">
          <Calendar className="w-9 h-9 text-sky-400 stroke-2 shrink-0 transition-transform duration-200 group-hover/stat:scale-110" />
          <div className="min-w-0">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none tabular-nums">
              +{yearsExperience}{' '}
              <span className="text-xs sm:text-sm font-semibold text-sky-400">años</span>
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-300 leading-snug">
              Trayectoria clínica
            </p>
          </div>
        </div>

        {/* Métrica 2: Pacientes atendidos */}
        <div className="flex items-center gap-3.5 group/stat cursor-default">
          <Users className="w-9 h-9 text-sky-400 stroke-2 shrink-0 transition-transform duration-200 group-hover/stat:scale-110" />
          <div className="min-w-0">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none tabular-nums">
              +{totalPatients}
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-300 leading-snug">
              Pacientes atendidos
            </p>
          </div>
        </div>

        {/* Métrica 3: Procedimientos e implantes */}
        <div className="flex items-center gap-3.5 group/stat cursor-default">
          <ShieldCheck className="w-9 h-9 text-sky-400 stroke-2 shrink-0 transition-transform duration-200 group-hover/stat:scale-110" />
          <div className="min-w-0">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none tabular-nums">
              +{proceduresCount}
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-300 leading-snug">
              Tratamientos exitosos
            </p>
          </div>
        </div>

        {/* Métrica 4: Índice de satisfacción */}
        <div className="flex items-center gap-3.5 group/stat cursor-default">
          <Award className="w-9 h-9 text-sky-400 stroke-2 shrink-0 transition-transform duration-200 group-hover/stat:scale-110" />
          <div className="min-w-0">
            <p className="text-3xl sm:text-4xl font-black text-white leading-none tabular-nums">
              {satisfactionRate}%
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-300 leading-snug">
              Recomendación y confort
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}