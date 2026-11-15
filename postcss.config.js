import nightTheme from './lib/postcss-night-theme.mjs';

export default {
  plugins: [
    // Tailwind first, then adapt leftover light-theme utility colours to the night theme.
    (await import('tailwindcss')).default,
    nightTheme({ verbose: process.env.NIGHT_THEME_VERBOSE === '1' }),
    (await import('autoprefixer')).default,
  ],
};
