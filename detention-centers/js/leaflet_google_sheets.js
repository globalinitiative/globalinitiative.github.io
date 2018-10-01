var map;
var code = "1EBf7nu0sh5BNtORew9A0N4MYI12fds0fY17InIlqEGk"

document.addEventListener('DOMContentLoaded',function(){
  
  
 // map = L.map('map').setView([26.822014, 17.182133], 6);
  
  map = L.map('map', {
		center: [26.822014, 17.182133],
		zoom: 6,
		layers: []
	});
  
 L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
  
  
   var marker1 = {
    radius: 3,
    fillColor: "#03A9F4",
    // color: "#fff",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.8
  };
  
  var firefoxIcon = L.icon({
        iconUrl: 'https://globalinitiative.github.io/detention-centers/img/target_logo_1.png',
        iconSize: [16, 16], // size of the icon
        });
  
  
  Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      for (var i in sheet){
        var place = sheet[i];
        L.marker([place.lat, place.lon], {icon: firefoxIcon})
          .addTo(map)
          .bindPopup("<strong>Detention center name: </strong>"+ place.name +"<br><strong>Latitude:</strong>"+ place.lat +"<br><strong>Longitude:</strong>"+ place.lon)

      }
    },
    simpleSheet: true 
  })
  
 //Libya Boundary JSON
 
 
		function onEachFeature(feature, layer) {
			var popupContent = "<p><img style='height:50px,' src="+''+" ></img></P>";

			if (feature.properties && feature.properties.popupContent) {
				popupContent += feature.properties.popupContent;
			}

			layer.bindPopup(popupContent);
		}


		
		
		
		var myStyle = {
		 "color": 'grey',  //Outline color
		 "dashArray": '',
		 
         
		 "fillColor": "rgba(38, 12, 12, 0.5)",
		 "weight": 2,
		 "opacity": 1
		}; 
   L.geoJson(libya, {

			filter: function (feature, layer) {
				if (feature.properties) {
					// If the property "underConstruction" exists and is true, return false (don't render features under construction)
					return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
				}
				return false;
			},
			style: myStyle,
			onEachFeature: onEachFeature
		}).addTo(map);
  
})
