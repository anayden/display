class CreateComponents < ActiveRecord::Migration[6.1]
  def change
    create_table :components do |t|
      t.string :component_type, null: false
      t.integer :ord, null: false
      t.string :value, null: true
      t.references :post, null: true

      t.timestamps
    end
  end
end
