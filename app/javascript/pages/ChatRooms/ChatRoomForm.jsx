import { Button, TextInput } from "flowbite-react"
import { usePage } from "@inertiajs/react";
import { Form } from '@inertiajs/react'
import { useMediaQuery } from 'react-responsive';
import { BiSolidSend } from "react-icons/bi";

export default function ChatRoomForm({className}) {
  const isMobile = useMediaQuery({query: '(max-width: 600px'})
  const {user, chat_room}  = usePage().props;

  return (
    <Form className={`${className} `} 
      action={`/chat_rooms/${chat_room.id}/messages`} 
      method="POST"
      transform={(data) => ({...data, user_id: user.id})}
      resetOnSuccess
      options={{
        preserveScroll: true,
        except: ['chat_room', 'messages']
      }}
      >
      <TextInput 
        id="content"
        name="content" 
        type="text"
        placeholder={`message in ${chat_room.name}`} 
        sizing="lg"
        // rightIcon={() => 
          // <BiSolidSend className="cursor-pointer" onClick={() => console.log("Hello world")} />
        // }
      />
    </Form>
  )
}