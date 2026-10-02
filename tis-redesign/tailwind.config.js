const token = (name) => `rgb(var(--${name}) / <alpha-value>)`
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'), surface: token('surface'), fg: token('fg'), muted: token('muted'),
        line: token('line'), eyebrow: token('eyebrow'), accent: token('accent'), ink: token('ink'),
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '1.5rem' },
    },
  },
  plugins: [],
}
