/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        'primary-shade-a': 'var(--clr-primary-shade-a)',
        secondary: 'var(--clr-secondary)',
        'secondary-shade-a': 'var(--clr-secondary-shade-a)',
        'secondary-shade-b': 'var(--clr-secondary-shade-b)',
        'grey-6': 'var(--clr-grey-6)',
        'grey-5': 'var(--clr-grey-5)',
        'grey-4': 'var(--clr-grey-4)',
        'grey-3': 'var(--clr-grey-3)',
        'grey-2': 'var(--clr-grey-2)',
        'grey-1': 'var(--clr-grey-1)',
        'mono-6': 'var(--clr-mono-6)',
        'mono-5': 'var(--clr-mono-5)',
        'mono-4': 'var(--clr-mono-4)',
        'mono-3': 'var(--clr-mono-3)',
        'mono-2': 'var(--clr-mono-2)',
        'mono-1': 'var(--clr-mono-1)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        'khmer-head': ['var(--font-khmer-head)'],
        khmer: ['var(--font-khmer)'],
      },
      fontSize: {
        'scale-7': 'var(--type-scale-7)',
        'scale-6': 'var(--type-scale-6)',
        'scale-5': 'var(--type-scale-5)',
        'scale-4': 'var(--type-scale-4)',
        'scale-3': 'var(--type-scale-3)',
        'scale-2': 'var(--type-scale-2)',
        'scale-1': 'var(--type-scale-1)',
        'scale-0': 'var(--type-scale-0)',
        '-scale-1': 'var(--type-scale--1)',
        '-scale-2': 'var(--type-scale--2)',
      },
      boxShadow: {
        md: 'var(--shadow-md)',
        pressed: 'var(--shadow-pressed)',
        'pressed-secondary': 'var(--shadow-pressed-secondary)',
        flat: 'var(--shadow-flat)',
        convex: 'var(--shadow-convex)',
      },
      backgroundImage: {
        'gradient-neutral': 'var(--clr-gradient-neutral)',
        'gradient-light': 'var(--clr-gradient-light)',
        'gradient-dark': 'var(--clr-gradient-dark)',
        'gradient-secondary': 'var(--clr-gradient-secondary)',
      },
      maxWidth: {
        'content-max': 'var(--content-max-width)',
      },
      padding: {
        horizontal: 'var(--padding-horizontal)',
      },
      screens: {
        sm: '48em',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  darkMode: 'class', // Change to 'class', 'media', or a custom selector
}
