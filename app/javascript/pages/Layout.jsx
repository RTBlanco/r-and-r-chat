import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/chat_rooms">Chat Rooms</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <article>
        {children}
      </article>
    </main>
  )
}