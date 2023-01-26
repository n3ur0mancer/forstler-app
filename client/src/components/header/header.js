import {Link} from 'react-router-dom';

import logo from './assets/logo.svg';

import './css/header.css';


function Header() {
    return (
            <div className='header_container'>
               <div className='logo_container'>
                    <img src={logo} className='logo' alt='logo icon'></img>
                    <p className='logo_text_header'>Forstler</p>
               </div>
                <Link to={"/dashboard"} className="link">
                    <p className='header_item'>Dashboard</p>
                </Link>
                <Link to={"/guide"} className="link">   
                    <p className='header_item'>Ratgeber</p>
               </Link>
            </div>
    );
}

export default Header;