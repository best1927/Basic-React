import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";

export class MapContainer extends Component {
  state = {
    markers: [
      {
        position: {
          lat: 13.826515,
          lng: 100.748794
        },
        title: "Hello World",
        key: `Thailand`,
        defaultAnimation: 2
      }
    ]
  };

  render() {
    const googleMapURL =
      "https://maps.googleapis.com/maps/api/js?client=gme-cpfitcentercoltd&v=3.21&libraries=geometry,libraries=drawing&language=th";

    const style = {
      width: "100%",
      height: "100%"
    };
    return (
      <div>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        googleMapURL={googleMapURL}
      >
      </GoogleMap>
      </div>
    );
  }
}

export default MapContainer;
