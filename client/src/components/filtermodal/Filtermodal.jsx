// FilterModal.jsx

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Map from "../map/Map";
import "./Filtermodal.css";

const FilterModal = ({ show, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [pinnedLocation, setPinnedLocation] = useState(null);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleMapClick = (e) => {
    setPinnedLocation(e.latlng);
  };

  const handleResetClick = () => {
    setPinnedLocation(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Do something with searchText and pinnedLocation
    onClose();
  };

  return (
    <div className={`filter-modal ${show ? "show" : ""}`}>
      <div className="filter-modal-overlay" onClick={onClose}></div>
      <div className="filter-modal-content">
        <form className="filter-form" onSubmit={handleSubmit}>
          <div className="filter-search-bar">
            <input
              type="text"
              placeholder="Search location"
              value={searchText}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="map-container">
            <Map/>
          </div>
          <div className="filter-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
