// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // Include this line for Next.js app directory structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
