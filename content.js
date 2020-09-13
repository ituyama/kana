chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		kana();
	}
});

function kana() {


	const url = ;

	    $.getJSON("https://ituyama.github.io/kana/kana.json?callback=?", (data) => {
	      for (let i=0; i<data.length; i++){
	        console.log(`userid=${data[i].kana_list}, username=${data[i].kanji_list}`);



  var body = $("body").html();



  $("body").html(result);

	      }
	    });








}
