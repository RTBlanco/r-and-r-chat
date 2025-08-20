import { ListGroup } from "flowbite-react";

export default function ChatRoomMessages({children}) {
  return (
    <div className="rounded-lg h-9/10">
      {/* <ListGroup> */}
      <ul className="list-none rounded-lg  bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-white">
        {children}
      </ul>
      {/* </ListGroup> */}
    </div>
  )
}