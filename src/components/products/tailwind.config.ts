import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#1a6076',
        'primary-teal-dark': '#155566',
        'dark-navy': '#1a2238',
        'orange-accent': '#e67e22',
        'orange-accent-hover': '#d35400',
        'beige-bg': '#f8f7f7',
      },
      fontFamily: {
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
