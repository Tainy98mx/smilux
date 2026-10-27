import { Calendar } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';
import { Button } from '../../ui/button';
import { menuStructure, getSlug, getActiveCategory } from '../../../data/navData';

export default function NavDesk({ currentHash }) {
  const activeCategory = getActiveCategory(currentHash);
  const currentCleanHash = (currentHash || '').replace('#', '');

  return (
    <div className="hidden xl:flex items-center gap-5 shrink-0">
      <NavigationMenu className="shrink-0">
        <NavigationMenuList className="gap-2">
          {menuStructure.map((menu) => {
            const parentSlug = getSlug(menu.title);
            const isActiveParent = menu.title === activeCategory;
            const hasSubitems = menu.subitems && menu.subitems.length > 0;

            // Enlaces directos (sin submenú)
            if (!hasSubitems) {
              return (
                <NavigationMenuItem key={parentSlug} className="relative shrink-0">
                  <NavigationMenuLink asChild>
                    <a
                      href={`#${parentSlug}`}
                      className={`text-slate-900 group/trigger relative px-4 py-2 text-lg lg:text-[19px] tracking-wide whitespace-nowrap transition-colors duration-150 cursor-pointer rounded-xl hover:bg-slate-900/5 
                      after:content-[''] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-1 after:bg-sky-600 after:rounded-full after:origin-center after:transition-transform after:duration-200 after:ease-out
                      ${
                        isActiveParent
                          ? 'after:scale-x-100 font-bold text-sky-700'
                          : 'after:scale-x-0 hover:after:scale-x-100 font-semibold'
                      }`}
                    >
                      <span className="inline-grid [grid-template-areas:'stack'] items-center justify-center">
                        <span className="[grid-area:stack] invisible font-bold pointer-events-none select-none">
                          {menu.title}
                        </span>
                        <span
                          className={`[grid-area:stack] transition-all duration-200 ease-out ${
                            isActiveParent
                              ? 'font-bold'
                              : 'font-semibold group-hover/trigger:font-bold'
                          }`}
                        >
                          {menu.title}
                        </span>
                      </span>
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            // Enlaces con menú desplegable
            return (
              <NavigationMenuItem key={parentSlug} className="relative shrink-0">
                <NavigationMenuTrigger
                  onClick={() => {
                    window.location.hash = `#${parentSlug}`;
                  }}
                  className={`text-slate-900 group/trigger relative px-4 py-2 text-lg lg:text-[19px] tracking-wide whitespace-nowrap transition-colors duration-150 cursor-pointer rounded-xl hover:bg-slate-900/5 data-[state=open]:bg-slate-900/5 
                  after:content-[''] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-1 after:bg-sky-600 after:rounded-full after:origin-center after:transition-transform after:duration-200 after:ease-out
                  ${
                    isActiveParent
                      ? 'after:scale-x-100 text-sky-700'
                      : 'after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100'
                  }`}
                >
                  <span className="inline-grid [grid-template-areas:'stack'] items-center justify-center">
                    <span className="[grid-area:stack] invisible font-bold pointer-events-none select-none">
                      {menu.title}
                    </span>
                    <span
                      className={`[grid-area:stack] transition-all duration-200 ease-out ${
                        isActiveParent
                          ? 'font-bold'
                          : 'font-semibold group-hover/trigger:font-bold group-data-[state=open]/trigger:font-bold'
                      }`}
                    >
                      {menu.title}
                    </span>
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-transparent! p-0! border-0! shadow-none!">
                  {/* Tarjeta con ancho uniforme w-64 */}
                  <ul className="flex flex-col gap-0 w-64 p-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 text-slate-800">
                    {menu.subitems.map((subitem) => {
                      const subSlug = getSlug(subitem);
                      const isSubActive = currentCleanHash === subSlug;

                      return (
                        <li key={subSlug} className="w-full">
                          <NavigationMenuLink asChild>
                            <a
                              href={`#${subSlug}`}
                              className={`group/sub block w-full select-none rounded-xl px-4 py-2.5 text-[15px] leading-tight whitespace-nowrap no-underline outline-none transition-all duration-200 ease-out cursor-pointer ${
                                isSubActive
                                  ? 'bg-sky-50 text-sky-700 font-bold'
                                  : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700 focus:bg-sky-50 focus:text-sky-700'
                              }`}
                            >
                              <span className="inline-grid [grid-template-areas:'stack'] items-center pointer-events-none">
                                {/* Base oculta con font-bold para reservar el espacio sin saltos */}
                                <span className="[grid-area:stack] invisible font-bold select-none">
                                  {subitem}
                                </span>
                                {/* Texto animado: reacciona al hover de todo el contenedor <a> */}
                                <span
                                  className={`[grid-area:stack] transition-all duration-200 ease-out ${
                                    isSubActive
                                      ? 'font-bold [text-shadow:0_0_0.6px_currentColor]'
                                      : 'font-medium group-hover/sub:font-bold group-hover/sub:[text-shadow:0_0_0.6px_currentColor]'
                                  }`}
                                >
                                  {subitem}
                                </span>
                              </span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botón Agendar Cita */}
      <Button
        asChild
        className="bg-sky-600 text-white font-bold h-11 px-6 text-base rounded-xl shadow-md border border-transparent hover:bg-sky-700 hover:scale-103 active:scale-95 transition-all duration-200 group shrink-0 transform-gpu cursor-pointer select-none"
      >
        <a href="#contacto" className="flex items-center gap-2">
          <Calendar className="w-5 h-5 shrink-0 stroke-[2.5] transition-transform duration-200 group-hover:scale-110" />
          <span>Agendar Cita</span>
        </a>
      </Button>
    </div>
  );
}
