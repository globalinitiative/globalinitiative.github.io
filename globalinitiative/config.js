var dataUrl = 'data/data.csv';
var maxZoom = 7;
var minZoom = 0;
var fieldSeparator = ',';
var baseUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
var baseAttribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var subdomains = 'abcd';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "Country";
var opacity = 1.0;
var ext = 'png'

