$(function(){
	$(document).keypress(function(e) {
		var key = $("#idea").val();
    if(e.which == 13) {
			var url = [
				"http://www.google.com/trends/explore?q=" + key,
				"https://adwords.google.com/ko/KeywordPlanner/Home",
				"http://www.amazon.com/s?field-keywords=" + key,
				"https://www.google.com/#q=" + key
			];

			for(var i = 0 ; i < url.length ; i ++)
				chrome.tabs.create({
					url : url[i]
				}, function(){
				});
    }
	});
});
