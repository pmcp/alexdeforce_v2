import tailwindTypography from '@tailwindcss/typography';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    }
  },
  image: {
    provider: 'netlify',
    domains: ['alexdeforce.b-cdn.net']
  }
})