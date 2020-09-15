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
									.replace(/トレーニング/g,"<strong>訓練</strong>")
									.replace(/ギャップ/g,"<strong>格差</strong>")
									.replace(/バックオフィス/g,"<strong>事務部門</strong>")
									.replace(/コンシェルジュ/g,"<strong>世話係</strong>")
									.replace(/コミット/g,"<strong>約束</strong>")
									.replace(/アラート/g,"<strong>警報</strong>")
									.replace(/プライオリティ/g,"<strong>優先順位</strong>")
									.replace(/クリティカル/g,"<strong>致命的</strong>")
									.replace(/リテラシー/g,"<strong>利用能力</strong>")
									.replace(/ミッション/g,"<strong>使命</strong>")
									.replace(/シェア/g,"<strong>共有</strong>")
									.replace(/アジェンダ/g,"<strong>協議事項</strong>")
									.replace(/リソース/g,"<strong>資源</strong>")
									.replace(/コンセンサス/g,"<strong>合意</strong>")
									.replace(/インテグレーション/g,"<strong>統合</strong>")
									.replace(/デプロイ/g,"<strong>展開</strong>")
									.replace(/バッファ/g,"<strong>余裕</strong>")
									.replace(/インセンティブ/g,"<strong>報酬</strong>")
									.replace(/パフォーマンス/g,"<strong>性能</strong>")
									.replace(/エビデンス/g,"<strong>証拠</strong>")
									.replace(/スキル/g,"<strong>技能</strong>")






  $("body").html(result);
}
