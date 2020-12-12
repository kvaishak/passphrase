const toastDiv = document.createElement("div");
toastDiv.setAttribute('id', 'passphrase_snackbar');

//injecting CSS to the DOM
var styles = `
#passphrase_snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
    border-radius:5px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  #passphrase_snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  
  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
  }
  
  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
  }
  
  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


//Injecting the toast Element to the DOM
const body = document.getElementsByTagName("body");
body[0]?.append(toastDiv);

chrome.runtime.onMessage.addListener((request) => {
    toastDiv.innerHTML = `${request} 🔑 Copied`;
    toastDiv.className = "show";
    setTimeout(() => { 
        toastDiv.className = toastDiv.className.replace("show", "");
    }, 3000);
  });