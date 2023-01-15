// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    shim: false,
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config.js",
  },
});
