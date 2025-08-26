class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # allow_browser versions: :modern
  before_action :authenticate_user!

  use_inertia_instance_props

  # layout 'inertia_application'

  inertia_share do
    if user_signed_in?
      {
        user: current_user,
        avatar: current_user.avatar.attached? ? url_for(current_user.avatar) : nil,
        flash: flash.to_h
      }
    else
      {
        user: nil,
        flash: flash.to_h
      }
    end
  end

  def home
    render inertia: "Home"
  end


  private
end
