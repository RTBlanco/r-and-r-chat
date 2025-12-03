import { TextInput, Label } from "flowbite-react"
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";
import { Form } from '@inertiajs/react'

export default function ChatRoomForm({className}) {
  const {user, chat_room}  = usePage().props;

  return (
    <Form className={className} 
      action={`/chat_rooms/${chat_room.id}/messages`} 
      method="POST"
      transform={(data) => ({...data, user_id: user.id})}
      resetOnSuccess
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