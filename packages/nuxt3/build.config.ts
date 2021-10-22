import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  emitCJS: true,
  entries: ['src/module', 'src/plugin', 'src/composables'],
  externals: ['vue', 'ohmyfetch', 'h3', '@nuxt/kit', '@supabase/gotrue-js']
});
