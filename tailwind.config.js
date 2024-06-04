/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#003153',
        'primary-shade-a': '#004F86',
        secondary: '#0077CC',
        'secondary-shade-a': '#0095FF',
        'secondary-shade-b': '#33AAFF',
        'grey-6': '#212429',
        'grey-5': '#495057',
        'grey-4': '#ADB5BD',
        'grey-3': '#CED4DA',
        'grey-2': '#E9ECEF',
        'grey-1': '#F8F9FA',
      },
      fontFamily: {
        primary: ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        'khmer-head': ['"Noto Sans Khmer"', '"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        khmer: ['"Khmer"', '"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
      },
      boxShadow: {
        md: '0 0 8px rgba(0, 0, 0, .5)',
        pressed: '8px 8px 16px 0px var(--clr-grey-3) inset, -8px -8px 16px 0px #FFF inset',
        'pressed-secondary': '2px 2px 4px 0px var(--clr-secondary) inset, -2px -2px 4px 0px var(--clr-secondary-shade-b) inset',
        'pressed-dark': '2px 2px 4px 0px var(--clr-grey-6) inset, -2px -2px 4px 0px var(--clr-grey-5) inset',
        flat: '8px 8px 16px 0px var(--clr-grey-3), -8px -8px 16px 0px #FFF',
        convex: '4px 4px 8px 0px var(--clr-grey-3), -4px -4px 8px 0px #FFF',
        'flat-dark': '8px 8px 16px 0px rgba(0,0,0,.25), -8px -8px 16px 0px var(--clr-grey-6)',
        'convex-dark': '4px 4px 8px 0px rgba(0, 0, 0, 0.50), -4px -4px 8px 0px var(--clr-grey-6)',
      },
      maxWidth: {
        'content-max': '72.5rem',
      },
      padding: {
        'horizontal': '2.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: theme('fontSize.base'),
            h1: {
              fontSize: theme('fontSize.7xl'),
            },
            h2: {
              fontSize: theme('fontSize.6xl'),
            },
            h3: {
              fontSize: theme('fontSize.5xl'),
            },
            h4: {
              fontSize: theme('fontSize.4xl'),
            },
            h5: {
              fontSize: theme('fontSize.3xl'),
            },
            h6: {
              fontSize: theme('fontSize.2xl'),
            },
            p: {
              fontSize: theme('fontSize.base'),
            },
          },
        },
        km: {
          css: {
            fontSize: '125%',
          },
        },
      }),
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'selector',
  // '[data-mode="dark"]'
}

