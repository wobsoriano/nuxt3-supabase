import type { IncomingMessage, ServerResponse } from 'http';
import { getServerSession } from 'nuxt3-supabase';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import runtimeConfig from '#config';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const user = await getServerSession(req, {
    supabaseUrl: runtimeConfig.supabaseUrl,
    supabaseKey: runtimeConfig.supabaseKey
  });

  if (!user) {
    res.statusCode = 400;
    res.end('Unauthorized!');
  }

  return {
    user
  };
};
