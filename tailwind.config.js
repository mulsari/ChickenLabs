/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                chickenMain: " #FCC580",
                chickenPoint: "#FC9D38",
                chickenNeutral: "#A4A4A4",
                chickenPositive: "#6CBD7C",
                chickenNegative: "#FC3838",
                chickenHover: "#FFFEC9",
                chickenBackground: "#FFF4E6",
                chickenFont: "#44403C"
            },
        },
        screens: {
            sm: { max: "1023px" },
            lg: { min: "1024px" },
        },
    },
    plugins: [],
};

