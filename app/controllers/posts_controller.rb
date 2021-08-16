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

  def edit; end

  def destroy; end

  def show; end
end
