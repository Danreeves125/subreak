const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			body: ["Roboto", "sans-serif"],
			title: ["Monster Hunter", "sans-serif"],
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
					red: "#ad5d5d",
					yellow: "#d8ae47",
					blue: "#92b6d5",
					green: "#006e51",
					beige: "#af9483",
					coal: "#333333",
				},
			},
		},
	},
	plugins: [],
};
