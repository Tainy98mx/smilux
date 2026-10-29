import { Calendar } from 'lucide-react';
import heroVideo from '../../../assets/hero-video.mp4';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-24 pb-12 sm:pb-16">
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

        {/* Degradado horizontal para legibilidad de textos */}
        <div className="absolute inset-0 bg-linear-to-r from-white from-30% via-white/85 via-44% to-transparent to-56%" />

        {/* Glass degradado superior para el Navbar */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/70 via-white/35 to-transparent backdrop-blur-md mask-[linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)]" />
      </div>

      {/* Contenedor principal alineado a la retícula global */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 flex flex-1 items-center my-auto">
        {/* Bloque de contenido */}
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
          <div className="flex flex-wrap items-center gap-3 pt-1">
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
        </div>
      </div>
    </section>
  );
}
