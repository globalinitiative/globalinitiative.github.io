var map;
var code = "1EBf7nu0sh5BNtORew9A0N4MYI12fds0fY17InIlqEGk"

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
        iconUrl: 'https://banner2.kisspng.com/20180605/gtw/kisspng-logo-target-corporation-red-marker-5b16467f1bdee9.6471526315281864951142.jpg',
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
