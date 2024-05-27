

import { withAuth } from "next-auth/middleware";
import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req,res) {
    
    const Token = req.nextauth?.token.jwt;
    
      if (Token === undefined) {
        console.log("token undefined")
        return NextResponse.redirect(new URL('/login',req.url));
      }
      console.log("token is",Token)
      try {
        // Verify the token using jwt.verify method
        const verifiedToken =  await verifyAuth(Token);// Replace "your-secret-key" with your actual secret key
        console.log("token verification ",verifiedToken)
        const routePermission = {
         
          '/all-roles':'Roles',
          '/all-users':'Users',
          '/admin-all-listings':'All Listings',
          '/new-listing-request':'New Listing Request',
          '/admin-all-category':'Listing Category',
          '/admin-add-new-category':'Add Listing Category',
          '/admin-all-sub-category':'Listing Sub Category',
          '/admin-add-new-sub-category':'Add Listing Sub Category', 
          '/admin/ecommerce/shipments':'Shipments',
          '/admin/ecommerce/shipments':'Categories'
        }
        const requiredPermission = routePermission[req.nextUrl.pathname];
        const hasPermission = req.nextauth.token.role.permissions.includes(requiredPermission);
        if(requiredPermission && !hasPermission){
           return NextResponse.redirect(new URL('/',req.url));
        }
        // const allowedRoles = ['admin','product-manager'];
        // const userRole = req.nextauth.token?.role?.name;
        
        // if (
        //   req.nextUrl.pathname === "/admin" && !verifiedToken.payload &&
        //    !allowedRoles.includes(userRole) 
        // ) {
        //   return NextResponse.redirect(new URL('/',req.url));
        // }
      } catch (error) {
        console.error("An error occurred:", error);
        console.log(error)
        // Redirect the user to a specific page when the token is not verified
        return NextResponse.redirect(new URL('/login',req.url) );
      }
    },
  
);


export const config = { matcher: [ '/((?!login).*)'] }