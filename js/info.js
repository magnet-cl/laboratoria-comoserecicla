$(document).ready(function(){


	/* Act on the event */
	$.ajax({
			url: "http://10.77.3.77:3000/products/"+window.location.hash.replace('#','')+".json",
			data: {q: $("#search").val()},
			success: function(product) {
	   		console.log(product);
	   			$("#text").html(' ');
	   			$("#text").append(template("product-template2", product));
	
			}
	 })
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

