/* global google */ 
 
import React, { Component, PropTypes } from 'react';
let mapElement = document.createElement('div');
mapElement.id = 'map';
 
export default class Maptag() {

    let mapOptions = {
        center: new google.maps.LatLng(props.lat, props.lng),
        zoom: props.zoomsize
    }
    let map = new google.maps.Map(mapElement, mapOptions);

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(props.lat, props.lng),
        map: map
    });
    let contentString ='<div id="infomation_container" align="center">';
    contentString += '<label id="lblAddLocation">'+ props.address +'</label>';
    contentString += '</div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addDomListener(marker, 'click', function () { 
        infowindow.open(map, marker); 
    });

    google.maps.event.addDomListener(marker, 'mouseover', function () { 
        infowindow.open(map, marker); 
    }); 
    
    return (
     {mapElement}
    );
  }