const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            body: ["Balthazar", "sans-serif"],
            title: ["Great Vibes", "sans-serif"],
            label: ["Open Sans", "sans-serif"],
        },
        container: {
            center: true,
        },
        extend: {
            screens: {
                xs: "480px",
                small: "640px",
                small_ls: "750px",
                medium: "1024px",
                large: "1200px",
                safari: {
                    raw: "not all and (min-resolution: 0.001dpcm)",
                },
                mouse: {
                    raw: "(hover: hover)",
                },
            },
            colors: {
                theme: {
                    blush: "hsl(348, 73%, 81%)",
                    dusty_blue: "hsl(210, 19%, 61%)",
                },
            },
        },
    },
    plugins: [],
}
