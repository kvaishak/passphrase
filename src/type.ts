// Popup or content script requesting the current status
interface InjectContentScript {
    type: "INJ_CONTENT";
  }
  
  // Background script broadcasting current status
  interface CopyPassphrase {
    type: "COPY_PASS_PHRASE";
    phrase: string;
  }
  
  export type MessageType = InjectContentScript | CopyPassphrase ;