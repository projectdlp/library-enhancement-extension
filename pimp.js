function isLibrary() {
	return $(".navbar > a").eq(1).text() == "Library";
}

function getStory(id, callback) {
	$.getJSON("http://api.darklordpotter.net/stories/"+id, callback);
}

if (isLibrary()) {
	/*$("[id^='td_threadtitle_']").each(function (index) { 
		var id = $(this).attr('id').split('_')[2];

		var elem = $(this);
		getStory(id, function(data) {
			console.log("<b>"+data.rating+"</b>");
			elem.append("<b>"+data.rating+"</b>");
		}); 
	});*/

	var ids = $("[id^='td_threadtitle_']").map(function() {
				return $(this).attr('id').split('_')[2];
				}).get();

	$.getJSON("http://api.darklordpotter.net/stories/multiget/"+ids.join(','), function(data) {
		$.each(data, function(i, s) {
			console.log(s);
			stor = $("[id='td_threadtitle_"+s.threadId+"']");
			stor.html(stor.html() + "<small><i>"+s.tags.join('; ')+"</i></small>");
		})
	});
}

	/*$("[id^='td_threadtitle_']").hover(
  function () {
  	var elem = $(this);
  	var id = $(this).attr('id').split('_')[2];

  	getStory(id, function(data) {
  		elem.append($("<span class='story_meta'> *** "+data.rating+"</span>"))
  	});
  },
  function () {
    $(this).find(".story_meta").remove();
  }*/