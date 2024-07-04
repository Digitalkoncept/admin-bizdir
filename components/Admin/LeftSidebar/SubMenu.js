"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = ({ item, permissions }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const pathname = usePathname();

  const hasPermission = (permissions, requiredPermission) => {
    return permissions.includes(requiredPermission);
  };

  const checkPermission = (item) => {
    // Check if the main item has permission
    if (hasPermission(permissions, item.permission)) {
      return true;
    }

    // Check if any sub-nav item has permission
    if (item.subNav) {
      return item.subNav.some(subItem => hasPermission(permissions, subItem.permission));
    }

    return false;
  };

  return (
    <>
      {checkPermission(item) && (
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
                {item.subNav &&
                  item.subNav.map((subItem, index) => {
                    if (hasPermission(permissions, subItem.permission)) {
                      return (
                        <li key={index}>
                          <Link
                            className={pathname === subItem.path ? "s-act" : undefined}
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
