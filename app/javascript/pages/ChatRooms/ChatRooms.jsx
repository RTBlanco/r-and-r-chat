import { usePage } from "@inertiajs/react";
import ChatRoomCard from "./ChatRoomCard";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

const ChatRooms = () => {
  const { user, chat_rooms}  = usePage().props;

  const [createdBy, setCreatedBy] = useState(false);
  const [joined, setJoined] = useState(false);

  function chatRooms() {
    return chat_rooms.filter(room => (!joined || room.joined) && (!createdBy || room.user_id === user.id));
  }
  
  return (
    <>
      <div className="mb-2 flex justify-center w-full gap-2" >
        <ToggleSwitch checked={createdBy} label="Created By me" onChange={setCreatedBy} />
        <ToggleSwitch checked={joined} label="Joined" onChange={setJoined} />
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {chatRooms().map(room => (
          <ChatRoomCard key={room.id} room={room}/>
        ))}
      </div>
    </>
  )
}

export default ChatRooms;