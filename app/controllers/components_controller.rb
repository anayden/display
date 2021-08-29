class ComponentsController < ApplicationController
  def update
    @component = Component.find(params[:id])
    @component.update!(update_component_params)
    render json: @component
  end

  private

  def update_component_params
    params.require(:component).permit(:value)
  end
end
