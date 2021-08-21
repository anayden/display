require "test_helper"

class PostTemplateControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get post_template_create_url
    assert_response :success
  end
end
