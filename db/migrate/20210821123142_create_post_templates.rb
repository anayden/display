class CreatePostTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :post_templates do |t|
      t.string :name, null: false, unique: true, blank: false
      t.json :template, null: false, blank: false

      t.timestamps
    end
  end
end
