class PostsController < ApplicationController
  def index; end

  def list
    @posts = Post.where(component_id: nil).all
    render json: @posts
  end

  def create
    @post = Post.new
  end

  def edit
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    head :no_content
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def for_component
    @posts = Post.where(component_id: params[:component_id]).all
    render json: @posts
  end
end
