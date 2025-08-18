class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :authenticate_user!

  use_inertia_instance_props

  # layout 'inertia_application'

  inertia_share do
    if user_signed_in?
      {
        user: current_user,
        chat_rooms: chat_rooms
      }
    end
  end

  def home
    render inertia: 'Home'
  end

  def login
    render inertia: 'Login/Login'
  end

  private

  def chat_rooms
    current_user.chat_rooms.map do |chat_room|
      {
        id: chat_room.id,
        name: chat_room.name,
        link: chat_room_path(chat_room)
      }
    end
  end
end
