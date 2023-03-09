/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		screens: {
			sm: "620px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				RobotoMedium: ["Roboto-Medium", "sans-serif"],
				RobotoBold: ["Roboto-Bold", "sans-serif"],
			},
		},
		colors: {
			bg: "#E1E7F1",
			word: "#ACB6C6",
			black: "#000000",
		},
	},
	plugins: [],
};
