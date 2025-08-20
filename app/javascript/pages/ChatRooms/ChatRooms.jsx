import { usePage } from "@inertiajs/react";
import ChatRoomCard from "./ChatRoomCard";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

const ChatRooms = ({props}) => {
  const { user, chat_rooms}  = usePage().props;

  const [createdBy, setCreatedBy] = useState(false);
  const [joined, setJoined] = useState(false);

  function chatRooms() {

    let rooms = []

    if (joined && !createdBy) {
      rooms = chat_rooms.filter(room => room.joined)
    } else if (createdBy && !joined ) {
      rooms = chat_rooms.filter(room => room.user_id === user.id)
    } else if( joined && createdBy ) {
      rooms = chat_rooms.filter(room => ( room.joined ) && (room.user_id === user.id))
    } else {
      rooms = chat_rooms
    }

    return rooms

  }
  
  console.log(chatRooms())
  return (
    <>
      <div className="mb-2 flex justify-center w-full gap-2" >
        <ToggleSwitch checked={createdBy} label="Created By me" onChange={setCreatedBy} />
        <ToggleSwitch checked={joined} label="Joined" onChange={setJoined} />
      </div>
      <div className="grid h-full w-full md:grid-cols-4 justify-self-center gap-4">
        {chatRooms().map(room => (
          <ChatRoomCard key={room.id} room={room}/>
        ))}
      </div>
    </>
  )
}

export default ChatRooms;