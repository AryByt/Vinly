class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :img_url
      t.integer :year
      t.references :genre, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :buy
      t.string :description
      t.string :artist
      t.string :price

      t.timestamps
    end
  end
end
