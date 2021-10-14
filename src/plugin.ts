import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

type Options = {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import optionsLoader from '#build/supabase.options.mjs';

export default defineNuxtPlugin(async (nuxtApp) => {
  const loadedOptions = (await optionsLoader()) as Options;
  const { supabaseKey, supabaseUrl, supabaseOptions } = loadedOptions;

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions);

  nuxtApp.provide('supabase', supabase);
});
