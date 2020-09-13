chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
});
chrome.contextMenus.create({
    "title": "コトバンクで「%s」を検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        chrome.tabs.create({
            url: 'https://kotobank.jp/gs/?q='+encodeURIComponent(info.selectionText)
        });
    }
});
