<script setup lang="ts">
import { useAuthServerSync, useSupabase } from 'nuxt3-supabase';

const supabase = useSupabase();

useAuthServerSync();
</script>

<template>
  <div>
    <button
      @click="supabase.auth.signIn({ email: 'sorianorobertc@gmail.com' })"
    >
      Sign in
    </button>
    <button @click="supabase.auth.signOut">Sign out</button>
  </div>
</template>
