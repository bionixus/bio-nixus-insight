import themeScope from './lib/postcss-theme-scope.mjs';
import nightTheme from './lib/postcss-night-theme.mjs';

export default {
  plugins: [
    // Resolve @dark-theme / @light-theme blocks first, so Tailwind sees plain rules.
    themeScope(),
    // Tailwind, then the night twins for light-theme utility colours.
    (await import('tailwindcss')).default,
    nightTheme({ verbose: process.env.NIGHT_THEME_VERBOSE === '1' }),
    (await import('autoprefixer')).default,
  ],
};
