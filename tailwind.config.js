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
        'iphone5': { 'raw': '(min-width: 320px) and (max-width: 359px)' },  
        'iphone10': { 'raw': '(min-width: 360px) and (max-width: 374px)' },  
        'iphone15pm': { 'raw': '(min-width: 375px) and (max-width: 400px)' }, 
        'iphone15pro': { 'raw': '(min-width: 401px) and (max-width: 430px)' }, 
      },
      colors: {
        "pastel":"#fffdf2",
        'yellow': "#FFF9AF",
        "subtle-yellow": "#fffdf2",
        "desaturated-teal": "#0a2323",
        "greenish-blue": "#4c5b5c",
        "dark-yellow": "#ecc831",
        "black":"#0a2323"
      },
      fontSize: {
        '15px': '15px',
        '19px': '19px',
        '22px': '22px',
        '32px': '32px',
        '40px': '40px',
        '44px': '44px',
        '56px': '56px',
      },
      margin: {
        
      }
    },
  },
  plugins: [],
};
