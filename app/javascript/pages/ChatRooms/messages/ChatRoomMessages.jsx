import { ListGroup } from "flowbite-react";

export default function ChatRoomMessages({children}) {
  return (
    <div className="rounded-lg border border-black h-9/10">
      <ListGroup>
        {children}
      </ListGroup>
    </div>
  )
}