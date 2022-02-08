import {
  defineNuxtModule,
  addPluginTemplate,
  addServerMiddleware
} from '@nuxt/kit';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';
import { authHandler, Options } from './auth';

export default defineNuxtModule<Options>({
  meta: {
    name: 'nuxt3-supabase',
    configKey: 'supabase',
  },
  setup(options, nuxt) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    addServerMiddleware({
      path: '/api/auth',
      handler: authHandler(options)
    });

    addPluginTemplate({
      src: resolve(__dirname, './plugin.mjs'),
      filename: 'supabase.options.mjs',
      options
    });

    const supabaseDeps = [
      '@supabase/supabase-js',
      '@supabase/gotrue-js',
      '@supabase/realtime-js',
      '@supabase/storage-js',
      '@supabase/postgrest-js'
    ];

    supabaseDeps.forEach((dep) => {
      nuxt.options.build.transpile.push(dep);
    });
  }
});
