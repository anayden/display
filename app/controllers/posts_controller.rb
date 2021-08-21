# frozen_string_literal: true

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
    @post = Post.includes(:components).find(edit_post_params)
  end

  def destroy; end

  def show; end

  private

  def edit_post_params
    params.require(:id)
  end
end
