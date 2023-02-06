import "./css/sidebar_list_item.css";

function SidebarListItem(props) {
  return (
    <div className={props.list_item_style}>
      <img src={props.ring_colour} className="simple_list_icon" />
      <p className="simple_list_item_text">{props.item_text}</p>
    </div>
  );
}

export default SidebarListItem;
