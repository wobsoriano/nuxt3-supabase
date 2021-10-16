import { config } from 'dotenv';
config();
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  buildModules: ['nuxt3-supabase'],
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  vite: false
});
