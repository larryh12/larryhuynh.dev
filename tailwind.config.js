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
          neutral: '#fffaf3',
          'base-100': '#faf4ed',
        },
      },
      {
        'rosepine-moon': {
          primary: '#eb6f92',
          secondary: '#3e8fb0',
          accent: '#f6c177',
          neutral: '#2a273f',
          'base-100': '#232136',
        },
      },
      {
        'rosepine-night': {
          primary: '#eb6f92',
          secondary: '#31748f',
          accent: '#f6c177',
          neutral: '#1f1d2e',
          'base-100': '#191724',
        },
      },
      {
        'catppuccin-latte': {
          primary: '#1e66f5',
          secondary: '#ea76cb',
          accent: '#179299',
          neutral: '#dce0e8',
          'base-100': '#eff1f5',
          info: '#209fb5',
          success: '#40a02b',
          warning: '#df8e1d',
          error: '#d20f39',
        },
      },
      {
        'catppuccin-frappe': {
          primary: '#8caaee',
          secondary: '#f4b8e4',
          accent: '#81c8be',
          neutral: '#232634',
          'base-100': '#303446',
          info: '#85c1dc',
          success: '#a6d189',
          warning: '#e5c890',
          error: '#e78284',
        },
      },
      {
        'catppuccin-macchiato': {
          primary: '#8aadf4',
          secondary: '#f5bde6',
          accent: '#8bd5ca',
          neutral: '#181926',
          'base-100': '#24273a',
          info: '#7dc4e4',
          success: '#a6da95',
          warning: '#eed49f',
          error: '#ed8796',
        },
      },
      {
        'catppuccin-mocha': {
          primary: '#89b4fa',
          secondary: '#f5c2e7',
          accent: '#94e2d5',
          neutral: '#11111b',
          'base-100': '#1e1e2e',
          info: '#74c7ec',
          success: '#a6e3a1',
          warning: '#f9e2af',
          error: '#f38ba8',
        },
      },
    ],
  },
};
