<script setup lang="ts">
import { useAuthServerSync, useSupabase } from 'nuxt3-supabase';

const supabase = useSupabase();

const { data, pending } = await useAsyncData('posts', () => {
  return supabase.from('posts').select();
});

useAuthServerSync();
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else>{{ data }}</div>
</template>
