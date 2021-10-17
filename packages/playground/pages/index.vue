<script setup lang="ts">
import {
  useServerSessionSync,
  useSupabase,
  getServerSession
} from 'nuxt3-supabase';

const supabase = useSupabase();

useServerSessionSync();

const nuxtApp = useNuxtApp();
const { data, pending } = await useAsyncData('user', () =>
  getServerSession(nuxtApp.ssrContext)
);

watch(data, (val) => {
  console.log(val);
});
</script>

<template>
  <div>
    <button
      @click="supabase.auth.signIn({ email: 'sorianorobertc@gmail.com' })"
    >
      Sign in
    </button>
    <button @click="supabase.auth.signOut">Sign out</button>
    <div v-if="pending">Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>
