import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { signOut } from "next-auth/react";
import SubMenu from "./SubMenu";
import Link from "next/link";
import { SidebarData } from "@/components/Admin/LeftSidebar/ListData";
import { useSession } from "next-auth/react";
const LeftSidebar = ({ showadMenu }) => {
    const {data:session} = useSession();
    const permissions = session?.user?.role?.permissions;
    return (
        <section>
            <div className={`ad-menu-lhs ${showadMenu ? "mshow" : ""}`}>
                <div className="ad-menu">
                    <ul><li className="ic-db">
                        <Link
                        href={'/'} >
                    Dashboard
                    </Link>
                    </li>
                    <li className="ic-sub">
                        <Link
                        href={'/profile'} >
                    Profile
                    </Link>
                    </li>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} permissions={permissions} />;
                        })}
                        <li className="ic-lgo">
                        <span onClick={() => signOut({ callbackUrl: '/login' })} >
                         Log Out
                        </span>
                        </li>    
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeftSidebar;
