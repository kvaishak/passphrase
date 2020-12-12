// This file is ran as a background script
chrome.runtime.onMessage.addListener((request) => {

    //copies the password to the clipboard
    copyToClipboard(request);

    //transfers the message to the active tabs
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, request);
          }
        });
    });

  });

  function copyToClipboard(text: string) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  };