import daisyui from "daisyui";
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balsamiq: ['"Balsamiq Sans"', 'sans-serif'],
      },
      colors: {
        kuning : {
          muda: '#fece0d',
        
        }
      }
      
    },
  },
  plugins: [daisyui],
});
