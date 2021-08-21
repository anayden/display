require "test_helper"

class ComponentsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get components_update_url
    assert_response :success
  end
end
