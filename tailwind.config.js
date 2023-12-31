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
				"rich-black-25": "#DBDDEA",
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
				"brown-100": "#E7BC5B",
				"blue-100": "#47A5C5",
				"pink-100": "#F37290",
				"pink-200": "#EF476F",
				"pink-300": "#D43D63",
			},
			backgroundImage: {
				"code": "linear-gradient(112deg, rgba(14, 26, 45, 0.24) -1.4%, rgba(17, 30, 50, 0.38) 104.96%)",
				"gradient-2": "linear-gradient(124deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%)",
				"gradient-3": "linear-gradient(118deg, #9CECFB -9.12%, #65C7F7 48.59%, #0052D4 106.3%)",
				"gradient-5": "linear-gradient(118deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)",
			},
			fontFamily: {
				"edu": ["Edu SA Beginner", "cursive"],
				"inter": ["Inter", "sans serif"],
				"roboto": ["Roboto Mono", "monospace"],
			},
			boxShadow: {
				"primary-btn": "-0.5px -1.5px 0px 0px rgba(0, 0, 0, 0.12) inset",
				"primary-focus": "0px 0px 1px 3px rgba(255, 214, 10, 0.15)",
				"video-white": "20px 20px 0px 0px #F5F5F5",
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

