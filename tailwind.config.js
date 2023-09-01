/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['"Overpass"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif']
      },
      colors: {
        // ### Primary
        "Lightred (CTA text)": "hsl(356, 100%, 66%)",
        "Verylightred (CTA hover background)": "hsl(355, 100%, 74%)",
        "Verydarkblue": "hsl(208, 49%, 24%)",
        // ### Neutral
        "White": "hsl(0, 0%, 100%)",
        "Grayishbluetext": "hsl(240, 2%, 79%)",
        "Verydarkgrayishblue": "hsl(207, 13%, 34%)",
        "Verydarkblackblue": "hsl(240, 10%, 16%)",
        // ### Gradient
        // Background gradient Intro/CTA mobile nav:
        "Verylightred": "hsl(13, 100%, 72%)",
        "Lightred": "hsl(353, 100%, 62%)",
        // Background gradient body:
        "Verydarkgrayblue": "hsl(237, 17%, 21%)",
        "Verydarkdesaturatedblue": "hsl(237, 23%, 32%)",
        "DesvanecidoBlack":"rgba(0, 0, 0, 0.219)"
      },
      backgroundImage: {
        'hero-mobile': "url('/images/bg-pattern-intro-mobile.svg')",
        'hero-desktop': "url('/images/bg-pattern-intro-desktop.svg')",
        'circles': "url('images/bg-pattern-circles.svg')",
      },
    },
  },
  plugins: [],
}

