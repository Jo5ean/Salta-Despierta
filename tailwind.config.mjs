/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#E26128',    // naranja ppal.
				secondary: '#FFFFFF',  // blanco sec.
				tertiary: '#333333',   // gris oscuro terc.
			},
		},
	},
	plugins: [],
}
