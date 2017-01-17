$(document).ready(function(){
var products = "";
var url = "";

var dibujaProd

$('#search').keyup(function(event) {
	/* Act on the event */
	$.ajax({
			url: 'http://10.77.3.77:3000/search.json',
			data: {q: 'botella'},
			success: function(products) {
	   		console.log(products);
	   		products.forEach(function(product){
	   			$("#recent").html('');
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



