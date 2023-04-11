const defaultTheme = require("tailwindcss/defaultTheme");

const { sans } = defaultTheme.fontFamily;

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme("spacing.4"),
        }),
        fontFamily: {
            sans: ["Ubuntu", ...sans],
        },
        extend: {},
    },
    plugins: [],
};
