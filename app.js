function onExtentionClick(tab) {
  const home = window.location.hostname

  console.log('Url:',home)
}

chrome.browserAction.onClicked.addListener(onExtentionClick)