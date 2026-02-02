import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // <--- C'est LA ligne qui compte
  ],
  theme: {
    extend: {
      colors: {
        'conte-blue': '#0A192F',
        'conte-orange': '#F59E0B',
      },
    },
  },
  plugins: [],
};
export default config;