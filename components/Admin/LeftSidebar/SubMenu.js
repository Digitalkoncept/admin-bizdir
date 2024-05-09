"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = ({ item,permissions }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const pathname = usePathname();
    const checkPermission = (title, subNav) => {
        if (subNav) {
            // Check if any subNav name is included in permissions
            const subNavNames = subNav.map(item => item.name);
            if (subNavNames.some(name => permissions?.includes(name))) {
                return true;
            }
        }
        // Check if the title itself is included in permissions
        return permissions?.includes(title);
    };
   
    return (
        <>  
            {checkPermission(item.title,item.subNav) && (
            <li className={item.class}>
                     <Link
                     href={item.path}
                     onClick={item.subNav && showSubnav}
                     className={`${item.subnav ? "mact" : ""}`}
                 >
                     {item.title}
                 </Link>
                
               
                {subnav && (
                    <div>
                        <ol>
                            {subnav &&
                                item.subNav.map((subItem, index) => {
                                    if(checkPermission(subItem.name)){
                                        return (
                                            <li key={index}>
                                                <Link
                                                    className={
                                                        pathname === subItem.path
                                                            ? "s-act"
                                                            : undefined
                                                    }
                                                    href={subItem.path}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        );
                                    } 
                                    return null;
                                })}
                        </ol>
                    </div>
                )}
            </li>
            )}
        </>
    );
};

export default SubMenu;
