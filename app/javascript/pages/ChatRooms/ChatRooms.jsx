import { usePage } from "@inertiajs/react";
import ChatRoomCard from "./ChatRoomCard";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

const ChatRooms = ({props}) => {
  const { user, chat_rooms}  = usePage().props;

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  
  return (
    <>
      <div className="mb-2 flex justify-center w-full gap-2" >
        <ToggleSwitch checked={switch1} label="Created By me" onChange={setSwitch1} />
        <ToggleSwitch checked={switch2} label="Joined" onChange={setSwitch2} />
      </div>
      <div className="grid h-full w-full md:grid-cols-4 justify-self-center gap-4">
        {chat_rooms.map(room => (
          <ChatRoomCard key={room.id} room={room}/>
        ))}
      </div>
    </>
  )
}

export default ChatRooms;