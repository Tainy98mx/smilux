// Estructura ordenada por intención de búsqueda del paciente
export const menuStructure = [
  {
    title: 'Inicio',
    subitems: [],
  },
  {
    title: 'Tratamientos',
    subitems: [
      'Ortodoncia Invisible',
      'Implantes Dentales',
      'Diseño de Sonrisa',
      'Blanqueamiento Dental',
      'Odontología Integral',
    ],
  },
  {
    title: 'Nosotros',
    subitems: ['Dra. Janet & Equipo', 'Nuestras Instalaciones', 'Tecnología 3D'],
  },
  {
    title: 'Casos Clínicos',
    subitems: [],
  },
  {
    title: 'Contacto',
    subitems: [],
  },
];

// Generador de slugs limpios para los IDs del documento (#tratamientos, #dra-janet-equipo, etc.)
export const getSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quita acentos (clínicos -> clinicos)
    .replace(/&/g, '') // Quita ampersands
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza espacios y símbolos por guiones
    .replace(/^-+|-+$/g, ''); // Remueve guiones sueltos en extremos
};

// Determina qué categoría principal está activa según el hash actual en la URL
export const getActiveCategory = (currentHash) => {
  if (!currentHash || currentHash === '#' || currentHash === '#inicio') {
    return 'Inicio';
  }

  const cleanHash = currentHash.replace('#', '');

  for (const menu of menuStructure) {
    if (getSlug(menu.title) === cleanHash) {
      return menu.title;
    }
    if (menu.subitems && menu.subitems.length > 0) {
      const matchSubitem = menu.subitems.some((sub) => getSlug(sub) === cleanHash);
      if (matchSubitem) {
        return menu.title;
      }
    }
  }

  return '';
};
