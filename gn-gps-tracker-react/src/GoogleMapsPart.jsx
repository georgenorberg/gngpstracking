import React from 'react';
import './App.css';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

function Map(){
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 55.827179, lng: 13.522944 }}
            />
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default GoogleMapsPart extends React.Component {
    return (
          <div className="GoogleMapsDiv" style={ {width:'100vw', height:'100vw' }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDlrBfpxcrd1BBbZVIHlWqMlcaeyuefApA`} 
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
        ); 
    }
}