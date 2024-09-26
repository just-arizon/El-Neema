const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // NextUI components
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}", // Add Shadcn UI components
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Manrope', 'san-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/images/your-image.jpg')", // Example for custom background image
      },
      keyframes: {
        pulseBorder: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.5)', // Initial box shadow
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)', // Expanded box shadow
          },
          '70%': {
            boxShadow: '0 0 0 20px rgba(255, 255, 255, 0)', // Further expansion
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)', // Reset box shadow
          },
        },
      },
      animation: {
        pulseBorder: 'pulseBorder 2s infinite', // Applying animation to pulseBorder
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [nextui()], // NextUI plugin integration
}
