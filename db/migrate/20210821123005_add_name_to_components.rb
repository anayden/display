class AddNameToComponents < ActiveRecord::Migration[6.1]
  def change
    add_column :components, :name, :string, null: false, blank: false
  end
end
