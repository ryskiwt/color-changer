chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.browserAction.getBadgeText({}, function(text) {

    if (text==="on") {
      chrome.browserAction.setBadgeText({ text: "" });
      return;
    }

    chrome.browserAction.setBadgeText({ text: "on" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "black"});

  });
});

chrome.commands.onCommand.addListener(function (command) {
  chrome.browserAction.getBadgeText({}, function(text) {

    if (text==="") {
      return;
    }

    // カラー設定
    var msg = {};
    switch (command) {
      case "red":
        msg.color = "red";
        break;
      case "blue":
        msg.color = "blue";
        break;
    }

    // 取得するタブの条件
    var queryInfo = {
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    };

    // タブの情報を取得する
    chrome.tabs.query(queryInfo, function (result) {
      var currentTab = result.shift();

      // 現在表示しているタブにメッセージを送る
      chrome.tabs.sendMessage(currentTab.id, msg, function() {});
    });

  });
});
