import { usePage } from "@inertiajs/react";

const ChatRooms = () => {
  const { user }  = usePage().props;

  return (
    <>
      <h1 className="text-white">Chat Rooms</h1>
      {console.log(user)}
    </>
  )
}

export default ChatRooms;