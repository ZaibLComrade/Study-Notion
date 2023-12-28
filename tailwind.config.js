/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	
	theme: {
		extend: {
			colors: {
				"pure-grey-5": "#F9F9F9",
				"rich-black-5": "#F1F2FF",
				"rich-black-50": "#C5C7D4",
				"rich-black-100": "#AFB2BF",
				"rich-black-200": "#999DAA",
				"rich-black-300": "#838894",
				"rich-black-400": "#6E727F",
				"rich-black-500": "#585D69",
				"rich-black-600": "#424854",
				"rich-black-700": "#2C333F",
				"rich-black-800": "#161D29",
				"rich-black-900": "#000814",
				"yellow-50": "#FFD60A",
				"yellow-100": "#E7C009",
				"blue-100": "#47A5C5",
				"pink-200": "#EF476F",
			},
			fontFamily: {
				"edu": ["Edu SA Beginner", "cursive"],
				"inter": ["Inter", "sans serif"],
			},
			boxShadow: {
				"primary-btn": "-0.5px -1.5px 0px 0px rgba(0, 0, 0, 0.12) inset",
				"primary-focus": "0px 0px 1px 3px rgba(255, 214, 10, 0.15)",
			}
		},
	},
	
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					"primary": "#FF0000",
					"secondary": "#47A5C5",
					"base-100": "#000814",
					"accent": "#FFD60A",
				}
			},
			"light"
		]
	},
	
	plugins: [require("daisyui")],
}

