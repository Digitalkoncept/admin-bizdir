"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const pathname = usePathname();

    return (
        <>
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
                                })}
                        </ol>
                    </div>
                )}
            </li>
        </>
    );
};

export default SubMenu;
