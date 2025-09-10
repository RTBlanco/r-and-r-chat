class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    message = Message.find(params[:message_id])
    stream_for message
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
