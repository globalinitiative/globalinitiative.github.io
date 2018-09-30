var map;
var code = "1EXl0ZGn4RMBtim_c4zwA_te3VQgIquVywZlT_XKR0qo"

document.addEventListener('DOMContentLoaded',function(){
  map = L.map('map').setView([22, 11], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
   var marker1 = {
    radius: 3,
    fillColor: "#03A9F4",
    // color: "#fff",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.8
  };
  
  var firefoxIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Map_Marker.svg/2000px-Google_Map_Marker.svg.png',
        iconSize: [7, 7], // size of the icon
        });
  
  
  Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      for (var i in sheet){
        var place = sheet[i];
        L.marker([place.lat, place.lon], {icon: firefoxIcon})
          .addTo(map)
          .bindPopup(place.name)
      }
    },
    simpleSheet: true 
  })
  
  L.geoJson(routes, {

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