$(document).ready(function(){

/* jVectorMaps */
if($("#vector_world_map").length > 0){
    
    var jvm_wm = new jvm.WorldMap({container: $('#vector_world_map'),
                                map: 'world_mill_en', 
                                backgroundColor: '#B3D1FF',                                      
                                regionsSelectable: true,
                                regionStyle: {selected: {fill: '#33414E'},
                                                initial: {fill: '#FFFFFF'}},
                                onRegionSelected: function(){
                                    $("#vector_world_map_value").val(jvm_wm.getSelectedRegions().toString());                                          
                                }
                                });
                                
    $('#vector_europe_map').vectorMap({map: 'europe_mill_en', 
                                       backgroundColor: '#B3D1FF', 
                                       regionsSelectable: true,
                                       regionStyle: {selected: {fill: '#33414E'},
                                                     initial: {fill: '#FFFFFF'}},
                                       markerStyle: {initial: {fill: '#F8E23B',
                                                               stroke: '#383f47'}},
                                                     markers: [
                                                        {latLng: [52, 21], name: 'Warszawa'},
                                                        {latLng: [50.27, 30.31], name: 'Kyiv'},
                                                        {latLng: [53.54, 27.34], name: 'Minsk'},
                                                        {latLng: [56.56, 24.6], name: 'Riga'},
                                                        {latLng: [54.41, 25.17], name: 'Vilnius'},
                                                        {latLng: [59.26, 24.44], name: 'Tallinn'},
                                                        {latLng: [47, 28.55], name: 'Chisinau'},
                                                        {latLng: [42.7, 23.32], name: 'Sofia'},
                                                        {latLng: [39.93, 32.86], name: 'Ankara'},
                                                        {latLng: [37.98, 23.73], name: 'Athens'},
                                                        {latLng: [42, 21.43], name: 'Skopje'},
                                                        {latLng: [41.33, 19.82], name: 'Tirana'},
                                                        {latLng: [42.67, 21.17], name: 'Pristina'},
                                                        {latLng: [42.44, 19.26], name: 'Podgorica'},
                                                        {latLng: [43.85, 18.38], name: 'Sarajevo'},
                                                        {latLng: [44.82, 20.47], name: 'Belgrade'},
                                                        {latLng: [47.50, 19.08], name: 'Budapest'},
                                                        {latLng: [46.06, 14.51], name: 'Ljubljana'},
                                                        {latLng: [48.15, 17.12], name: 'Bratislava'},
                                                        {latLng: [50.09, 14.42], name: 'Prague'},
                                                        {latLng: [52.52, 13.40], name: 'Berlin'},
                                                        {latLng: [55.68, 12.57], name: 'Copenhagen'},
                                                        {latLng: [44.43, 26.1], name: 'Bucharest'},
                                                        {latLng: [41.9, 12.48], name: 'Rome'},
                                                        {latLng: [46.95, 7.45], name: 'Berne'},
                                                        {latLng: [50.85, 4.35], name: 'Brussels'},
                                                        {latLng: [52.37, 4.90], name: 'Amsterdam'},
                                                        {latLng: [48.85, 2.35], name: 'Paris'},
                                                        {latLng: [40.42, -3.70], name: 'Madrid'},
                                                        {latLng: [51.51, -0.13], name: 'London'},                                                        
                                                        {latLng: [53.33, -6.25], name: 'Dublin'},
                                                        {latLng: [59.33, 18.06], name: 'Stockholm'},
                                                        {latLng: [59.91, 10.74], name: 'Oslo'},
                                                        {latLng: [60.18, 24.93], name: 'Helsinki'},
                                                        {latLng: [38.72, -9.13], name: 'Lisabon'},
                                                        {latLng: [55.75, 37.62], name: 'Moscow'},
                                                        {latLng: [45.80, 16.00], name: 'Zagreb'},
                                                        {latLng: [48.21, 16.37], name: 'Vienna'}]                                                           
                                     });

    var jvm_usm = new jvm.WorldMap({container: $('#vector_usa_map'),
                                map: 'us_aea_en', 
                                backgroundColor: '#B3D1FF',                                      
                                regionsSelectable: true,
                                regionStyle: {selected: {fill: '#33414E'},
                                                initial: {fill: '#FFFFFF'}},
                                onRegionSelected: function(){
                                    $("#vector_usa_map_value").val(jvm_usm.getSelectedRegions().toString());                                          
                                }
                                });
}                            
/* EOF jVectorMaps */                            

/* Google maps */

if($("#google_ptm_map").length > 0){
    var gPTMCords = new google.maps.LatLng(22.764910, 120.243446);
    var gPTMOptions = {zoom: 9,center: gPTMCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
    var gPTM = new google.maps.Map(document.getElementById("google_ptm_map"), gPTMOptions);        

	var cords = new google.maps.LatLng(22.764910, 120.243446);
	var marker = new google.maps.Marker({position: cords, map: gPTM, title: "1.高雄彌陀區農會"});    
	cords = new google.maps.LatLng(22.807956, 120.257583);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "2.高雄市永安區農會維新分部"});    
	cords = new google.maps.LatLng(22.828858, 120.236003);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "3.高雄市永安區農會保寧分部"});    
	cords = new google.maps.LatLng(22.818466, 120.225064);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "4.高雄市永安區農會本部"});    
	cords = new google.maps.LatLng(22.861187, 120.260109);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "5.高雄市路竹區農會本部"});  
	cords = new google.maps.LatLng(22.874519, 120.193270);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "6.高雄市茄萣區農會崎漏分部"});    
	cords = new google.maps.LatLng(22.911071, 120.184734);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "7.高雄市茄萣區農會白砂崙分部"});    
	cords = new google.maps.LatLng(22.907139, 120.208689);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "8.高雄市湖內區農會本部"});    
	cords = new google.maps.LatLng(24.136177, 120.558742);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "9.台中山野電機"});    
	cords = new google.maps.LatLng(24.180789, 120.529462);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "10.龍井農會本部"});   
	cords = new google.maps.LatLng(24.200671, 120.523317);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "11.龍井農會龍津分部"});    
	cords = new google.maps.LatLng(24.359144, 120.604835);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "12.台中大安肉品市場"});   
	cords = new google.maps.LatLng(23.210092, 120.320238);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "13.台南官田廠"});    
	cords = new google.maps.LatLng(22.640693, 120.543475);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "14.屏東大復內埔廠"});    
	cords = new google.maps.LatLng(23.208125, 120.330910);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "15.仙鹿製藥廠"});   
	cords = new google.maps.LatLng(23.188997, 120.277936);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "16.協治塑膠"});    
	cords = new google.maps.LatLng(23.233623, 120.272291);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "17.福在畜牧"});   
	cords = new google.maps.LatLng(23.214869, 120.270278);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "18.楹泰公司"});    
	cords = new google.maps.LatLng(23.123299, 120.206259);
	marker = new google.maps.Marker({position: cords, map: gPTM, title: "19.榆元企業"});    

}

