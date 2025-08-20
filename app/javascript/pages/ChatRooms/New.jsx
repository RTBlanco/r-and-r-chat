
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function New() {
  const [nameState, setNameState] = useState('')

  function handleOnChange(e) {
    const value = e.target.value
    setNameState(value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    router.post('/chat_rooms', {name: nameState})
  }

  return (
    <div className="h-full flex justify-center items-center">
      <Card className="h-1/2 w-full lg:w-1/2">
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <div>
            <div className="mb-2 justify-self-center block">
              <Label htmlFor="name">Chat Room Name</Label>
            </div>
            <TextInput id="name" type="text" placeholder="name" onChange={handleOnChange}required />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
