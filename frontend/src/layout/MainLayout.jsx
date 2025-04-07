import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  expandSidebar,
  collapseSidebar,
} from "../utils/slice/Sidebar.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  const isCollapsed = useSelector((state) => state.SideBar.isCollapsed);
  const dispatch = useDispatch();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Sidebar - fixed and floating */}
      <div
        onMouseEnter={() => dispatch(expandSidebar())}
        onMouseLeave={() => dispatch(collapseSidebar())}
        className="bg-red-900 fixed top-0 left-0 h-screen z-50"
      >
        <Sidebar
          collapsed={isCollapsed}
          width="200px"
          collapsedWidth="70px"
          className="p-0 m-0 hidden md:block h-full"
        >
          <Menu iconShape="circle">
            <MenuItem icon={<FaHome />} component={<Link to="/" />}>
              Home
            </MenuItem>
            <MenuItem
              icon={<SiGoogledocs />}
              component={<Link to="/register" />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              icon={<FaShoppingCart />}
              component={<Link to="/login" />}
            >
              Cart
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      {/* Main content centered on full screen */}
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
