class AddComponentIdToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :component, null: true, foreign_key: true
  end
end
