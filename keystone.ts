import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { User } from "./schemas/User";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/sicks-fitz";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they stayed longed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    //todo add seeding data here
  },
  lists: createSchema({
    User,
  }),
  ui: {
    // change this for roles
    isAccessAllowed: () => true,
  },
  // todo add session values here
});
