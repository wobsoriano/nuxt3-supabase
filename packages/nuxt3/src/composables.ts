import { inject, onUnmounted } from 'vue';
import { $fetch } from 'ohmyfetch';
import { useCookies } from 'h3';
import type {
  AuthChangeEvent,
  Session,
  SupabaseClient
} from '@supabase/supabase-js';
import type { User } from '@supabase/gotrue-js';
import type { NuxtApp } from 'nuxt3';

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
  const supabase = useSupabase();
  return supabase.auth.user();
}

export async function getServerSession(
  ssrContext: NuxtApp['ssrContext']
): Promise<User | null> {
  const supabase = useSupabase();
  ssrContext.req.cookies = useCookies(ssrContext.req);
  const user = await (
    await supabase.auth.api.getUserByCookie(ssrContext.req)
  ).user;
  delete ssrContext.req.cookies;
  return user;
}

export function useOnAuthStateChange(): void {
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
