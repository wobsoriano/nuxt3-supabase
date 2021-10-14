import { config } from 'dotenv';
config();
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  modules: ['../dist/module.js'],
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  }
});
