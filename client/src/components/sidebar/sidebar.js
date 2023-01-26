import {Link} from 'react-router-dom';

import SidebarListItem from './sidebar_list_item';
import './css/sidebar.css';


function Sidebar() {
    return (
            <div className='sidebar_layout'>
                <Link to={"/"} className="link">
                    <SidebarListItem 
                        className_icon='logo_icon'
                        className_text='logo_text'
                        image_src={require('./assets/logo.svg').default}
                        item_text='Forstler'/>
                </Link>        
                <Link to={"/dashboard"} className="link">
                    <SidebarListItem 
                        className_icon='simple_list_icon'
                        className_text='simple_list_item'
                        image_src={require('./assets/ring.svg').default}
                        item_text='Dashboard'/>
                </Link>
                <Link to={"/guide"} className="link">
                <SidebarListItem 
                    className_icon='simple_list_icon'
                    className_text='simple_list_item'
                    image_src={require('./assets/ring.svg').default}
                    item_text='Ratgeber'/>
                </Link>
            </div>
    );
}

export default Sidebar;