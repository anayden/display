class CreateComponents < ActiveRecord::Migration[6.1]
  def change
    create_table :components do |t|
      t.string :type
      t.integer :ord
      t.string :value
      t.references :post

      t.timestamps
    end
  end
end
