# == Schema Information
#
# Table name: post_templates
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  template   :json             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PostTemplate < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :template, presence: true

  def use_for(post)
    template.each do |component_template|
      post.components.create!(component_template)
    end
  end
end
