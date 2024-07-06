import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { client } from "@/lib/apollo";
import { LOGIN_EMPLOYEE } from "@/lib/mutation";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    pages: {
        signIn: "/login",
      },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials;
                    const { data, errors } = await client.mutate({
                        mutation: LOGIN_EMPLOYEE,
                        variables: { email: email, password: password },
                      });

                      if (errors || data.loginEmployee.code !== 200) {
                        throw new Error(data.loginEmployee.message);
                      }

                      const employee = await data.loginEmployee.employee;
                    
                    return {
                        token: employee.token,
                        id: employee.id,
                        name: employee.name,
                        email: employee.email,
                        image: employee.image,
                        role: employee.role,
                        permissions:employee.permissions,
                        
                    };
                } catch (error) {
                    console.log('something went wrong ',error)
                    throw new Error(error.message);
                }
            },
        }),
    ],
    session: {
        jwt: true,
        maxAge: 24 * 60 * 60, // 24 hours
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user,session,trigger }) {
            if (user) {
                token.jwt = user.token; // Store the token in the JWT token
                token.id = user.id; // Store the user ID in the JWT token
                token.name = user.name; // Store the user name in the JWT token
                token.email = user.email; // Store the user email in the JWT token
                token.image = user.image; // Store the user image in the JWT token // 
                token.role = user.role;
                token.permissions = user.permissions;
                
            }
            if (trigger === "update" && session?.image) {
                // Note, that `session` can be any arbitrary object, remember to validate it!
                token.image = session.image
              }
            return { ...token };
        },
        async session({ session, token }) {
            session.jwt = token.jwt;
            session.user = {
                name: token.name,
                id:token.id,
                email: token.email,
                image: token.image,
                role: token.role,
                permissions: token.permissions,

            };
            // Attach the token to the session object
           
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
