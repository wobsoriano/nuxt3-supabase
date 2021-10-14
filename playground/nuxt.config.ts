import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  modules: ['../dist/module.js'],
  supabase: {
    supabase: {
      hello: 'world'
    }
  }
});
