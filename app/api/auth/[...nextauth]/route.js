import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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
                    const response = await fetch(
                        `${process.env.BACKEND_URL}/api/auth/admin/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email, password }),
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Invalid credentials");
                    }

                    const data = await response.json();
                    console.log(data)
                    return {
                        token: data.token,
                        id: data.id,
                        name: data.employee.name,
                        email: data.employee.email,
                        image: data.employee.image,
                        role: data.employee.role
                        
                    };
                } catch (error) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    session: {
        jwt: true,
        maxAge: 24 * 60 * 60, // 24 hours
    },
    callbacks: {
        async jwt({ token, user,account }) {
            if (user) {
                token.jwt = user.token; // Store the token in the JWT token
                token.id = user.id; // Store the user ID in the JWT token
                token.name = user.name; // Store the user name in the JWT token
                token.email = user.email; // Store the user email in the JWT token
                token.image = user.image; // Store the user image in the JWT token // 
                token.role = user.role
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
                role: token.role

            };
            // Attach the token to the session object

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
