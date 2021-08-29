# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  component_id :integer
#
# Indexes
#
#  index_posts_on_component_id  (component_id)
#
# Foreign Keys
#
#  component_id  (component_id => components.id)
#
class Post < ApplicationRecord
  belongs_to :component, optional: true
  has_many :components, dependent: :destroy
end
