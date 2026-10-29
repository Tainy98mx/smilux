import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

function Facebook({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Instagram({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Youtube({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      {/* Mismo margen horizontal global */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Identidad de la Clínica */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                Dra. Janet
              </span>
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                Clínica Odontológica
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Atención dental especializada orientada a la salud, función y estética de tu sonrisa,
              con tecnología clínica avanzada y trato humano.
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Oaxaca de Juárez, Oaxaca</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+529510000000" className="hover:text-white transition-colors">
                  +52 (951) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:contacto@drajanet.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@drajanet.com
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Enlaces rápidos
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              <li>
                <a href="#inicio" className="hover:text-sky-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-sky-400 transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-sky-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-sky-400 transition-colors">
                  Casos Clínicos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-sky-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-sky-400 transition-colors">
                  Agendar Cita
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Síguenos
            </h3>
            <p className="text-sm text-slate-400">
              Conoce casos clínicos reales y recomendaciones de higiene en nuestras redes:
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-500 hover:bg-sky-950/40 transition-all active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-500 hover:bg-sky-950/40 transition-all active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-500 hover:bg-sky-950/40 transition-all active:scale-95"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-500 hover:bg-sky-950/40 transition-all active:scale-95"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y Políticas */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Clínica Odontológica Dra. Janet. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#aviso" className="hover:text-slate-300 transition-colors">
              Aviso de privacidad
            </a>
            <a href="#terminos" className="hover:text-slate-300 transition-colors">
              Términos y condiciones
            </a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
