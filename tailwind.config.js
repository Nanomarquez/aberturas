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
			backgroundImage: {
				'gradient-linear-blue':
					'linear-gradient(90deg, rgba(18,54,84,1) 0%, rgba(26,103,174,1) 35%, rgba(72,155,188,1) 100%)',
				'gradient-linear-custom':
					'linear-gradient(90deg, rgba(200,200,200,1) 3%, rgba(236,236,236,1) 22%, rgba(186,186,186,1) 47%, rgba(236,236,236,1) 78%, rgba(184,184,184,1) 100%)',
			},
			boxShadow: {
				custom: '0px 10px 19px -2px rgba(46,46,46,0.45)',
				cardShadow: '0px 0px 30px -9px rgba(46,46,46,0.45)',
			},
		},
	},
	plugins: [],
};
