import { TextInput, Label } from "flowbite-react"
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function ChatRoomForm() {
  const {user, chat_room}  = usePage().props;

  const [message, setMessage ] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const messageData = {
        content: message,
        user_id: user.id,
      }   
      router.post(`/chat_rooms/${chat_room.id}/messages`, messageData)
      event.target.value = ''
    }
  };

  const handleChange = (e) => {
    const value = e.target.value
    setMessage(value)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <TextInput 
        id="message" 
        type="text"
        placeholder={`message in ${chat_room.name}`} 
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        required
      />
    </div>
  )
}