class CreateProjectsTable < ActiveRecord::Migration[6.1]
  def change

    create_table :projects do |t|
      t.string :name, null: false
      t.text :description
      t.timestamps null: false
    end
    
  end
end
