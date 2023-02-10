module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#eecccc",
          200: "#dd9999",
          300: "#cc6666",
          400: "#bb3333",
          500: "#aa0000",
          600: "#880000",
          700: "#660000",
          800: "#440000",
          900: "#220000"
        },
        secondary: {
          100: "#ffe7cc",
          200: "#ffce99",
          300: "#ffb666",
          400: "#ff9d33",
          500: "#ff8500",
          600: "#cc6a00",
          700: "#995000",
          800: "#663500",
          900: "#331b00"
        },
        oldrose: {
          100: "#f1e6e4",
          200: "#e3cdc8",
          300: "#d6b5ad",
          400: "#c89c91",
          500: "#ba8376",
          600: "#95695e",
          700: "#704f47",
          800: "#4a342f",
          900: "#251a18"
        },
        seashell: {
          100: "#fffdfc",
          200: "#fffbf9",
          300: "#fff9f6",
          400: "#fff7f3",
          500: "#fff5f0",
          600: "#ccc4c0",
          700: "#999390",
          800: "#666260",
          900: "#333130"
        },
        tan: {
          100: "#f6f0e8",
          200: "#ede1d1",
          300: "#e4d2ba",
          400: "#dbc3a3",
          500: "#d2b48c",
          600: "#a89070",
          700: "#7e6c54",
          800: "#544838",
          900: "#2a241c"
        },
      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Playfair Display'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}