$(document).ready(function(){
	/* Act on the event */
	$.ajax({
		url: "http://162.243.136.119:8080/products/"+window.location.hash.replace('#','')+".json",
		success: function(product) {
			console.log(product);
			$("#text").html(' ');
			$("#text").append(template("product-template2", product));
		}

	})
	var santiago = {lat: -33.437411, lng: -70.650146}; 
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 12,
		center: santiago
	});//ok!

	product.centers.forEach(function(center){
	  // usamos un template para crear el info window
	  var contentString = template('infowindow-template', center).html();
	  var infowindow = new google.maps.InfoWindow({
	  	content: contentString
	  });

      // ...y ponemos un marker
      var marker = new google.maps.Marker({
      	position: {lat: center.latitude, lng: center.longitude},
      	map: map,
      	title: center.name
      });
      
	  // y hacemos que se abra al hacer click
	  marker.addListener('click', function() {
	  	infowindow.open(map, marker);
	  });
	});	
});


window.template = function(templateName, context) {
	var html = $('#' + templateName).html();

	for (var p in context) {
		if (!context.hasOwnProperty(p)) {
			continue;
		}
		html = html.replace(new RegExp(':' + p, 'g'), context[p]);
	}

	return $(html);
};

