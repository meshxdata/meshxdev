/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        inter: ['"Inter"'],
        typography: {
          DEFAULT: {
            css: {
              h1: {
                fontSize: '2.25rem', // 36px
                fontWeight: '700',  // bold
                lineHeight: '2.5rem', // 40px
                color: '#1a202c', // Tailwind's gray-900
              },
              h2: {
                fontSize: '1.875rem', // 30px
                fontWeight: '600',  // semi-bold
                lineHeight: '2.25rem', // 36px
                color: '#2d3748', // Tailwind's gray-800
              },
              h3: {
                fontSize: '1.5rem', // 24px
                fontWeight: '600',  // semi-bold
                lineHeight: '2rem', // 32px
                color: '#4a5568', // Tailwind's gray-700
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
