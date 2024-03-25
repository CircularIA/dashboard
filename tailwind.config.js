/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'ambiental': '#00B971', // Un verde personalizado
        'social': '#1F81B9',    // Un azul personalizado
        'economico': '#F3A430', // Un amarillo personalizado
      },
      backgroundImage: {
        'sidebar-gradient-green': 'linear-gradient(0deg, #0DFF6E 20%, #00B971 60%, #008A55 80%)',
        'header-green-gradient': 'linear-gradient(90deg, #00945E 0%, #00945E 30%, #0DFF6E 100%);',
        'green-horizontal-gradient': 'linear-gradient(90deg, #008A55 0%, #00B971 72.39%, #5AFF9C 100%)',
        'sidebar-gradient-blue': 'linear-gradient(0deg, #40B7FF 10%, #2D7DD1 60%, #1D36AE 80%)',
        'blue-horizontal-gradient': 'linear-gradient(90deg, #1D36AE 0%, #38B1E8 72.39%, #40B7FF 100%)',
        'sidebar-gradient-orange': 'linear-gradient(0deg, #FBC946 10%, #FFB200 60%, #E4570D 80%)',
        'orange-horizontal-gradient': 'linear-gradient(90deg, #E4570D 0%, #FFB200 72.39%, #FBC946 100%)',
      },
      backgroundColor: {
        'custom-light-green': '#0DFF6E',
        'custom-mid-green': '#00B971',
        'custom-dark-green': '#008A55',
        'custom-light-blue': '#40B7FF',
        'custom-mid-blue': '#2D7DD1',
        'custom-dark-blue': '#1D36AE',
        'custom-light-orange': '#FBC946',
        'custom-mid-orange': '#FFB200',
        'custom-dark-orange': '#E4570D',
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      screens: {
        xs: '480px',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};
