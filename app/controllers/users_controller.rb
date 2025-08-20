class UsersController < ApplicationController
  before_action :set_user, only: [ :edit, :update ]

  def edit
    render inertia: "users/edit/Edit"
  end

  def update
    if @user.update(user_params)
      redirect_to root_path, notice: "User updated successfully."
    else
      render inertia: "users/edit/Edit", props: { errors: @user.errors }
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
