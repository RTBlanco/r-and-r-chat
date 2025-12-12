import { TextInput } from "flowbite-react"
import { usePage, router } from "@inertiajs/react";
import { Form } from '@inertiajs/react'
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

export default function ChatRoomForm({className}) {
  const isMobile = useMediaQuery({query: '(max-width: 600px'})
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
    // console.log(event)
    // if (event.key === 'Enter') {
    //   const messageData = {
    //     content: message,
    //     user_id: user.id,
    //   }   
    //   router.post(`/chat_rooms/${chat_room.id}/messages`, messageData, {except: ['chat_room', 'messages']})
    //   event.target.value = ''
    // }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    // if (isMobile) {
      console.log(e)
      const messageData = {
        content: message,
        user_id: user.id,
      }   
      router.post(`/chat_rooms/${chat_room.id}/messages`, messageData, {except: ['chat_room', 'messages']})
    // }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setMessage(value)
  }

  // return (
  //   <form className={className} onSubmit={handleOnSubmit}>
  //     <TextInput 
  //       id="message" 
  //       type="text"
  //       placeholder={`message in ${chat_room.name}`} 
  //       // onKeyDown={handleKeyDown}
  //       // onChange={handleChange}
  //       required
  //       sizing="lg"
  //     />
  //   </form>
  // )

  return (
    <Form className={className} 
      action={`/chat_rooms/${chat_room.id}/messages`} 
      method="POST"
      transform={(data) => ({...data, user_id: user.id})}
      resetOnSuccess
      except={['chat_room', 'messages']}
      >
      <TextInput 
        id="content"
        name="content" 
        type="text"
        placeholder={`message in ${chat_room.name}`} 
        required
      />
    </Form>
  )
}