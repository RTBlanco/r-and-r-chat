
import { usePage } from "@inertiajs/react";
import ChatRoomForm from "./ChatRoomForm";
import ChatRoomMessages from "./messages/ChatRoomMessages";
import Message from "./messages/Message";
import { useState } from "react";

export default function ChatRoom() {
  const {messages}  = usePage().props;
  const [newMessage, setNewMessage] = useState(false)

  return (
    <div className="rounded-lg flex flex-col justify-between h-full">
      <ChatRoomMessages>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ChatRoomMessages>
      <ChatRoomForm />
    </div>
  );
}