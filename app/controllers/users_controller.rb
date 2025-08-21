class UsersController < ApplicationController
  before_action :set_user, only: [ :edit, :update ]

  def edit
    render inertia: "users/edit/Edit"
  end

  def update
    if current_user.update(user_params)
      if current_user.saved_change_to_encrypted_password?

        flash[:info] = "Password changed successfully. Please sign in again."
        redirect_to new_user_session_path
      else
        flash[:success] = "User updated successfully."
        redirect_to edit_user_path(current_user)
      end
    else
      errors = current_user.errors.map do |key, value|
        [ key.attribute, current_user.errors.full_messages_for(key.attribute) ]
      end.to_h
      redirect_to edit_user_path(current_user), inertia: { errors: }
    end
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
