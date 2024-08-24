const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/images/your-image.jpg')",
      },
      keyframes: {
        pulseBorder: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.5)', // Start with a small shadow
          },
          '70%': {
            boxShadow: '0 0 0 50px rgba(249, 115, 22, 0)', // Expand shadow
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(249, 115, 22, 0)', // Reset shadow
          },
        },
      },
      animation: {
        pulseBorder: 'pulseBorder 2s infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

