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


