import { Link } from "react-router-dom";
import logo_icon from "./assets/logo.svg";
import SidebarListItem from "./SidebarListItem";

import "./css/sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar_layout">
      <Link to={"/"} className="sidebar_logo_container">
        <img src={logo_icon} className="sidebar_logo_icon" alt="logo icon" />
        <p className="sidebar_logo_text">Forstler</p>
      </Link>
      <Link to={"/dashboard"} className="link">
        <SidebarListItem
          ring_colour={props.ring_colour_dashboard}
          item_text="Dashboard"
          list_item_style={props.list_item_style_dashboard}
        />
      </Link>
      <Link to={"/guide"} className="link">
        <SidebarListItem
          ring_colour={props.ring_colour_guide}
          item_text="Ratgeber"
          list_item_style={props.list_item_style_guide}
        />
      </Link>
    </div>
  );
}

export default Sidebar;
