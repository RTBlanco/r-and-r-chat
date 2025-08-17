class MessagesController < ApplicationController
  before_action :set_chat_room, only: [:create]

  def create
    @message = current_user.messages.new(message_params.merge(chat_room: @chat_room))

    if @message.save
      redirect_to chat_room_path(@chat_room), notice: "Message was successfully created."
    else
      redirect_to chat_room_path(@chat_room), alert: "Error creating message."
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
