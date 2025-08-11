import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";

import * as schema from "@/db/schema";

import { db } from "@/db";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema,
  }),
  plugins: [anonymous()],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});

export const getSession = async () => {
  const _auth = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    _auth ?? {
      session: undefined,
      user: undefined,
    }
  );
};
