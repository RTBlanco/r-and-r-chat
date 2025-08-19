import { Avatar, ListGroupItem } from "flowbite-react";

export default function Message({message}) {

  return (
    <ListGroupItem>
      <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <div className="content">
        <div className="name-time">
          RTblanco 
          <div className="time"> 5:30 PM</div>
        </div>
        {message.content}
      </div>
    </ListGroupItem>
  )
}