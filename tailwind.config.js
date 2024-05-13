/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aventaRegular:["Aventa-Regular", "sans-serif"], //400
        aventaMedium:["Aventa-Medium", "sans-serif"], //500
        aventaSemiBold:["Aventa-SemiBold", "sans-serif"], //600
        aventaBold:["Aventa-Bold", "sans-serif"], //700
        aventaBlack:["Aventa-Black", "sans-serif"], //800
        //brandon
        brandonMedium:["Brandon-Medium", "sans-serif"], //500
        brandonBlack:["Brandon-Black", "sans-serif"],  //800

        syneSemiBold:["Syne-SemiBold", "sans-serif"],
        textSecurityDisk:["text-security-disc", "sans-serif"]
      } 
    },
  },
  plugins: [],
}

