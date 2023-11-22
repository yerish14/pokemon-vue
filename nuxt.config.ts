// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL || 'http://localhost:3000'
    }
  },
      // Http-proxy middleware for Nuxt and h3.
  proxy: {
    options:
      {
        target: process.env.BASE_API_URL,
        pathFilter: ["/api/**"],
        pathRewrite: {
          "^/api": "",
        },
      },
  },
  devtools: { enabled: true },
  modules:[
    // add node modules here
    "@nuxtjs/tailwindcss",
    'nuxt-proxy'
  ]
})
