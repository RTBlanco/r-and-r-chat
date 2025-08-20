class ChatRoomsController < ApplicationController
  use_inertia_instance_props
  def index
    @chat_rooms = ChatRoom.all

    render inertia: "ChatRooms/ChatRooms"
  end

  def show
    @chat_room = ChatRoom.find(params[:id])
    @messages = @chat_room.messages.includes(:user).map do |message|
      {
        id: message.id,
        content: message.content,
        chat_room_id: message.chat_room_id,
        user: {
          id: message.user.id,
          user_name: message.user.user_name
        }
      }
    end

    render inertia: "ChatRooms/ChatRoom"
  end

  def new
    # @chat_room = ChatRoom.new
    render inertia: "ChatRooms/New"
  end

  def create
    @chat_room = current_user.created_chat_rooms.new(chat_room_params)

    if @chat_room.save
      redirect_to chat_room_path(@chat_room), notice: "Chat room was successfully created."
    else
      render :new, alert: "Error creating chat room."
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:name)
  end
end
