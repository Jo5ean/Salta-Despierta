/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"], 
	theme: {
		extend: {
			colors: {
				primary: "#F59A2F",       // Naranja institucional
				lightOrange: "#EFAC70",   // Naranja claro
				darkGray: "#333333",      // Gris oscuro
				gray: "#4D4D4D",          // Gris medio
				black: "#000000",         // Negro
				white: "#FFFFFF",         // Blanco
			},
		},
	},
	plugins: [],
};
