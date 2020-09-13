chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		kana();
	}
});

function kana() {
  var body = $("body").html();

  var result = body.replace(/テクノロジー/g,"<strong>技術</strong>")
                  .replace(/ビジョン/g,"<strong>計画</strong>")
                  .replace(/テック/g,"<strong>技術</strong>")
                  .replace(/クラッシュ/g,"<strong>崩壊</strong>")
                  .replace(/トレンド/g,"<strong>流行</strong>")
                  .replace(/サプライ/g,"<strong>流通</strong>")
                  .replace(/キャリア/g,"<strong>仕事</strong>")
                  .replace(/インパクト/g,"<strong>衝撃</strong>")
                  .replace(/イノベーション/g,"<strong>革新</strong>")
                  .replace(/ユーザ/g,"<strong>利用者</strong>")
                  .replace(/エクスペリエンス/g,"<strong>体験</strong>")
                  .replace(/レポート/g,"<strong>報告</strong>")
                  .replace(/データ/g,"<strong>情報</strong>")
                  .replace(/アクション/g,"<strong>行動</strong>")




  $("body").html(result);
}
