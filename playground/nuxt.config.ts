import { defineNuxtConfig } from 'nuxt3';
import GithubProvider from 'next-auth/providers/github';

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  nextAuth: {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      })
    ]
  }
});
