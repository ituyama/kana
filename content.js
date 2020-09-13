chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		kana();
	}
});

function kana() {



	    $.getJSON("https://ituyama.github.io/kana/kana.json?callback=?", (callback) => {
	      for (let i=0; i<callback.length; i++){
	        console.log(`userid=${callback[i].kana_list}, username=${callback[i].kanji_list}`);



  var body = $("body").html();



  $("body").html(result);

	      }
	    });








}
