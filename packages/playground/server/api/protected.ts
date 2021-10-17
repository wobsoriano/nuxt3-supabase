import type { IncomingMessage } from 'http';

export default async (req: IncomingMessage) => {
  // TODO: Function to check if authenticated in api routes

  return {
    someData: 'asd'
  };
};
