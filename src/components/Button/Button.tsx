import * as React from "react";
import randomWords from "random-words";
import "./Button.css";

type ButtonProps = {
  addNumbers: boolean
}


export const Button = (props:ButtonProps) => {
  const [isCopied, setCopied] = React.useState(false);

  React.useEffect(()=> {
		chrome.runtime.sendMessage({ type: "INJ_CONTENT" });
	}, []);

  const onClick = () => {
    // setCopied(!isCopied);
    var randonmWord = randomWords( { exactly: 4, maxLength: 5, join: '-' });
    

    if(props.addNumbers){
      const minm = 1000, 
            maxm = 9999; 
      
      const num = Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
      randonmWord += `-${num}`;
    }
  
    chrome.runtime.sendMessage({ type: "COPY_PASS_PHRASE", phrase: randonmWord });
  };

  return (
    <div className="buttonContainer">
      <button className="phraseButton" onClick={onClick}>
        {isCopied ? "The Passphrase has been copied" : "Copy the Passphrase" }
      </button>
    </div>
  );
};