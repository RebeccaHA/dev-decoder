class CreateAcronyms < ActiveRecord::Migration[6.0]
  def change
    create_table :acronyms do |t|
      t.string :name
      t.string :definition
      t.string :description

      t.timestamps
    end
  end
end
