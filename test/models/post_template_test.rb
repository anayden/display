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
require "test_helper"

class PostTemplateTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
