import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Login from "../pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { SidebarSlicePath, toggleSidebar } from "../utils/slice/Sidebar.slice";
import { SiGoogledocs } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

const MainLayout = ({ children }) => {
  const selector = useSelector(SidebarSlicePath);

  const dispatch = useDispatch();
  return (
    <>
      <Sidebar
        collapsed={selector.collapsed}
        breakPoint="lg"
        toggled={selector.toggle}
      >
        <Menu>
          <MenuItem
            className="lg:hidden"
            onClick={() => dispatch(toggleSidebar())}
          >
            {selector.toggle ? (
              <TbLayoutSidebarLeftCollapseFilled />
            ) : (
              <TbLayoutSidebarRightCollapseFilled />
            )}
          </MenuItem>
          <MenuItem icon={<SiGoogledocs />} className="">
            Documentation
          </MenuItem>
          <MenuItem icon={<FaShoppingCart />}>Cart</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default MainLayout;
