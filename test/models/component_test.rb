# == Schema Information
#
# Table name: components
#
#  id             :integer          not null, primary key
#  component_type :string           not null
#  name           :string           not null
#  ord            :integer          not null
#  value          :json
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  post_id        :integer
#
# Indexes
#
#  index_components_on_post_id  (post_id)
#
require "test_helper"

class ComponentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
