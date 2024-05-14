/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        inter: ['"Inter"'],
      },
    },
  },
  //   safelist: ['dark:!text-white'],
  // 	plugins: [require('@tailwindcss/typography')],
};
