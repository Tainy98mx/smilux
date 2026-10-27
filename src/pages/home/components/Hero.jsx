import { useEffect, useState } from 'react';
import { Calendar, Users, HeartHandshake } from 'lucide-react';
import heroVideo from '../../../assets/hero-video.mp4';

// Hook para animar números ascendentes
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

export default function Hero() {
  const yearsExperience = useCountUp(10, 1600);
  const totalPatients = useCountUp(500, 2000);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-24 pb-10">
      {/* Fondo: video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 right-0 h-full w-auto min-w-full max-w-none object-cover translate-x-[22%] lg:translate-x-[18%]"
        />

        {/* Degradado horizontal para mejorar la lectura */}
        <div className="absolute inset-0 bg-linear-to-r from-white from-30% via-white/85 via-44% to-transparent to-56%" />

        {/* Glass degradado superior */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/70 via-white/35 to-transparent backdrop-blur-md mask-[linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)]" />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 flex flex-1 items-center my-auto">
        {/* Bloque principal */}
        <div className="w-full lg:w-7/12 xl:w-6/12 flex flex-col gap-8 lg:gap-9 py-8 lg:py-10 max-w-2xl">
          {/* Etiqueta clínica */}
          <div className="flex items-center gap-3 border-l-2 border-sky-600 pl-3">
            <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-slate-800">
              Atención Clínica Especializada
            </span>
          </div>

          {/* Titular principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Tu sonrisa merece <br />
            <span className="text-sky-600">atención experta.</span>
          </h1>

          {/* Descripción */}
          <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-xl leading-relaxed">
            Queremos que te sientas cómodo desde el primer momento, con atención personalizada,
            tecnología moderna y un equipo dispuesto a acompañarte.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 hover:scale-103 active:scale-95 text-white font-bold text-base sm:text-lg shadow-md shadow-sky-600/25 transition-all duration-200 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 stroke-[2.5] group-hover:scale-115 group-hover:rotate-6 transition-transform duration-200" />
              <span>Agendar una cita</span>
            </a>

            <a
              href="#tratamientos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 hover:scale-102 active:scale-95 text-slate-900 font-bold text-base sm:text-lg border border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Ver tratamientos</span>
            </a>
          </div>

          {/* Indicadores: clases canónicas stroke-2 aplicadas */}
          <div className="mt-2 pt-7 border-t border-slate-300/80 max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {/* Indicador 1: Experiencia */}
            <div className="group/item flex items-center gap-3 cursor-default select-none">
              <Calendar className="w-9 h-9 shrink-0 text-sky-600 stroke-2 transition-colors duration-200 group-hover/item:animate-icon-bounce group-hover/item:text-sky-500" />

              <div className="min-w-0">
                <p className="text-3xl sm:text-4xl font-black text-sky-600 leading-none tabular-nums whitespace-nowrap">
                  +{yearsExperience}{' '}
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">años</span>
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Experiencia
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                  profesional
                </p>
              </div>
            </div>

            {/* Indicador 2: Pacientes atendidos */}
            <div className="group/item flex items-center gap-3 cursor-default select-none">
              <Users className="w-9 h-9 shrink-0 text-sky-600 stroke-2 transition-colors duration-200 group-hover/item:animate-icon-shift group-hover/item:text-sky-500" />

              <div className="min-w-0">
                <p className="text-3xl sm:text-4xl font-black text-sky-600 leading-none tabular-nums whitespace-nowrap">
                  +{totalPatients}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Pacientes
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                  atendidos
                </p>
              </div>
            </div>

            {/* Indicador 3: Atención personalizada */}
            <div className="group/item flex items-center gap-3 cursor-default select-none">
              <HeartHandshake className="w-9 h-9 shrink-0 text-sky-600 stroke-2 transition-colors duration-200 group-hover/item:animate-icon-pulse group-hover/item:text-sky-500" />

              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-sky-600 leading-none">
                  Atención
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Personalizada
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Trato cercano
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
