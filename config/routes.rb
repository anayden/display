# == Route Map
#

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'components/update'
  root to: 'posts#index'
  post 'post_templates/create_from/:id', to: 'post_templates#create_from'
  resources :posts do
    collection do
      get :list
    end
  end
  resources :components
end
