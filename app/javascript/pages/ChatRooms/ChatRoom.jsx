
import { Card } from "flowbite-react";
import { usePage } from "@inertiajs/react";

export default function ChatRoom() {
  const { user, chat_room, messages}  = usePage().props;


  return (
    <div className="">
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {chat_room.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}
