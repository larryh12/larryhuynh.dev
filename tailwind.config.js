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
        screen: '100dvh',
      },
      height: {
        screen: '100dvh',
      },
      width: {
        screen: '100dvw',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    darkTheme: 'moon',
    themes: [
      {
        dawn: {
          primary: '#b4637a',
          secondary: '#286983',
          accent: '#ea9d34',
          neutral: '#f4ede8',
          'base-100': '#faf4ed',
        },
      },
      {
        moon: {
          primary: '#eb6f92',
          secondary: '#3e8fb0',
          accent: '#f6c177',
          neutral: '#2a283e',
          'base-100': '#232136',
        },
      },
      {
        night: {
          primary: '#eb6f92',
          secondary: '#31748f',
          accent: '#f6c177',
          neutral: '#21202e',
          'base-100': '#191724',
        },
      },
      {
        latte: {
          primary: '#7287fd',
          secondary: '#dd7878',
          accent: '#179299',
          neutral: '#e6e9ef',
          'base-100': '#eff1f5',
        },
      },
      {
        frappe: {
          primary: '#babbf1',
          secondary: '#ea999c',
          accent: '#81c8be',
          neutral: '#292c3c',
          'base-100': '#303446',
        },
      },
      {
        macchiato: {
          primary: '#b7bdf8',
          secondary: '#ee99a0',
          accent: '#8bd5ca',
          neutral: '#1e2030',
          'base-100': '#24273a',
        },
      },
      {
        mocha: {
          primary: '#b4befe',
          secondary: '#eba0ac',
          accent: '#94e2d5',
          neutral: '#181825',
          'base-100': '#1e1e2e',
        },
      },
      {
        light: {
          primary: '#0070f3',
          secondary: '#7928ca',
          accent: '#f5a623',
          neutral: '#fafafa',
          'base-100': '#fff',
        },
      },
      {
        dark: {
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
