class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.string :album, null: false
      t.string :artist, null: false
    end
  end
end
