chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		kana();
	}
});

function kana() {

	$.getJSON("kana.json", function(json) {
	    console.log(json); // this will show the info it in firebug console
	});

	    $.getJSON("", (data) => {
	      for (let i=0; i<data.length; i++){
	        console.log(`userid=${data[i].kana_list}, username=${data[i].kanji_list}`);



  var body = $("body").html();



  $("body").html(result);

	      }
	    });








}
