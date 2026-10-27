import { useState, useEffect, useRef } from 'react';
import NavDesk from './NavDesk';

export default function Header() {
  const [scrollState, setScrollState] = useState({
    isScrolledHero: false,
    isPassedHero: false,
  });
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  const heroTransitionPointRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const updateHeroTransitionPoint = () => {
      const windowHeight = window.innerHeight || 800;
      const HEADER_HEIGHT = 75;
      heroTransitionPointRef.current = Math.max(100, windowHeight - HEADER_HEIGHT * 1.5);
    };

    updateHeroTransitionPoint();
    window.addEventListener('resize', updateHeroTransitionPoint, { passive: true });

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);
          const newIsScrolledHero = currentScrollY > 10;
          const newIsPassedHero = currentScrollY >= heroTransitionPointRef.current;

          setScrollState((prev) => {
            if (
              prev.isScrolledHero !== newIsScrolledHero ||
              prev.isPassedHero !== newIsPassedHero
            ) {
              return {
                isScrolledHero: newIsScrolledHero,
                isPassedHero: newIsPassedHero,
              };
            }
            return prev;
          });

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateHeroTransitionPoint);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage =
    !currentHash || currentHash === '#' || currentHash === '#inicio' || currentHash === '#hero';

  const showGlass = isHomePage && scrollState.isScrolledHero && !scrollState.isPassedHero;
  const showSolid = !isHomePage || scrollState.isPassedHero;
  const isCompact = !isHomePage || scrollState.isPassedHero;

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', ' ');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-slate-900 transition-all duration-300 ease-out overflow-visible ${
        isCompact ? 'h-16 sm:h-17 lg:h-18' : 'h-18 sm:h-19 lg:h-20'
      }`}
    >
      {/* Fondo efecto Glass Claro */}
      <div
        className={`absolute inset-0 bg-white/70 xl:bg-white/40 xl:backdrop-blur-md transition-opacity duration-300 ease-out -z-10 pointer-events-none border-b border-slate-200/60 ${
          showGlass ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Fondo Sólido Institucional */}
      <div
        className={`absolute inset-0 bg-white/95 border-b border-slate-200 shadow-sm transition-opacity duration-300 ease-out -z-10 pointer-events-none ${
          showSolid ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="h-full w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3 lg:gap-8 overflow-visible">
        {/* Identidad de Marca en Color Oscuro */}
        <a
          href="#"
          onClick={handleLogoClick}
          aria-label="Clínica Dra. Janet - Inicio"
          className="group flex flex-col shrink-0 transition-transform duration-200 hover:scale-102 select-none cursor-pointer"
        >
          <span
            className={`font-black tracking-tight text-slate-950 uppercase transition-all duration-300 ${
              isCompact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            DRA. JANET
          </span>
          <span className="text-[11px] tracking-widest text-sky-600 font-bold uppercase -mt-0.5">
            Clínica Odontológica
          </span>
        </a>

        {/* Navegación Desktop */}
        <NavDesk currentHash={currentHash} />
      </div>
    </header>
  );
}
