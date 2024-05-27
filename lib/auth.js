import { jwtVerify } from "jose";
export const verifyAuth = async (Token) =>{
    try {
        const verified = await jwtVerify(Token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET));
        return verified.payload;
    } catch (error) {
        throw new Error(error);
        
    }
}