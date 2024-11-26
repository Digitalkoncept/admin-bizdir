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
    if (
      req.nextUrl.pathname.startsWith("/_next") ||
      req.nextUrl.pathname.startsWith("/api")
    ) {
      return NextResponse.next();
    }

    if (token === undefined) {
      console.log("Token undefined");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify the token using your verifyAuth function
      const verifiedToken = await verifyAuth(token);

      const routePermission = {
        '/all-employee': 'view employee',
        '/create-employee': 'add employee',
        '/update-employee':'update employee',
        '/view-logs':'view logs',
        '/all-jobs':'view jobs',
        '/add-job':'add job',
        '/update-job':'update-job',
        '/assigned-jobs':'view assigned jobs',
        '/assign-new-job':'assign new job',
        '/all-roles': 'view roles',
        '/add-role': 'add role',
        '/update-role':'update role',
        '/all-users': 'view users',
        '/admin-all-listings': 'view listings',
        '/add-new-listing': 'add listing',
        '/update-listing':'update listings',
        '/new-listing-request': 'view listing request',
        '/all-listing-category': 'view listing category',
        '/new-claim-request': 'view claim request',
        '/add-listing-category': 'add listing category',
        '/all-listing-sub-category': 'view listing sub category',
        '/add-listing-sub-category': 'add listing sub category',
        '/company-enquiry':'view company enquiry',
        '/client-enquiry':'view client enquiry',
        '/all-coupons':'view coupons',
        '/update-coupon':'update coupon',
        '/add-new-coupon':'add coupon',
        '/all-notifications':'view notifications'


      };

      const requiredPermission = routePermission[req.nextUrl.pathname];
      const hasPermission =
        verifiedToken.permissions.includes(requiredPermission);

      if (requiredPermission && !hasPermission) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      console.log("middleware is running");
      return NextResponse.next();
    } catch (error) {
      console.error("An error occurred:", error);
      // Redirect the user to the login page when the token is not verified
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      async authorized({ token }) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!login|api|_next/static|_next/image|favicon.ico|/public/:path*)):path*",
  ],
};
