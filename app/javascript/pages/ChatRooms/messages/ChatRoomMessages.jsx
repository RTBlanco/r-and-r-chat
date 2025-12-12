
export default function ChatRoomMessages({children}) {
  return (
    <>
      <ul className="list-none rounded-lg  bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-white">
        {children}
      </ul>  
    </>
  )
}