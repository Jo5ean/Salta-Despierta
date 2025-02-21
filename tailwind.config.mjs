/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"], // Quité md, mdx (si no los usas)
	theme: {
		extend: {
			colors: {
				primary: "#E26128",    // naranja ppal.
				secondary: "#FFFFFF",  // blanco sec.
				tertiary: "#333333",   // gris oscuro terc.
			},
		},
	},
	plugins: [],
};
