/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra': ['"Chakra Petch"', ...defaultTheme.fontFamily.sans],
        'nun' :['"Nunito Sans"', ...defaultTheme.fontFamily.sans]
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      boxShadow: {
        'custom': '5px 5px 12px #00000035',
      },
      screens: {
        'MobileM': '375px',
        // => @media (min-width: 375px) { ... }
        'MobileL': '425px',
        // => @media (min-width: 425px) { ... }
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    }
  },
  variants: {
    extend: {
      scrollBehavior: ['motion-reduce'],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}