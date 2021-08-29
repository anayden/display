class PostsController < ApplicationController
  def index; end

  def list
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new
  end

  def update; end

  def edit
    @post = Post.includes(:components).find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    head :no_content
  end

  def show; end
end
