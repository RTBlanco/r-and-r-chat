
import { usePage } from "@inertiajs/react";
import ChatRoomForm from "./ChatRoomForm";
import ChatRoomMessages from "./messages/ChatRoomMessages";
import Message from "./messages/Message";
import { useState } from "react";


import consumer from "../../channels/consumer"

consumer.subscriptions.create("ChatRoomChannel", {
  // connected() {
  //   // Called when the subscription is ready for use on the server
  // },

  // disconnected() {
  //   // Called when the subscription has been terminated by the server
  // },

  // received(data) {
  //   // Called when there's incoming data on the websocket for this channel
  // }

  connected() {
    console.log("Connected to the channel:", this);
  },
  disconnected() {
    console.log("Disconnected");
  },
  received(data) {
    console.log("Received some data:", data);
  }
});


export default function ChatRoom() {
  const {chat_room, messages}  = usePage().props;
  const [newMessage, setNewMessage] = useState(false)

  return (
    <>
      <h1 className="flex justify-center text-sky-50">{chat_room.name}</h1>
      <div className="rounded-lg flex flex-col justify-between h-full">
        <ChatRoomMessages>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </ChatRoomMessages>
      </div>
      <ChatRoomForm />
    </>
  );
}