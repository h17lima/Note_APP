// tailwind.config.js
module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/controllers/**/*.js',
    './app/views/**/*.erb', // Linha corrigida e mais precisa
  ],
  safelist: [
    'translate-x-0',
    '-translate-x-64',
    'opacity-0',
    'opacity-100',
    'hidden',
    'transition-all',
    'duration-300',
    'ease-in-out',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}