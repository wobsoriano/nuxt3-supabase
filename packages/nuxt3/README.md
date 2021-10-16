# nuxt3-supabase

Supabase for Nuxt 3.

## Install

```bash
yarn add nuxt3-supabase
```

## Configure

Add the following to your nuxt.config.ts file.

```js
export default defineNuxtConfig({
  modules: ['nuxt3-supabase'],
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  vite: false // temporary workaround
});
```

## Usage

```html
<script setup lang="ts">
  const { $supabase } = useNuxtApp();

  const { data, pending } = await useAsyncData('posts', () => {
    return $supabase.from('posts').select();
  });
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else>{{ data }}</div>
</template>
```

## TODO

- [ ] Vite compatibility https://github.com/nuxt/framework/issues/718
- [ ] Composables

## License

MIT
