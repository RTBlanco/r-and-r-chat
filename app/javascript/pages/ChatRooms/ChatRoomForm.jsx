import { TextInput, Label } from "flowbite-react"
import { usePage } from "@inertiajs/react";

export default function ChatRoomForm() {
  const {chat_room}  = usePage().props;
  return (
    <div className="w-full">
      <TextInput id="message" type="test" placeholder={`message in ${chat_room.name}`} required />
    </div>
  )
}