import React from 'react';
import './App.css';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap
} from "react-google-maps";

function Map() {
  return(
  <GoogleMap 
    defaultZoom={9}
    defaultCenter={{lat:55.846889, lng:13.409510}}
    />
  );
  
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to <i>George GPS Tracker</i> web app
        </p>
        <input
            type="text"
            name="apiKey"
            placeholder="Enter your google api key here"
            required
        />
        <p className="Informatic-Text">The Google Api key is not stored in the proj. This restrictions help prevent unauthorized use and quota theft.</p>
      </header>
      
      <div style={{ width: "100vw", height: "100vw" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=hemligtKey`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
