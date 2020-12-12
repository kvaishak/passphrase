import * as React from "react";
import randomWords from "random-words";
import "./Button.css";

export const Button = () => {
  const [isCopied, setCopied] = React.useState(false);

  const onClick = () => {
    // setCopied(!isCopied);
    const randonmWord = randomWords( { exactly: 4, maxLength: 5, join: '-' });
    chrome.runtime.sendMessage(randonmWord);
  };

  return (
    <div className="buttonContainer">
      <button className="snowButton" onClick={onClick}>
        {isCopied ? "The Passphrase has been copied" : "Copy the Passphrase" }
      </button>
    </div>
  );
};