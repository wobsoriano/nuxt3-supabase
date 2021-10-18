import type { IncomingMessage, ServerResponse } from 'http';
import { getServerSession } from 'nuxt3-supabase';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const user = await getServerSession(req, {
    supabaseUrl: process.env.SUPABASE_URL as string,
    supabaseKey: process.env.SUPABASE_KEY as string
  });

  if (!user) {
    res.statusCode = 400;
    res.end('Unauthorized!');
  }

  return {
    user
  };
};
