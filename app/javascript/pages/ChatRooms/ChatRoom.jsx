
import { usePage } from "@inertiajs/react";
import ChatRoomForm from "./ChatRoomForm";
import ChatRoomMessages from "./messages/ChatRoomMessages";
import Message from "./messages/Message";
import { ListGroup, ListGroupItem } from "flowbite-react";

export default function ChatRoom() {
  const { user, chat_room, messages}  = usePage().props;

  console.log(messages)
  return (
    <div className="rounded-sm border border-black h-full">
      <ChatRoomMessages>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ChatRoomMessages>
      <ChatRoomForm />
    </div>
  );
}