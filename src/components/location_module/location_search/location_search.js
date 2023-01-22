import ellipse from '../assets/ellipse.svg';
import '../css/location_search.css';


function Location_search() {
    return (
            <div className='location_search_container'>
                <div className='search_field'>
                    <p className='search_field_text'>Suche...</p>
                </div>
                <img src={ellipse} className="search_icon"></img>
            </div>
    );
}

export default Location_search;