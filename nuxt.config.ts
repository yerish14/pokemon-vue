// https://nuxt.com/docs/api/configuration/nuxt-config

require("dotenv").config({
  path:
    "env." +
    (process.env.NODE_ENV == "development" ? "local" : process.env.NODE_ENV),
  systemvars: true,
});
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL || 'http://localhost:3000'
    }
  },
  modules:[
    // add node modules here
    // "@nuxtjs/tailwindcss",
    'nuxt-proxy',
    '@nuxt/ui'
  ],
      // Http-proxy middleware for Nuxt and h3.
      proxy: {
        options: [
          {
            target: process.env.BASE_API_URL,
            pathFilter: ["/api/**"],
            pathRewrite: {
              "^/api": "",
            },
          },
        ],
      },
      // proxy: {
      //   "/api": {
      //     target: process.env.BASE_API_URL,
      //     pathFilter: ["/api/**"],
      //     pathRewrite: { "^/api": "" },
      //     changeOrigin: true
      //   }
      //   },
  devtools: { enabled: true }
})
