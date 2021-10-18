import { inject, onMounted, onUnmounted } from 'vue';
import { $fetch } from 'ohmyfetch';
import { useCookies } from 'h3';
import type { Options } from './auth';
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient
} from '@supabase/supabase-js';
import type { User } from '@supabase/gotrue-js';
import type { NuxtApp } from 'nuxt3';
import type { IncomingMessage } from 'http';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
declare module '#app' {
  interface NuxtApp {
    $supabase: SupabaseClient;
  }
}

export function useSupabase(): SupabaseClient {
  const supabase = inject<SupabaseClient>('supabase');
  if (!supabase) {
    throw new Error('Supabase provider not found');
  }
  return supabase;
}

export function useAuth(): SupabaseClient['auth'] {
  const supabase = useSupabase();
  return supabase.auth;
}

export function useStorage(): SupabaseClient['storage'] {
  const supabase = useSupabase();
  return supabase.storage;
}

export function useFrom(): SupabaseClient['from'] {
  const supabase = useSupabase();
  return supabase.from;
}

export async function getSession(
  ssrContext: NuxtApp['ssrContext']
): Promise<User | null> {
  const supabase = useSupabase();
  // @ts-expect-error: Provided by nuxt
  ssrContext.req.cookies = useCookies(ssrContext?.req);
  const user = await (
    await supabase.auth.api.getUserByCookie(ssrContext?.req)
  ).user;
  delete ssrContext?.req.cookies;
  return user;
}

export async function getServerSession(
  req: IncomingMessage,
  options: Options
): Promise<User | null> {
  const { supabaseKey, supabaseUrl, supabaseOptions } = options;
  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions);

  // @ts-expect-error: Missing properties in h3
  req.cookies = useCookies(req);
  const user = await (await supabase.auth.api.getUserByCookie(req)).user;
  // @ts-expect-error: Missing properties in h3
  delete req.cookies;

  return user;
}

function setServerSession(event: AuthChangeEvent, session: Session | null) {
  return $fetch('/api/auth/set-auth-cookie', {
    method: 'POST',
    body: { event, session }
  });
}

type AuthChangeHandler = (
  event: AuthChangeEvent,
  session: Session | null
) => void;

export function useOnAuthStateChange(callback?: AuthChangeHandler): void {
  const client = useSupabase();

  onMounted(() => {
    if (client.auth.session()) {
      setServerSession('SIGNED_IN', client.auth.session());
      callback?.('SIGNED_IN', client.auth.session());
    }
  });

  const { data: authListener } = client.auth.onAuthStateChange(
    (event, session) => {
      if (event === 'SIGNED_IN') {
        setServerSession('SIGNED_IN', session);
      }

      if (event === 'SIGNED_OUT') {
        setServerSession('SIGNED_OUT', null);
      }

      callback?.(event, session);
    }
  );

  onUnmounted(() => {
    authListener?.unsubscribe();
  });
}
