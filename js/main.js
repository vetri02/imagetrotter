window.imgT = {
	init: function(){
		var self = this;
		
		self.renderMapLayer();
		self.placesAutoComplete();

	},
	renderMapLayer: function(){
		var layer = new L.StamenTileLayer("watercolor");
		var map = new L.Map("map", {
			scrollWheelZoom: false,
			center: new L.LatLng(37.7, -122.4),
			minZoom:3,
		    maxZoom: 8,
		    zoom: 3
		});
		map.addLayer(layer);
		if(navigator.geolocation) navigator.geolocation.getCurrentPosition(imgT.locateWithCoords, imgT.locateErr)
	},
	locateWithCoords: function(pos){
		var self = imgT;
		var lat = pos.coords.latitude, lon = pos.coords.longitude;
		var loc = new L.LatLng(lat, lon);
		var marker = new L.Marker(loc);
		self.map.addLayer(marker);
		self.map.setView(new L.LatLng(lat, lon), 2);
	},
	locateErr: function(){
		//IP fallback
	},
	placesAutoComplete: function(){
		$("#geocomplete").geocomplete({
          details: "form",
          detailsAttribute: "data-geo"
        });
	}

};

$(function(){
	window.imgT.init();
})


