import { TextInput } from "flowbite-react"
import { usePage, router } from "@inertiajs/react";
import { Form } from '@inertiajs/react'
import { useState } from "react";


export default function ChatRoomForm({className}) {
  const {user, chat_room}  = usePage().props;


  // return (
  //   <Form className={className} 
  //     action={`/chat_rooms/${chat_room.id}/messages`} 
  //     method="POST"
  //     transform={(data) => ({...data, user_id: user.id})}
  //     resetOnSuccess
  //     >
  //     <TextInput 
  //       id="content"
  //       name="content" 
  //       type="text"
  //       placeholder={`message in ${chat_room.name}`} 
  //       required
  //     />
  //   </Form>
  // )
 

  const [message, setMessage ] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const messageData = {
        content: message,
        user_id: user.id,
      }   
      router.post(`/chat_rooms/${chat_room.id}/messages`, messageData, {except: ['chat_room', 'messages']})
      event.target.value = ''
      event.target.blur();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value
    setMessage(value)
  }

  return (
    <div className={className}>
      <TextInput 
        id="message" 
        type="text"
        placeholder={`message in ${chat_room.name}`} 
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        required
        sizing="lg"
      />
    </div>
  )
}