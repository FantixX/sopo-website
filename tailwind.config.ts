import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ["./components/**/*.vue", "app.vue"],
  theme: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/typography'),]
}
