# == Schema Information
#
# Table name: components
#
#  id             :integer          not null, primary key
#  component_type :string           not null
#  internal_name  :string           not null
#  name           :string           not null
#  ord            :integer          not null
#  value          :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  post_id        :integer
#
# Indexes
#
#  index_components_on_post_id  (post_id)
#
class Component < ApplicationRecord
  has_many :posts
  belongs_to :post

  order :ord

  validates :component_type, presence: true, inclusion: { in: %w[string boolean reference text] }
  validates :name, :ord, presence: true
  validates :internal_name, :ord, presence: true
end
