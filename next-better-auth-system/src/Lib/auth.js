import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const client = new MongoClient(process.env.AUTH_DB_URI);
// await client.connect();
const db = client.db('better-auth-db');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

  emailAndPassword: {
    enabled: true, 
    //  requireEmailVerification: true, 
  }
});
