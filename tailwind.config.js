/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			gradientColorStops: {
				'blue-teal': ['#3490dc', '#4fd1c5'],
			},
			radialGradient: {
				circle:
					'radial-gradient(circle at 50% -20.71%, #fffbe7 0, #faf0d3 16.67%, #ebe5bf 33.33%, #d9d9aa 50%, #c5ce96 66.67%, #b0c486 83.33%, #9bbb79 100%)',
			},
		},
	},
	plugins: [],
};
