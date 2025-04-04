import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapsedSidebar, SidebarSlicePath, toggleSidebar } from "../utils/slice/Sidebar.slice";

function Header() {
  const dispatch = useDispatch();
  const selector = useSelector(SidebarSlicePath);

  const sidebarHandler = () => dispatch(collapsedSidebar({}));
  const sidebarHandlerToggle = () => dispatch(toggleSidebar({}));
  return (
    <>
      <header className="py-4 shadow md px-10 bg-red-300">
        <button className="lg:hidden" onClick={sidebarHandler}>
          {" "}
          collapse {selector ? "yes" : "no"}{" "}
        </button>
        <button className="lg:hidden" onClick={sidebarHandlerToggle}>
          {" "}
          collapse {selector ? "yes" : "no"}{" "}
        </button>
      </header>
    </>
  );
}

export default Header;
