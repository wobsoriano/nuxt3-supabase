import { defineNuxtModule, addTemplate, addPlugin } from '@nuxt/kit';
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
  }
});
