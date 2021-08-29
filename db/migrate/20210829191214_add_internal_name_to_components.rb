class AddInternalNameToComponents < ActiveRecord::Migration[6.1]
  def change
    add_column :components, :internal_name, :string, null: false
  end
end
