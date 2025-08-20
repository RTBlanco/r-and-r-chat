import { Avatar, ListGroupItem } from "flowbite-react";
import { usePage } from "@inertiajs/react";

export default function Message({message}) {
  const {user} = usePage().props

  function currentUser() {
    const color = user.id === message.user.id ? "text-green-500" : "text-yellow-500"
    return `flex items-center ${color}`
  }

  return (
    // <ListGroupItem className="ark:hover:bg-gray-500">
    <div className="mb-2 rounded-lg dark:hover:bg-gray-500">
      <div className="flex">
        <Avatar className="mr-4 relative" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
        <div className="flex flex-col items-start w-9/10">
          <div className={currentUser()}>
            {message.user.user_name} 
            <div className="text-xs text-gray-900 dark:text-gray-400 ml-2"> 5:30 PM</div>
          </div>
          <p>{message.content}</p>
        </div>
      </div>
    </div>
    // </ListGroupItem>
  )
}

