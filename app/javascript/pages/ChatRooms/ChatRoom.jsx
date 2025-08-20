
import { usePage } from "@inertiajs/react";
import ChatRoomForm from "./ChatRoomForm";
import ChatRoomMessages from "./messages/ChatRoomMessages";
import Message from "./messages/Message";

export default function ChatRoom() {
  const { user, messages}  = usePage().props;
  return (
    <div className="rounded-lg  h-full">
      <ChatRoomMessages>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ChatRoomMessages>
      <ChatRoomForm />
    </div>
  );
}