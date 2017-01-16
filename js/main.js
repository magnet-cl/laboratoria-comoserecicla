// templates

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


//mapa
$(document).ready(function(){
	var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(-33.437411, -70.650146),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  		}
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
});
//mapa
$('#search').attr({ value: '' });