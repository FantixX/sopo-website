import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./components/**/*.vue', 'app.vue'],
  theme: {
    extend: {
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
}
