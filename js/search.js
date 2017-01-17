$(document).ready(function(){

$('#search').keyup(function(event) {
	/* Act on the event */
	$.ajax({
			url: 'http://162.243.136.119:8080/search.json',
			data: {q: $('#search').val()},
			success: function(products) {
	   		console.log(products);
	   		$("#recent").html('');
	   		products.forEach(function(product){
	   			$("#recent").append(template("product-template", product));
	   			$("#suggest").addClass('hidden');
	   		});
			}
		})
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



