var map;
var code = ""

document.addEventListener('DOMContentLoaded',function(){
  
  
 // map = L.map('map').setView([26.822014, 17.182133], 6);
  
  map = L.map('map', {
		center: [26.822014, 17.182133],
		zoom: 6,
		layers: []
	});
  
 L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
      attribution: '&copy; Global Initiative | Pablo Gallego'
  }).addTo(map);
  
  // hydrology overlay layer
  
  
var satellite  = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }),

  arabic  = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });



// json object for layer switcher control basemaps
var baseLayers = {
		"Satellite": satellite,
		"Arabic ": arabic 
	};

/*var overlayMaps = {
    "Detention Centers": code
};*/

// add layer groups to layer switcher control
var controlLayers = L.control.layers(baseLayers).addTo(map);
  

 

  
})
