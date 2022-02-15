// contain all the JavaScript and Leaflet code to create the map and add data to the map.
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// This method is useful when we need to add multiple tile layers, or a background image of our map(s), 
// let map = L.map("map", {
//     center: [40.7, -94.5],
//     zoom: 4
//   });
  
  //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// 

// zoom in to a level of 14 on the setView() method
let map = L.map("map").setView([34.0522, -118.2487], 14);
// To change the marker on map to a point or dot use the following for LA, CA
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

// Alternatively, we can create a circle using the circleMarker() function.
//  The circleMarker() function measures the radius of the circle in pixels, 
//  with the default radius set at 10 pixels. The syntax for using
//   the circleMarker() function follows:
L.circleMarker([34.0522, -118.2437]).addTo(map);

// create a light-yellow circle with black lines indicating a 300-pixel radius on a dark map. 
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: '#ffffa1'
}).addTo(map);

//  or use the following method to do the same
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// We create the tile layer that will be the background of our map.

// method 1 - Use the Leaflet Documentation
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
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
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);