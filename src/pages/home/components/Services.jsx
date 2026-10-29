import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const treatments = [
  {
    id: '01',
    title: 'Cuidado de encías',
    category: 'Prevención y salud',
    description:
      'Cuidamos la base de tus dientes con limpiezas suaves y tratamientos indoloros para mantener tus encías firmes y sanas.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    alt: 'Cuidado y salud de encías',
    href: '#contacto',
  },
  {
    id: '02',
    title: 'Diseño de sonrisa',
    category: 'Estética dental',
    description:
      'Aclaramiento seguro y carillas naturales pensadas para realzar tu luz propia sin desgastar de más tus piezas dentales.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Estética dental y diseño de sonrisa',
    href: '#contacto',
  },
  {
    id: '03',
    title: 'Rehabilitación integral',
    category: 'Función y masticación',
    description:
      'Devolvemos la fuerza a tu mordida y la libertad de disfrutar tus comidas favoritas con tranquilidad y sin molestias.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Rehabilitación bucal integral',
    href: '#contacto',
  },
  {
    id: '04',
    title: 'Implantes seguros',
    category: 'Reemplazo definitivo',
    description:
      'Recupera tus dientes perdidos con piezas fijas y cómodas que se sienten, lucen y funcionan como si fueran tuyas.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    alt: 'Implantes dentales biocompatibles',
    href: '#contacto',
  },
  {
    id: '05',
    title: 'Ortodoncia invisible',
    category: 'Alineación moderna',
    description:
      'Alineadores transparentes y cómodos diseñados digitalmente para acomodar tus dientes de forma discreta y progresiva.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    alt: 'Ortodoncia y alineadores invisibles',
    href: '#contacto',
  },
  {
    id: '06',
    title: 'Prótesis confortables',
    category: 'Restauración liviana',
    description:
      'Estructuras ultraligeras y libres de metal adaptadas con precisión para que hables, rías y comas con total confianza.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    alt: 'Prótesis dentales estéticas',
    href: '#contacto',
  },
  {
    id: '07',
    title: 'Odontopediatría cálida',
    category: 'Cuidado infantil',
    description:
      'Acompañamos a los más pequeños con visitas amenas y educativas, creando experiencias positivas y libres de miedo al dentista.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Odontología infantil y prevención',
    href: '#contacto',
  },
  {
    id: '08',
    title: 'Endodoncia sin dolor',
    category: 'Alivio y conservación',
    description:
      'Salvamos tus dientes naturales y eliminamos el dolor dental profundo mediante anestesia localizada de alta precisión.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    alt: 'Tratamiento de endodoncia conservadora',
    href: '#contacto',
  },
];

export default function Services() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const autoplayPlugin = api.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      if (selectedIndex === 0) {
        autoplayPlugin.stop();
        const timer = setTimeout(() => {
          autoplayPlugin.play();
        }, 5000);
        return () => clearTimeout(timer);
      }
    };

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-title"
      className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 border-t border-slate-100"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 sm:mb-12 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 border-b-2 border-sky-600 pb-1">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-800">
              Cuidado y Bienestar Dental
            </span>
          </div>

          <h2
            id="treatments-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]"
          >
            Tu sonrisa en buenas manos, <br />
            <span className="text-sky-600">a tu propio ritmo.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-slate-600">
            Tratamientos pensados para cuidarte con calma, explicaciones claras en todo momento y
            técnicas diseñadas para tu total confort.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            startIndex: 0,
            loop: true,
            slidesToScroll: 'auto',
            breakpoints: {
              '(min-width: 1024px)': { slidesToScroll: 4 },
            },
          }}
          plugins={[
            Autoplay({
              delay: 5500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          {/* Se elimina el margen negativo superior que desbordaba el contenedor */}
          <CarouselContent className="-ml-4 sm:-ml-5">
            {treatments.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 sm:pl-5 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="py-2 h-full">
                  <a
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                    aria-label={`Conocer más sobre ${item.title}`}
                  >
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Etiqueta reducida y rectangular */}
                      <span className="absolute left-3.5 top-3.5 rounded-md border border-slate-200/50 bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-800 shadow-xs backdrop-blur-xs">
                        {item.category}
                      </span>

                      <span
                        aria-hidden="true"
                        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all duration-200 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-105"
                      >
                        <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Tratamiento
                          </span>
                          <span className="text-xl sm:text-2xl font-black text-slate-300 tabular-nums group-hover:text-sky-600 transition-colors">
                            {item.id}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-sky-600">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs sm:text-sm font-bold text-sky-600 group-hover:text-sky-700">
                        <span>Conoce más sobre este cuidado</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Desliza para ver más opciones o déjate guiar por el recorrido
            </p>

            <div className="flex items-center gap-2.5">
              <CarouselPrevious
                aria-label="Ver 4 tratamientos anteriores"
                className="static h-10 w-10 translate-y-0 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-none transition-colors hover:border-sky-600 hover:bg-sky-50 hover:text-sky-600"
              />
              <CarouselNext
                aria-label="Ver siguientes 4 tratamientos"
                className="static h-10 w-10 translate-y-0 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-none transition-colors hover:border-sky-600 hover:bg-sky-50 hover:text-sky-600"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
