class CreateComments < ActiveRecord::Migration[6.1]
  def change

    create_table :comments do |t|
      t.string :body, length: {in: 1..140}
      t.timestamps null: false
    end
  end
end