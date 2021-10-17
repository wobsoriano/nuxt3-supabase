import { inject, onUnmounted } from 'vue';
import { $fetch } from 'ohmyfetch';
import type {
  AuthChangeEvent,
  Session,
  SupabaseClient
} from '@supabase/supabase-js';
import type { User } from '@supabase/gotrue-js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
declare module '#app' {
  interface NuxtApp {
    $supabase: SupabaseClient;
  }
}

function setServerSession(event: AuthChangeEvent, session: Session) {
  return $fetch('/api/auth/set-auth-cookie', {
    method: 'POST',
    body: { event, session }
  });
}

export function useSupabase(): SupabaseClient {
  const supabase = inject<SupabaseClient>('supabase');
  return supabase;
}

export function useUser(): User | null {
  const supabase = inject<SupabaseClient>('supabase');
  return supabase.auth.user();
}

export function useAuthServerSync(): void {
  const client = useSupabase();

  if (client.auth.session()) {
    setServerSession('SIGNED_IN', client.auth.session());
  }

  const { data: authListener } = client.auth.onAuthStateChange(
    (event, session) => {
      if (event === 'SIGNED_IN') {
        setServerSession('SIGNED_IN', session);
      }

      if (event === 'SIGNED_OUT') {
        setServerSession('SIGNED_OUT', null);
      }
    }
  );

  onUnmounted(() => {
    authListener.unsubscribe();
  });
}
