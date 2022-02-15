// contain all the JavaScript and Leaflet code to create the map and add data to the map.
// Add console.log to check to see if our code is working.
console.log("working");

// single line map
// Coordinates for each point to be used in the line.
// Let's edit our logic.js file to create a line from airport la - san franc LAX to SFO.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];
// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);
// change the coordinates for the center of the map to somewhere between LAX and SFO by adding [36.1733, -120.1794] in the setView() method.
// •	Change the zoom level in the setView() method to 7.
// let map = L.map("map").setView([36.1733,-120.1794], 7);
// 
// for multiple lines
// 
// Create the map object with center at the San Francisco airport.
// let map = L.map('map').setView([37.6213, -122.3790], 5);
// 	// Coordinates for each point to be used in the polyline.
//   // showing the route from LAX, SFO, SLC, and SEA:
// let line = [
// 	  [33.9416, -118.4085],
// 	  [37.6213, -122.3790],
// 	  [40.7899, -111.9791],
// 	  [47.4502, -122.3088]];

// Make the line yellow by editing the value for the "color" key in the polyline() function to yellow.
	// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
// 	   color: "yellow"
// }).addTo(map);

let map = L.map('map').setView([43.6777, -79.6248], 5);
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]];

  L.polyline(line,{
    opacity: 0.5,
    weigth: 4,
    color: "blue",
    dashArray:'2, 5'
  }).addTo(map);

// // To change the map's style, change the map id using the list of Mapbox ids below:

// // mapbox/streets-v11
// // mapbox/outdoors-v11
// // mapbox/light-v10
// // mapbox/dark-v10
// // mapbox/satellite-v9
// // mapbox/satellite-streets-v11
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Method 2 - Use the Mapbox Styles API
// We create the tile layer that will be the background of our map.
// 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);