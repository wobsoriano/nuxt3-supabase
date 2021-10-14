<template>
  <div>hi</div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

onMounted(() => {
  nuxtApp.$supabase
    .from('posts')
    .select('*')
    .eq('title', 'hello')
    .then((res) => {
      console.log(res);
    });
});
</script>
