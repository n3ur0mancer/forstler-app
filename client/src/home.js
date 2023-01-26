import {Link} from 'react-router-dom';

import Header from './components/header/header';
import Button from './components/basic_components/button/button';

import forest_image from './components/basic_components/assets/forest_image_1.jpg';
import checkmark from './components/basic_components/assets/checkmark.svg';
import './css/home.css';


function Home() {
    return (
            <div>
                <Header />
                <div className='home_first_segment_container'>
                    <div className='home_first_segment_text_container'>
                        <h1 className='home_first_segment_title'>Der passende Baum für Ihren Wald</h1>
                        <p className='home_first_segment_text'>Verschaffen Sie sich mit unseren Analysetools einen Einblick in Ihren Wald und erfahren Sie, welche Baumarten geeignet sind.</p>
                    </div>
                    <img src={forest_image} className='home_background_image' alt='forest'></img>
                </div>
                <div className='home_second_segment_container'>
                    <div className='home_second_segment_dashboard_container'>
                        <h2 className='dashboard_info_title'>Das Dashboard</h2>
                        <p className='dashboard_info_intro_text'>Lernen Sie Ihre Standorte zu verstehen mit Informationen zu:</p>
                        <ul className='dashboard_info_list'>
                            <li>Der Lage und Sonnenstunden</li>
                            <li>Den Wetterdaten </li>
                            <li>Der Bodenbeschaffenheit</li>
                            <li>Der Kronenverlichtung </li>
                        </ul>
                        <Link to={"/dashboard"} className="link">
                            <Button button_text="Zum Dashboard" button_style='light_grey_button_home'/>
                        </Link>    
                    </div >
                    <div className='home_second_segment_guide_container'>
                        <h2 className='guide_info_title'>Der Ratgeber</h2>
                        <p className='guide_info_intro_text'>Bekommen Sie konkrete Vorschläge zur Beforstung Ihres Standorts:</p>
                        <ul className='guide_info_list'>
                            <li>Auf Basis der Boden, Wetter und Standortdaten</li>
                            <li>Mit konkreten Baumarten als Vorschläge</li>
                            <li>Inklusive Verwaltungsmöglichkeit Ihrer Standorte </li>
                        </ul>
                        <Link to={"/guide"} className="link">
                            <Button button_text="Zum Ratgeber" button_style='green_button_home'/>
                        </Link>    
                    </div>
                </div>
                <div className='third_segment_container'>
                    <h2 className='third_segment_title'>Alles ganz genau im Blick mit Hilfe der IoT Module</h2>
                    <ul className='third_segment_list'>
                        <li className='third_segment_list_item'>
                            <img src={checkmark} className='checkmark' alt='checkmark icon'></img>
                            <p>Präzise, lokalisierte Daten zu Ihrem Standort</p>
                        </li>
                        <li className='third_segment_list_item'>
                            <img src={checkmark} className='checkmark' alt='checkmark icon'></img>
                            <p>Standortspezifische Anomalien frühzeitig erkennen</p>
                        </li>
                        <li className='third_segment_list_item'>
                            <img src={checkmark} className='checkmark' alt='checkmark icon'></img>
                            <p>Bessere Forstvorschläge für Ihren Standort</p>
                        </li>
                        <li className='third_segment_list_item'>
                            <img src={checkmark} className='checkmark' alt='checkmark icon'></img>
                            <p>Klimaresistente Baumvariationen erkennen und fördern</p>
                        </li>
                    </ul>
                </div>
                <div className='fourth_segment_container'>
                    <h3 className='fourth_segment_title'>Lernen Sie den Wald verstehen mit Hilfe der Forstler Blogs</h3>
                    <div className='blogs_container'>
                        <div className='blog_container'>
                            <img className='blog_image' alt='blog post teaser'></img>
                            <p className='blog_intro_text'>Bodenbeschaffenheit - Ein Schlüsselfaktor für die Gesundheit von Bäumen</p>
                        </div>
                        <div className='blog_container'>
                            <img className='blog_image' alt='blog post teaser'></img>
                            <p className='blog_intro_text'>Der Standort - Welche Rolle spielt der Standort und die Lage des Waldes?</p>
                        </div>
                    </div>
                    <p className='read_more_button'>Mehr anzeigen</p>
                </div>
                <div className='footer_segment'>
                    <h4>Werden Sie Teil der Forstler Bewegung</h4>
                    <div className='buttons_container'>
                        <Link to={"/dashboard"} className="link" >
                            <Button button_text="Zum Dashboard" button_style='light_grey_button'/>
                        </Link>  
                        <Link to={"/guide"} className="link">
                            <Button button_text="Zum Ratgeber" button_style='light_grey_button'/>
                        </Link>  
                    </div>
                    <p className='copyright'>© 2023 Forstler</p>
                </div>
            </div>
    );
}

export default Home;