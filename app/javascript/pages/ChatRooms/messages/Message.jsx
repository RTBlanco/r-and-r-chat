import { Avatar, ListGroupItem } from "flowbite-react";
import { usePage } from "@inertiajs/react";

export default function Message({message}) {
  const {user} = usePage().props

  function currentUser() {
    const color = user.id === message.user.id ? "text-green-500" : "text-yellow-500"
    return `flex items-center ${color}`
  }

  return (
    <ListGroupItem>
      <div className="flex">
        <Avatar className="mr-4" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
        <div className="flex flex-col items-start">
          <div className={currentUser()}>
            {message.user.user_name} 
            <div className="text-xs text-gray-900 dark:text-gray-400 ml-2"> 5:30 PM</div>
          </div>
          {message.content}
        </div>
      </div>
    </ListGroupItem>
  )
}