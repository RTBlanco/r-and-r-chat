class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :user_name, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 20 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 255 }


  has_many :messages, dependent: :destroy
  has_many :chat_rooms, through: :messages
  has_many :created_chat_rooms, class_name: "ChatRoom", foreign_key: "user_id", dependent: :destroy
end
