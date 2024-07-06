import tailwindTypography from '@tailwindcss/typography';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  // components: {
  //   global: true,
  //   dirs: ['~/components']
  // },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    }
  },
  // extends: [
    // ['github:pmcp/nuxtLayers#base', { install: true }],
    // ['github:pmcp/nuxtLayers#dev', { install: true }]
  // ]
})