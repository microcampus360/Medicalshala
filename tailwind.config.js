/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('src/assets/IndexPage/background.jpg')",
        'ayurvedic-care-background': "url('src/assets/AyurvedicCare/ayurvedic-care.jpg')",
        'wellness-plans-background': "url('src/assets/WellnessPlans/wellness-background.png')",
        'cancer-care-background': "url('src/assets/CancerCare/cancer-care-background.png')",
      }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },

  plugins: [],
}

