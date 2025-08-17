class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  use_inertia_instance_props

  # layout 'inertia_application'

  # inertia_share do
  #   if logged_in?
  #     {
  #       user: logged_in_user,
  #     }
  #   end
  # end

  def home
    render inertia: 'Home'
  end

  def login
    render inertia: 'Login/Login'
  end
end
