import { usePage } from "@inertiajs/react";
import ChatRoomCard from "./ChatRoomCard";
import { ToggleSwitch, TextInput } from "flowbite-react";
import { useState } from "react";

const ChatRooms = () => {
  const { user, avatar, chat_rooms}  = usePage().props;

  const [createdBy, setCreatedBy] = useState(false);
  const [joined, setJoined] = useState(false);
  const [searched, setSearched] = useState('')

  function chatRooms() {
    return chat_rooms.filter(room => {
      
      const joinedCheck = !joined || room.joined
      const createdCheck = !createdBy || room.user_id === user.id
      const searchCheck = !searched || room.name.toLowerCase().includes(searched)
      
      return joinedCheck && createdCheck && searchCheck
    });
  }
  return (
    <>
      <TextInput sizing="lg" className='mb-1' type="text" onChange={(e) => setSearched(e.target.value)}/>
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