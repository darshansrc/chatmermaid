import React from "react";
import ChatBox from "../(app)/mermaid/ChatBox";

const ChatPage = () => {
  const onChange = (e: any) => {
    return;
  };
  return (
    <div className="min-w-screen max-w-screen min-h-screen max-h-screen ">
      <ChatBox diagramId="fef" code="wfw" onChange={onChange} />
    </div>
  );
};

export default ChatPage;
