class PostTemplatesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create_from]

  def create_from
    template = PostTemplate.find(create_params)
    post = Post.create
    template.use_for(post)
    redirect_to edit_post_path(post)
  end

  private

  def create_params
    params.require(:id)
  end
end
