import {
  defineNuxtModule,
  addTemplate,
  addPlugin,
  addServerMiddleware,
  extendViteConfig
} from '@nuxt/kit';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';
import { authHandler, Options } from './auth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtModule<Options>({
  name: 'nuxt3-supabase',
  configKey: 'supabase',
  setup(options) {
    addServerMiddleware({
      path: '/api/auth',
      handler: authHandler(options)
    });

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

    extendViteConfig((config) => {
      // @ts-expect-error: Cannot use import statement outside a module
      config.ssr = {
        noExternal: [
          '@supabase/supabase-js',
          '@supabase/gotrue-js',
          '@supabase/realtime-js',
          '@supabase/storage-js',
          '@supabase/postgrest-js'
        ]
      };
    });

    //   config.optimizeDeps = {
    //     include: ['cross-fetch', 'websocket']
    //   };
    // });
  }
});