if($("#google_world_map").length > 0){
    
    var gWorldCords = new google.maps.LatLng(50, 0); 
    var gWorldOptions = {zoom: 1,center: gWorldCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
    var gWorld = new google.maps.Map(document.getElementById("google_world_map"), gWorldOptions);
    
    var gEUCords = new google.maps.LatLng(50, 10); 
    var gEUOptions = {zoom: 3,center: gEUCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
    var gEU = new google.maps.Map(document.getElementById("google_eu_map"), gEUOptions);
    
    function google_map_search() {
            
        var gSearch = new google.maps.Map(document.getElementById('google_search_map'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-33.8902, 151.1759),
            new google.maps.LatLng(-33.8474, 151.2631));
            
        gSearch.fitBounds(defaultBounds);

        var input = /** @type {HTMLInputElement} */(document.getElementById('target'));

        var searchBox = new google.maps.places.SearchBox(input);
        var markers = [];

        google.maps.event.addListener(searchBox, 'places_changed', function() {
            var places = searchBox.getPlaces();

            for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
            }

            markers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            var marker = new google.maps.Marker({
                map: gSearch,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

            bounds.extend(place.geometry.location);
            }

            gSearch.fitBounds(bounds);
        });

        google.maps.event.addListener(gSearch, 'bounds_changed', function() {
            var bounds = gSearch.getBounds();
            searchBox.setBounds(bounds);
        });
    }

    google.maps.event.addDomListener(window, 'load', google_map_search);    
        
}
/* EOF Google maps */

});
