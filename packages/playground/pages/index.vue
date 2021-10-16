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
