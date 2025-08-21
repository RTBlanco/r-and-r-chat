# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  use_inertia_instance_props

  # GET /resource/sign_in
  def new
    # super
    render inertia: "users/sessions/New"
  end

  # POST /resource/sign_in
  def create
    # super
    user = User.find_by(user_name: params[:user][:user_name])
    if user && user.valid_password?(params[:user][:password])
      sign_in(user)
      flash[:info] = "Signed in successfully."
      redirect_to root_path
    else
      puts "Authentication failed."
      render inertia: "users/sessions/New", props: { errors: "Invalid user name or password." }
    end
  end

  # DELETE /resource/sign_out
  def destroy
    sign_out current_user
    flash[:info] = "Signed out successfully."
    render inertia: "users/sessions/New"
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:user_name])
  end
end
