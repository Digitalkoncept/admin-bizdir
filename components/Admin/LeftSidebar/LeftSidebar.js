import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { signOut } from "next-auth/react";
import SubMenu from "./SubMenu";
import Link from "next/link";
import { SidebarData } from "@/components/Admin/LeftSidebar/ListData";
const LeftSidebar = ({ showadMenu }) => {
    return (
        <section>
            <div className={`ad-menu-lhs ${showadMenu ? "mshow" : ""}`}>
                <div className="ad-menu">
                    <ul>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                        <li className="ic-lgo">
                        <Link onClick={() => signOut()}  href="">
                         Log Out
                        </Link>
                        </li>    
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeftSidebar;
