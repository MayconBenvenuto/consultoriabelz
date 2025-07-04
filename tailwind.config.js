/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada
        primary: {
          DEFAULT: '#021d79', // Azul principal
          dark: '#011147',    // Azul escuro
        },
        background: {
          light: '#f6f6f6',   // Fundo claro
        },
        // Mantendo algumas cores do sistema para compatibilidade
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#021d79', // Nosso azul principal
          700: '#011147', // Nosso azul escuro
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
    },
  },
  plugins: [],
}