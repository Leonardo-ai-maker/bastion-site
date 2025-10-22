// File: tailwind.config.js
module.exports = {
content: [
"./src/app/**/*.{js,ts,jsx,tsx}",
"./src/components/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
primary: 'rgb(29,45,61)',
'muted': 'rgb(135,144,159)',
'dark-2': 'rgb(75,80,96)'
},
fontFamily: {
sora: ['Sora', 'ui-sans-serif', 'system-ui']
}
},
},
plugins: [],
}