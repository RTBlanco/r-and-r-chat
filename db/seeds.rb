# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Seed some default users

# Assuming you have a User model with fields: name, email, and password_digest
# And a Message model with fields: content, user_id

User.find_or_create_by!(email: 'alice@example.com') do |user|
  user.name = 'Alice'
  user.password = 'password123'
end

User.find_or_create_by!(email: 'bob@example.com') do |user|
  user.name = 'Bob'
  user.password = 'password123'
end

alice = User.find_by(email: 'alice@example.com')
bob = User.find_by(email: 'bob@example.com')

Message.find_or_create_by!(content: 'Hello, Bob!', user: alice)
Message.find_or_create_by!(content: 'Hi, Alice!', user: bob)
