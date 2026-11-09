import type { Config } from 'tailwindcss'

/**
 * Sistema de diseño KELEK HOME (manual de identidad v1.0).
 *
 * Los componentes siguen usando las clases de siempre (stone-*, amber-*,
 * emerald-*, zinc-*), pero aquí esas escalas se sustituyen por los colores
 * de marca. Para cambiar un color en toda la web, cámbialo solo aquí.
 */

// Neutros cálidos: de Madera natural (50) a Negro carbón (900).
const neutros = {
  50: '#F4EDE2', // Madera natural · fondo claro
  100: '#ECE2D3',
  200: '#E0D3C0',
  300: '#CFBDA6',
  400: '#B39C83',
  500: '#766556',
  600: '#5E5146',
  700: '#463D35',
  800: '#33312E',
  900: '#262624', // Negro carbón · texto y fondo oscuro
  950: '#1B1B19'
}

// Acento: Ocre rafia (500). Sobre 400 y 500 el texto va en Negro carbón.
const ocre = {
  50: '#FBF5EE',
  100: '#F5E8DA',
  200: '#EAD3BB',
  300: '#DDBB99',
  400: '#C99F78',
  500: '#B28358', // Ocre rafia
  600: '#8A613D',
  700: '#735133',
  800: '#5A3F28',
  900: '#43301F',
  950: '#2A1D12'
}

// Verde: Salvia (300) y Eucalipto (500).
const verde = {
  50: '#EEF3EF',
  100: '#DDE6DF',
  200: '#C7D4CA',
  300: '#A3B8A7', // Salvia
  400: '#7F9A89',
  500: '#5F7A6B', // Eucalipto
  600: '#4C6457',
  700: '#3C5046',
  800: '#2E3D36',
  900: '#222D28',
  950: '#18211D'
}

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        stone: neutros,
        zinc: neutros,
        amber: ocre,
        emerald: verde,
        // Nombres de marca, para código nuevo: bg-kelek-madera, text-kelek-carbon…
        kelek: {
          carbon: '#262624',
          madera: '#F4EDE2',
          tierra: '#C3AC93',
          ocre: '#B28358',
          salvia: '#A3B8A7',
          eucalipto: '#5F7A6B',
          veta: '#E7D5B6'
        }
      },
      fontFamily: {
        // Lato es la única familia de la marca. "serif" se conserva como alias
        // de titulares para no tocar los componentes que ya usan font-serif.
        sans: ['Lato', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Lato', 'Arial', 'Helvetica', 'sans-serif']
      },
      // Esquinas más firmes, como en el manual (base 4 px). Las píldoras
      // (rounded-full) no cambian.
      borderRadius: {
        lg: '4px',
        xl: '6px',
        '2xl': '8px',
        '3xl': '12px'
      }
    }
  }
} satisfies Config
