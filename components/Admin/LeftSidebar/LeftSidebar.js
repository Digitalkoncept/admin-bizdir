import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import SubMenu from "./SubMenu";
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
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeftSidebar;
