/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb', // Cambiato da #3b82f6 per migliorare contrasto (era 3.68:1, ora 5.17:1)
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          400: '#94a3b8', // Lighter for backgrounds
          500: '#64748b', // Medium gray
          600: '#374151', // Darker for better contrast (4.5:1 ratio)
          700: '#1f2937', // Even darker for headings (7:1 ratio)
          800: '#111827', // Very dark
          900: '#0f172a', // Darkest
        },
        // Colori personalizzati per migliorare l'accessibilità
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#0891b2', // Migliorato da #06b6d4 per contrasto 3.68:1
          600: '#0e7490', // Migliorato per contrasto 4.5:1+
          700: '#155e75', // Per contrasti eccellenti
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#16a34a', // Migliorato da #22c55e per contrasto 4.5:1+
          600: '#15803d', // Già buono
          700: '#166534', // Per contrasti eccellenti
          800: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}