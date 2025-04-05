
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { expandSidebar, collapseSidebar } from '../utils/slice/Sidebar.slice.js';
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainLayout = ({ children }) => {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
  const dispatch = useDispatch();

  return (
  <div
      onMouseEnter={() => dispatch(expandSidebar())}
      onMouseLeave={() => dispatch(collapseSidebar())}
      style={{ height: '100vh', position: 'fixed' }}
    >
      <Sidebar collapsed={isCollapsed} width="200px" collapsedWidth="70px" className="p-0 m-0" >
        <Menu iconShape="circle">
        <MenuItem icon={<FaHome />} component={<Link to="/" />} className=""> Home </MenuItem>
          <MenuItem icon={<SiGoogledocs />} component={<Link to="/register" />} className=""> Dashboard </MenuItem>
          <MenuItem icon={<FaShoppingCart />} component={<Link to="/login" />} > Cart </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MainLayout;
