/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			backgroundColor: {
				lightBlue: "#DFF6FF",
				darkBlue: "#06283D",
				primary: "#47B5FF",
				secondary: "#256D85",
			},
			colors: {
				lightBlue: "#DFF6FF",
				darkBlue: "#06283D",
				primary: "#47B5FF",
				secondary: "#256D85",
			},
			fontFamily: {
				OpenSans: '"Open Sans", sans-serif',
				Inter: '"Inter", sans-serif',
			},
			boxShadow: {
				small: "0 0 10px rgba(0,0,0,0.2)",
			},
		},
		screens: {
			xs: "380px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: ["flowbite/plugin"],
};
