import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '998px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    colors: {
      primary: 'var(--primary)',
      green: 'var(--green)',
      gray: 'var(--gray)',
      celeste: 'var(--celeste)',
      transparent: 'transparent',
      body: {
        DEFAULT: 'var(--body)',
        white: 'var(--body-white)',
        40: 'var(--body-40)',
      },
      white: 'var(--white)',
      'white-text': 'var(--white-text)',
      black: 'var(--black)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      10: '0.625rem', //10px
      11: '0.6875rem', //11px
      xs: '0.75rem', // 12px
      13: '0.8125rem', //13px
      sm: '0.875rem', // 14px
      base: '0.9375rem', // 15px
      lg: '1rem', // 16px
      xl: '1.25rem', // 20px
      22: '1.375rem', // 22px
      '2xl': '1.5rem', // 24px
      26: '1.625rem', // 26px
      '3xl': '1.875rem', // 30px
      '4xl': '2rem', // 32px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
      '8xl': '6rem', // 96px
      '9xl': '8rem', // 128px
    },

    extend: {
      spacing: {
        px: '1px',
      },
      borderRadius: {
        DEFAULT: '1.25rem', //20px
        xs: '0.1875rem', // 3px
        sm: '0.5rem', // 8px
        base: '0.5625rem', // 9px
        md: '0.75rem', // 12px
        lg: '1', // 16px
        xl: '1.125rem', // 18px
        '2xl': '1.5rem', // 24px
        '3xl': '1.75rem', // 28px
        '4xl': '2rem', // 32px
      },
      lineHeight: {
        xs: '1rem', // 16px
        sm: '1.25rem', // 20px
        base: '1.3125rem', // 21px
        lg: '1.6725rem', // 26.76px
        xl: '1.75rem', // 28px
        '2xl': '1.875rem', // 30px
        '3xl': '2rem', // 32px
        '4xl': '2.23rem', // 35.68px
        '5xl': '3.345rem', // 53.52px
      },
      zIndex: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
