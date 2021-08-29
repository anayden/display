class ComponentsController < ApplicationController
  def index
    @components = Component.where(post_id: params[:post_id]).all
    render json: @components
  end

  def update
    @component = Component.find(params[:id])
    @component.update!(update_component_params)
    ActionCable.server.broadcast("post_#{@component.post_id}", @component.as_json)
    render json: @component
  end

  private

  def update_component_params
    params.require(:component).permit(:value)
  end
end
