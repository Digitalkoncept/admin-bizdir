import { withAuth } from "next-auth/middleware";
import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth?.token?.jwt;

    const publicFile = /\.(.*)$/.test(req.nextUrl.pathname);
    if (req.nextUrl.pathname.startsWith("/login") || publicFile) {
      return NextResponse.next();
    }

    // Exclude static files from being intercepted by middleware
    if (req.nextUrl.pathname.startsWith("/_next") || req.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.next();
    }

    if (!token) {
      console.log("Token undefined");
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      // Verify the token using your verifyAuth function
      const verifiedToken = await verifyAuth(token);

      const routePermission = {
        '/all-employee': 'view employee',
        '/create-employee': 'Create Employee',
        '/all-roles': 'Roles',
        '/create-roles': 'Create Roles',
        '/all-users': 'Users',
        '/admin-all-listings': 'view listings',
        '/add-new-listing': 'Create Listing',
        '/new-listing-request': 'New Listing Request',
        '/all-category': 'Listing Category',
        '/admin-add-new-category': 'Add Listing Category',
        '/admin-all-sub-category': 'Listing Sub Category',
        '/admin-add-new-sub-category': 'Add Listing Sub Category',
        '/admin/ecommerce/shipments': 'Shipments',
        '/admin/ecommerce/categories': 'Categories'
      };

      const requiredPermission = routePermission[req.nextUrl.pathname];
      const hasPermission = verifiedToken.permissions.includes(requiredPermission);

      if (requiredPermission && !hasPermission) {
        return NextResponse.redirect(new URL('/', req.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("An error occurred:", error);
      // Redirect the user to the login page when the token is not verified
      return NextResponse.redirect(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      async authorized({ token }) {
        return !!token;
      }
    }
  }
);

export const config = { matcher: ['/((?!login|api|_next/static|_next/image|favicon.ico|public/:path).*)'] };
