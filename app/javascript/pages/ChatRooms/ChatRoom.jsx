
import { usePage } from "@inertiajs/react";
import ChatRoomForm from "./ChatRoomForm";
import ChatRoomMessages from "./messages/ChatRoomMessages";
import Message from "./messages/Message";
import { useState, useEffect } from "react";


import * as ActionCable from '@rails/actioncable'
window.App || (window.App = {});
window.App.cable = ActionCable.createConsumer();


export default function ChatRoom() {
  const {chat_room, messages}  = usePage().props;
  const [stateMessages, setStateMessages] = useState(messages)
  
  useEffect(() => {
    // setStateMessages(messages)
    App.cable.subscriptions.create({ channel: "ChatRoomChannel", chat_room_id: chat_room.id }, {
      connected() {
        console.log("Connected to the channel:", this);
      },
      disconnected() {
        console.log("Disconnected");
      },
      received(data) {
        console.log("Received some data:", data);
        setStateMessages(m => [...m, data])
        // console.log(messages) 
        // const new_messages = stateMessages.map(message => {
        //   // console.log(message.id)
        //   // console.log(data.id)
        //   if (message.id === data.id) {
        //     return data
        //   } else {
        //     message
        //   }
        // })
        // setStateMessages(new_messages)
        // // console.log(statetMessages)
        // console.log(stateMessages)
      }
    });
  },[])

   
  return (
    <>
      <h1 className="flex justify-center text-sky-50">{chat_room.name}</h1>
      <div className="rounded-lg flex flex-col justify-between h-full">
        <ChatRoomMessages>
          {stateMessages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </ChatRoomMessages>
      </div>
      {/* <ChatRoomForm className='fixed bottom-0 left-0 w-full'/> */}
      <ChatRoomForm className='absolute w-full'/>
    </>
  );
} 