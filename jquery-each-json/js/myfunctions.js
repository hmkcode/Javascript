function show() {
 
	// JSON Data
	var articles = [
		{ 
			"title":"jQuery.each(JSON)",
			"url":"http://hmkcode.com/jquery-each-json/",
			"categories":["jQuery"],
			"tags":["jquery","json","$.each"]
		},
		{
			"title":" Java Servlet Send & Receive JSON Using jQuery.ajax() ",
			"url":"http://hmkcode.com/java-servlet-send-receive-json-using-jquery-ajax/",
			"categories":["Java"],
			"tags":["java","json","jquery"]
		}
	];
	
	// 1. remove all existing rows
	$("tr:has(td)").remove();

	// 2. get each article
	$.each(articles, function (index, article) {
		
		// 2.2 Create table column for categories
		var td_categories = $("<td/>");
		
		// 2.3 get each category of this article
		$.each(article.categories, function (i, category) {
			var span = $("<span class='label label-info' style='margin:4px;padding:4px' />");
			span.text(category);
			td_categories.append(span);
		});
	
		// 2.4 Create table column for tags
	   var td_tags = $("<td/>");
	   
		// 2.5 get each tag of this article		
		$.each(article.tags, function (i, tag) {
			var span = $("<span class='label' style='margin:4px;padding:4px' />");
			span.text(tag);
			td_tags.append(span);
		});
			
		// 2.6 Create a new row and append 3 columns (title+url, categories, tags)
		$("#added-articles").append($('<tr/>')
				.append($('<td/>').html("<a href='"+article.url+"'>"+article.title+"</a>"))
				.append(td_categories)
				.append(td_tags)
		);	
	});      		
}