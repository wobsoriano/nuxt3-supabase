import { defineNuxtModule, addTemplate, addPlugin } from '@nuxt/kit';
import type { SupabaseClient } from '@supabase/supabase-js';
import { resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
declare module '#app' {
  interface NuxtApp {
    $supabase: SupabaseClient;
  }
}

export default defineNuxtModule({
  name: 'nuxt3-supabase',
  configKey: 'supabase',
  setup(options) {
    addTemplate({
      filename: 'supabase.options.mjs',
      getContents: ({ utils }) => {
        const name = utils.importName(`supabase_options_obj`);
        // prettier-ignore
        return `
          const ${name} = () => Promise.resolve(${JSON.stringify(options || {})})\n
          export default ${name}
        `;
      }
    });

    addPlugin({
      src: resolve(__dirname, './plugin.mjs')
    });

    // extendViteConfig((config) => {
    //   // @ts-expect-error: Cannot use import statement outside a module
    //   config.ssr = {
    //     noExternal: [
    //       '@supabase/supabase-js',
    //       '@supabase/gotrue-js',
    //       '@supabase/realtime-js',
    //       '@supabase/storage-js',
    //       '@supabase/postgrest-js'
    //     ]
    //   };

    //   config.optimizeDeps = {
    //     include: ['cross-fetch', 'websocket']
    //   };
    // });
  }
});
