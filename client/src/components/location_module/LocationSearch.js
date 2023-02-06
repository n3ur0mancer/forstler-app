import search_icon from "./assets/search-circle_icon.svg";
import "./css/location_search.css";

function LocationSearch() {
  return (
    <div className="location_search_container">
      <div className="search_field">
        <p className="search_field_text">Suche...</p>
      </div>
      <img src={search_icon} className="search_icon"></img>
    </div>
  );
}

export default LocationSearch;
