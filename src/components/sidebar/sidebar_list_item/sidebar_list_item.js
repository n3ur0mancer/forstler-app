import '../css/sidebar_list_item.css';

function Sidebar_List_Item(props) {
    return (
            <div className='sidebar_list_item_layout'>
                <img src={props.image_src} className={props.className_icon}/>
                <p className={props.className_text}>{props.item_text}</p>
            </div>
    );
}

export default Sidebar_List_Item;