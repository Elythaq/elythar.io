import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcryptjs";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
		async authorize(credentials) {
		  const client = await clientPromise;
		  const db = client.db('users');
		  const email = credentials.email.trim().toLowerCase();
		  const user = await db.collection("auth").findOne({ email });
		  console.log("USER FOUND:", user);
		  if (user) {
			const valid = await compare(credentials.password, user.password);
			console.log("PASSWORD VALID:", valid);
			if (valid) {
			  return { id: user._id, email: user.email, name: user.name };
			}
		  }
		  return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
});

export { handler as GET, handler as POST };
