# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Seed Users
users = [
  { user_name: "Alice", email: "alice@example.com", password: "password1" },
  { user_name: "Bob", email: "bob@example.com", password: "password2" },
  { user_name: "Charlie", email: "charlie@example.com", password: "password3" }
]

users.each do |user_attrs|
  User.find_or_create_by!(email: user_attrs[:email]) do |user|
    user.user_name = user_attrs[:user_name]
    user.password = user_attrs[:password]
  end
end

# Seed ChatRooms
chat_rooms = [
  { name: "General" },
  { name: "Tech Talk" },
  { name: "Random" }
]

chat_rooms.each do |room_attrs|
  ChatRoom.find_or_create_by!(name: room_attrs[:name])
end

# Seed Messages
user_records = User.all.index_by(&:user_name)
chat_room_records = ChatRoom.all.index_by(&:name)

messages = [
  { content: "Hello everyone!", user: user_records["Alice"], chat_room: chat_room_records["General"] },
  { content: "Hi Alice!", user: user_records["Bob"], chat_room: chat_room_records["General"] },
  { content: "Anyone into Ruby?", user: user_records["Charlie"], chat_room: chat_room_records["Tech Talk"] },
  { content: "I love Ruby!", user: user_records["Alice"], chat_room: chat_room_records["Tech Talk"] },
  { content: "Random thoughts...", user: user_records["Bob"], chat_room: chat_room_records["Random"] }
]

messages.each do |msg_attrs|
  Message.create!(
    content: msg_attrs[:content],
    user: msg_attrs[:user],
    chat_room: msg_attrs[:chat_room]
  )
end
