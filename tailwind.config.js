/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:'',
  theme: {
	container:{
centre:true,
padding:"15px"
	},
	screens:{
		sm:'640px',
		md:'768px',
		lg:'960px',
		xl:'1200px'
	},
	fontFamily:{
    primary:"var(--font-jetbrainsMono)"
	},

  	extend: {

colors:{
	primary:"#1c1c22",
	accent:{
		DEFAULT:"#000ff99",
		hover:"#00e187",
	}
},



  		keyframes:{
			"accordion-down":{
				from:{height:"0"},
				to:{height:"var(--radix-accordion-contebt-height)"},

			},
			"accordian-up":{
				form:{height:'var(--radix-accordion-contebt-height)'},
				to:{height:'0'}
			},
		},
		animation:{
			"accordion-down":"accordian-down 0.2s ease-out",
			"accordian-up":"accordian-up 0.2 ease-out",
		}

  	},
  },
  plugins: [require("tailwindcss-animate")],
};
