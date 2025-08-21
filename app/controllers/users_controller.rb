class UsersController < ApplicationController
  before_action :set_user, only: [ :edit, :update ]

  def edit
    render inertia: "users/edit/Edit"
  end

  def update
    if @user.update(user_params)
      if @user.saved_change_to_encrypted_password?
        sign_out @user
        flash[:info] = "Password changed successfully. Please sign in again."
        redirect_to new_user_session_path, notice: "Password changed successfully. Please sign in again"
      else
        flash[:success] = "User updated successfully."
        redirect_to edit_user_path(@user), success: "User updated successfully."
      end
    else
      errors = @user.errors.map do |key, value|
        [ key.attribute, @user.errors.full_messages_for(key.attribute) ]
      end.to_h
      redirect_to edit_user_path(@user), inertia: { errors: }
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
