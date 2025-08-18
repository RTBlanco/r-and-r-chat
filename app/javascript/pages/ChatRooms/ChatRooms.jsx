import { usePage } from "@inertiajs/react";
import ChatRoomCard from "./ChatRoomCard";

const ChatRooms = ({props}) => {
  const { user, chat_rooms}  = usePage().props;

  
  return (
    <div className="grid grid-cols-4 gap-4">
      {chat_rooms.map(room => (
        <ChatRoomCard key={room.id} room={room}/>
      ))}
    </div>
  )
}

export default ChatRooms;