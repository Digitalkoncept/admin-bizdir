import React from 'react'
import Link from 'next/link'
import { SidebarData } from "./SidebarData";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const MobileMenu = ({isMenuVisible,setMobMenuVisibility,isMobMenuVisible,session}) => {
  const pathname = usePathname();

  return (
    <div className="mob-menu ">
            <div className="mob-me-ic">
              <i className="material-icons" onClick={() => setMobMenuVisibility(! isMenuVisible)}>menu</i>
            </div>
            <div className={`${isMobMenuVisible ? 'mob-me-all mobmenu-show' :'mob-me-all' }`}>
              <div className="mob-me-clo" >
                <i className="material-icons" onClick={() => setMobMenuVisibility(! isMobMenuVisible)}>close</i>
              </div>
              <div className="mv-pro ud-lhs-s1">
                <img src="/user/62736rn53themes.png" alt="" />
                <h4>{session?.user?.name}</h4>
                <b>Join on 26, Mar 2021</b>
              </div>
              <div className="mv-pro-menu ud-lhs-s2">
              <ul>
            {session?.user ? (<>
                {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                {item.heading && <h4>{item.heading}</h4>}
                <Link
                  href={item.path}
                  className={pathname === item.path ? "db-lact" : undefined}
                >
                  <img src={item.icon} alt="theme" />
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="" onClick={() => signOut({ callbackUrl: '/', redirect:true })}
            >
              <img src="/icon/dbl12.png" alt="theme" />
              Log Out
            </Link>
          </li>
            </>):(<>
                <li>
                    <Link href="/">Add Bussiness</Link>
                </li>
                <li><Link href="/login">Sign In</Link></li>
                <li><Link href="/register">Create an account</Link></li>
            </>)}
          
        </ul>
              </div>
              <div className="mv-cate">
                <h4>All Categories</h4>
                <ul>
                  <li>
                    {" "}
                    <Link href="/all-listing">Wedding halls</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Hotel &amp; Food</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Pet shop</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Digital Products</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Spa and Facial</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Real Estate</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Sports</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Education</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Electricals</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Automobiles</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Transportation</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Hospitals</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/all-listing">Hotels And Resorts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default MobileMenu
