/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
      minHeight: {
        screen: '100svh',
      },
      height: {
        screen: '100svh',
      },
      width: {
        screen: '100svw',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    darkTheme: 'rosepine-moon',
    themes: [
      {
        'rosepine-dawn': {
          primary: '#b4637a',
          secondary: '#286983',
          accent: '#ea9d34',
          neutral: '#f4ede8',
          'base-100': '#faf4ed',
          'base-200': '#fffaf3',
          'base-300': '#f2e9e1',
        },
      },
      {
        'rosepine-moon': {
          primary: '#eb6f92',
          secondary: '#3e8fb0',
          accent: '#f6c177',
          neutral: '#2a283e',
          'base-100': '#232136',
          'base-200': '#2a273f',
          'base-300': '#393552',
        },
      },
      {
        'rosepine-night': {
          primary: '#eb6f92',
          secondary: '#31748f',
          accent: '#f6c177',
          neutral: '#21202e',
          'base-100': '#191724',
          'base-200': '#1f1d2e',
          'base-300': '#26233a',
        },
      },
      {
        'catppuccin-latte': {
          primary: '#1e66f5',
          secondary: '#ea76cb',
          accent: '#179299',
          neutral: '#dce0e8',
          'base-100': '#eff1f5',
        },
      },
      {
        'catppuccin-frappe': {
          primary: '#8caaee',
          secondary: '#f4b8e4',
          accent: '#81c8be',
          neutral: '#232634',
          'base-100': '#303446',
        },
      },
      {
        'catppuccin-macchiato': {
          primary: '#8aadf4',
          secondary: '#f5bde6',
          accent: '#8bd5ca',
          neutral: '#181926',
          'base-100': '#24273a',
        },
      },
      {
        'catppuccin-mocha': {
          primary: '#89b4fa',
          secondary: '#f5c2e7',
          accent: '#94e2d5',
          neutral: '#11111b',
          'base-100': '#1e1e2e',
        },
      },
      {
        'geist-light': {
          primary: '#0070f3',
          secondary: '#7928ca',
          accent: '#f5a623',
          neutral: '#fafafa',
          'base-100': '#fff',
        },
      },
      {
        'geist-dark': {
          primary: '#0070f3',
          secondary: '#7928ca',
          accent: '#f5a623',
          neutral: '#111',
          'base-100': '#000',
        },
      },
    ],
  },
};
