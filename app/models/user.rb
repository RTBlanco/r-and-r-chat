class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :user_name, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 20 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 255 }


  has_one_attached :avatar
  has_many :messages, dependent: :destroy
  has_many :chat_rooms, through: :messages
  has_many :created_chat_rooms, class_name: "ChatRoom", foreign_key: "user_id", dependent: :destroy



  # after_commit :attach_default_avatar, on: :create, unless: :avatar_attached?


  # private

  # def attach_default_avatar
  #   default_avatar_path = Rails.root.join("app", "assets", "images", "default_avatar.png")
  #   avatar.attach(io: File.open(default_avatar_path), filename: "default_avatar.png", content_type: "image/png")
  # end

  # def avatar_attached?
  #   avatar.attached?
  # end
end
