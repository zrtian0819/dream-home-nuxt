/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components//*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './plugins//.{js,ts}',
    './utils/**/.{js,ts}',
    './{App,app}*.{js,ts,vue}',
    './{Error,error}.{js,ts,vue}',
    './app.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
