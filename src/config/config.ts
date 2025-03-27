const config = {
	title: "Salta Despierta",
	site_name: "Salta Despierta",
	description: "Salta Despierta es una iniciativa educativa que impulsa el desarrollo personal y profesional con compromiso social y futuro sostenible.",
	image: "/logos/imagotipo-salta-despierta.png", // Asegurate de que esta imagen exista
	theme_color: "#F59A2F", // Naranja institucional
	keywords: "educación, futuro, universidad, salta, despertar, formación, compromiso, innovación, desarrollo, carreras",
	author: "@saltadespierta",
	email: "soporte@saltadespierta.com.ar",

	IS_PRODUCTION: Boolean(Number(import.meta.env.IS_PRODUCTION ?? 0)),

	AUTORIZATION: {
		USER: import.meta.env.AUTH_BASIC_USER,
		PASSWORD: import.meta.env.AUTH_BASIC_PW,
	},

	MAILER: {
		CONTACT_USER: import.meta.env.MAILER_CONTACT_USER,
	},

	URL: {
		WEB: 'https://saltadespierta.com.ar/', // Reemplazar por dominio real
		MAILER: import.meta.env.MAILER_API_URL,
	},
};

export default config;
