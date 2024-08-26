/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone5': { 'raw': '(min-width: 320px) and (max-width: 374px)' },  
        'iphone15pm': { 'raw': '(min-width: 375px) and (max-width: 430px)' }, 
      },
      colors: {
        'yellow': "#FFF9AF",
        "subtle-yellow": "#fffdf2",
        "desaturated-teal": "#0a2323",
        "greenish-blue": "#4c5b5c",
      },
      fontSize: {
        '32px': '32px',
        '44px': '44px',
      },
      margin: {
        
      }
    },
  },
  plugins: [],
};
