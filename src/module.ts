import {
  defineNuxtModule,
  addTemplate,
  addPlugin,
  extendViteConfig
} from '@nuxt/kit-edge';
import { resolve } from 'path';

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

    extendViteConfig((config) => {
      // @ts-expect-error: Cannot use import statement outside a module
      config.ssr = {
        noExternal:
          process.env.NODE_ENV === 'development'
            ? [
                '@supabase/supabase-js',
                '@supabase/gotrue-js',
                '@supabase/realtime-js',
                '@supabase/storage-js',
                '@supabase/postgrest-js'
              ]
            : []
      };
    });
  }
});
