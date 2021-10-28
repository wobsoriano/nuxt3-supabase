import { createClient } from '@supabase/supabase-js';
import type { SupabaseClientOptions } from '@supabase/supabase-js';

export default (nuxtApp: any): void => {
  const supabaseUrl = '<%= options.supabaseUrl %>';
  const supabaseKey = '<%= options.supabaseKey %>';
  const supabaseOptions =
    '<%= options.supabaseOptions %>' as SupabaseClientOptions;

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions);

  // App already provides supabase warn. Possibly a new update.
  // nuxtApp.vueApp.provide('supabase', supabase);
  nuxtApp.provide('supabase', supabase);
};
