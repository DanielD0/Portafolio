/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {  
        '2xl': {'max':'1536px'},
        // => @media (min-width: 1536px) { ... }
        'xl': {'max':'1280px'},
        // => @media (min-width: 1280px) { ... }
        'lg': {'max':'1024px'},
        // => @media (min-width: 1024px) { ... }
        'md': {'max':'768px'},
        // => @media (min-width: 768px) { ... }
        'sm': {'max':'425px'},
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}