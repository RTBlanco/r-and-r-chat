class MessagesController < ApplicationController
  before_action :set_chat_room, only: [:create]

  def create
    # binding.pry
    new_message = current_user.messages.new(message_params.merge(chat_room: @chat_room))

    if new_message.save
      message = {
        id: new_message.id,
        content: new_message.content,
        chat_room_id: new_message.chat_room_id,
        user: {
          id: new_message.user.id,
          user_name: new_message.user.user_name,
          avatar: new_message.user.avatar.attached? ? url_for(new_message.user.avatar) : nil
        }
      }
      ChatRoomChannel.broadcast_to(@chat_room, message)
      redirect_to chat_room_path(@chat_room)
    else
      flash[:failure] = "Error creating message."
      redirect_to chat_room_path(@chat_room)
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :chat_room_id, :user_id)
  end

  def set_chat_room
    @chat_room = ChatRoom.find(params[:chat_room_id])
  end
end
