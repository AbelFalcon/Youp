chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "buscarEnYoutube",
      title: "Buscar en YouTube",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === "buscarEnYoutube") {
      var selectedText = info.selectionText;
      var url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(selectedText);
      chrome.tabs.create({ url: url });
    }
  });

  