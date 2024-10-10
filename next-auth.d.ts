import NextAuth from "next-auth";

// Extending the default NextAuth Session and User types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }

  interface User {
    id: string;
  }
}
