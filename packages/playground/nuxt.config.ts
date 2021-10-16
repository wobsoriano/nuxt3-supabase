import { config } from 'dotenv';
config();
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  modules: ['nuxt3-supabase/module'],
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  vite: false
  // build: {
  //   transpile: [
  //     '@supabase/supabase-js',
  //     '@supabase/gotrue-js',
  //     '@supabase/realtime-js',
  //     '@supabase/storage-js',
  //     '@supabase/postgrest-js'
  //   ]
  // }
});
