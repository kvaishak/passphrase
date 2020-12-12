import { MessageType } from "./type";

// This file is ran as a background script
chrome.runtime.onMessage.addListener((message: MessageType) => {
    switch (message.type) {
        case "COPY_PASS_PHRASE": handleCopyPassPhrase(message.phrase); break;
        case "INJ_CONTENT": handleContentInjection(); break;
        default: break;
    }

  });

  function handleContentInjection(){
    chrome.tabs.executeScript({file: "content.js"});
  }


  function handleCopyPassPhrase(phrase: string){
      console.log("Hello", phrase);
    //copies the password to the clipboard
    copyToClipboard(phrase);

    //transfers the message to the active tabs
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        tabs.forEach((tab) => {
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, phrase);
          }
        });
    });
  }


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