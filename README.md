# nuxt3-supabase

Nuxt 3 module and composables for Supabase.

## Installation

```bash
$ yarn add nuxt3-supabase
# or
$ npm install --save nuxt3-supabase
```

## Getting Started

Add the following to your `nuxt.config.ts` file.

```js
export default defineNuxtConfig({
  modules: ['nuxt3-supabase/module'],
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

## API

### useSupabase

A composable for the supabase client.

### useAuth

A composable for [Supabase Auth](https://supabase.io/docs/guides/auth).

### useStorage

A composable for [Supabase Storage](https://supabase.io/docs/guides/storage).

### useFrom

A composable for [Supabase Database](https://supabase.io/docs/guides/database).

### useOnAuthStateChange

## Server authentication

## TODO

- [ ] Vite compatibility https://github.com/nuxt/framework/issues/718
- [x] Composables

## License

MIT
