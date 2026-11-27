/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#994200",
        "primary-container": "#c05400",
        "primary-fixed": "#ffdbca",
        "primary-fixed-dim": "#ffb690",
        "on-primary": "#ffffff",
        "on-primary-container": "#fffbff",
        "on-primary-fixed": "#331100",
        "on-primary-fixed-variant": "#783200",
        "inverse-primary": "#ffb690",

        secondary: "#206963",
        "secondary-container": "#a7ece5",
        "secondary-fixed": "#aaefe8",
        "secondary-fixed-dim": "#8fd3cc",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#256d68",
        "on-secondary-fixed": "#00201e",
        "on-secondary-fixed-variant": "#00504b",

        tertiary: "#005fa0",
        "tertiary-container": "#0078c9",
        "tertiary-fixed": "#d1e4ff",
        "tertiary-fixed-dim": "#9fcaff",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#fdfcff",
        "on-tertiary-fixed": "#001d36",
        "on-tertiary-fixed-variant": "#00497d",

        surface: "#f8f9fa",
        "surface-dim": "#d8dadb",
        "surface-bright": "#f8f9fa",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f5",
        "surface-container": "#eceeef",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "surface-variant": "#e1e3e4",
        "surface-tint": "#9d4400",

        "on-surface": "#191c1d",
        "on-surface-variant": "#584237",
        "inverse-surface": "#2e3132",
        "inverse-on-surface": "#eff1f2",

        outline: "#8b7265",
        "outline-variant": "#dfc0b1",

        background: "#f8f9fa",
        "on-background": "#191c1d",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        sans: ["Noto Sans", "Noto Sans Telugu", "system-ui", "sans-serif"],
        telugu: ["Noto Sans Telugu", "sans-serif"],
      },
      minHeight: {
        touch: "56px",
      },
      minWidth: {
        touch: "56px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      spacing: {
        gutter: "1rem",
        margin: "1.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1.25rem",
        "space-lg": "1.75rem",
        "space-xl": "2.5rem",
      },
    },
  },
  plugins: [],
}
