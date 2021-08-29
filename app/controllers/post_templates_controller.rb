class PostTemplatesController < ApplicationController

  def create_from
    template = PostTemplate.find(params[:id])
    post = Post.create!(component_id: params[:component_id])
    template.use_for(post)
    render json: post
  end
end
