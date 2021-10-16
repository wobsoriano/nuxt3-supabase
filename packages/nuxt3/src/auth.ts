import { createApp, App } from 'h3';
import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

export type Options = {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions;
};

export const authHandler = (options: Options): App => {
  const app = createApp();
  const { supabaseKey, supabaseUrl, supabaseOptions } = options;

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions);

  app.use('/user', async (req) => {
    const user = await (await supabase.auth.api.getUserByCookie(req)).user;
    return user || {};
  });

  app.use('/set-auth', (req, res) => {
    supabase.auth.api.setAuthCookie(req, res);
    return 'auth cookie set';
  });

  return app;
};
