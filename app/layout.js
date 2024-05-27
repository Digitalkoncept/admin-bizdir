/* eslint-disable @next/next/no-head-element */
"use client";
import React, { useState } from "react";
import TopNav from "@/components/Admin/TopNav";
import LeftSidebar from "@/components/Admin/LeftSidebar/LeftSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Auth from "@/components/Auth";
import "@/styles/admin-style.css";
import "@/styles/globals.css";
import "@/css/bootstrap.css";

export default function RootLayout({ children, session }) {
  const pathname = usePathname();
  const path = ["/login"];
  const hideSidebar = path.some((path) => pathname.startsWith(path));
  console.log(hideSidebar);
  const [showadMenu, setShowAdMenu] = useState(true);
  function toggleCart() {
    setShowAdMenu(!showadMenu);
  }
  return (
    <SessionProvider session={session}>
     
        <html>
          <body>
            <div>
              {!hideSidebar && (
                <>
                  <TopNav toggleCart={toggleCart} showadMenu={showadMenu} />
                  <LeftSidebar showadMenu={showadMenu} />
                </>
              )}
              {children}
              <ToastContainer />
            </div>
          </body>
        </html>
      
    </SessionProvider>
  );
}
