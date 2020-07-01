/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      screens: {
        '2xl': '1440px',
        dark: {raw: '(prefers-color-scheme: dark)'},
        light: {raw: '(prefers-color-scheme: light)'},
      },
      colors: {
        nuxt: {
          gray: '#243746',
          lightgreen: '#41B38A',
          green: '#158876',
        },
        'booster-blue': '#003E7E',
        'booster-red': '#B3282D',
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
        tertiary: {
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          500: 'var(--color-tertiary-500)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
          800: 'var(--color-tertiary-800)',
          900: 'var(--color-tertiary-900)',
        },
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        email: 'var(--color-emailer)',
        emailer: 'var(--color-emailer)',
        sms: 'var(--color-sms)',
        copy: 'var(--color-copy)',
        brand: '#1B2A60',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
      },
      fill: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
      }),
      stroke: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
      }),
      fontFamily: {
        sans: [
          // 'Cousine',
          'Inter var',
          'Source Sans Pro',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['Cousine', 'Input Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      spacing: {
        44: '11rem',
        72: '18rem',
        84: '21rem',
        80: '20rem',
        96: '24rem',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    spinner: theme => ({
      default: {
        color: '#DAE1E7',
        size: '1rem',
        border: '2px',
        speed: '500ms',
      },
      md: {
        color: theme('colors.red.500', 'red'),
        size: '2em',
        border: '2px',
        speed: '500ms',
      },
    }),
  },
  variants: {
    margin: ['responsive', 'last'],
    backgroundColor: [
      'responsive',
      'hover',
      'group-hover',
      'focus',
      'active',
      'dark',
      'dark-focus',
      'dark-hover',
    ],
    textColor: [
      'responsive',
      'hover',
      'focus-within',
      'focus',
      'dark',
      'group-hover',
      'dark-hover',
      'active',
      'dark-focus',
    ],
    borderColor: [
      'responsive',
      'hover',
      'group-hover',
      'focus',
      'focus-within',
      'dark',
      'dark-focus',
    ],
    borderWidth: ['responsive', 'first', 'last'],
    borderStyle: ['responsive', 'hover'],
    display: ['responsive', 'group-hover'],
    zIndex: ['responsive', 'focus-within', 'focus'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/ui'),
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-spinner')(),
    require('tailwindcss-scrims')({
      directions: {
        t: 'to bottom',
        b: 'to top',
        r: 'to left',
        l: 'to right',
      },
      distances: {
        '1/4': '25%',
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',
      },
      colors: {
        default: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0)'],
      },
      variants: ['responsive', 'hover'],
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: ['dark-mode', 'bg-red-500', 'px-4'],
    },
  },
}
