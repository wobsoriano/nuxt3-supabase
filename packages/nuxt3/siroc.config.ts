import { defineSirocConfig } from 'siroc';

export default defineSirocConfig({
  rollup: {
    externals: ['vue', 'ohmyfetch', 'h3', '@nuxt/kit']
  }
});
