/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'rp-base': '#191724',
        // 'rp-surface': '#1f1d2e',
        // 'rp-overlay': '#26233a',
        // 'rp-muted': '#6e6a86',
        // 'rp-subtle': '#908caa',
        // 'rp-text': '#e0def4',
        // 'rp-love': '#eb6f92',
        // 'rp-gold': '#f6c177',
        // 'rp-rose': '#ebbcba',
        // 'rp-pine': '#31748f',
        // 'rp-foam': '#9ccfd8',
        // 'rp-iris': '#c4a7e7',
        // 'rp-highlow': '#21202e',
        // 'rp-highmed': '#403d52',
        // 'rp-highhigh': '#524f67',
      },
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [require('@catppuccin/tailwindcss')],
};
