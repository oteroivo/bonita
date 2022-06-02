import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  presets: "browser",
  target: "static",
  modules: [["@nuxtjs/axios", { proxyHeaders: false }], "@nuxtjs/proxy"],
});
