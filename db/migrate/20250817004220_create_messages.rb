class CreateMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :chat_room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
