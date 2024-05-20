// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // 僅在 client 端使用 -> useRuntimeConfig();

    public: {
      // 兩端都能使用 -> $config.public
    }
  },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: ['nuxt-icon']
})
