Rails.application.routes.draw do
  # Rotas do Devise
  devise_for :users

  # Rotas para notas
  resources :notes do
    collection do
      delete 'destroy_multiple'
    end
  end

  # Rota de health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Rota raiz
  authenticated :user do
    root to: "notes#index", as: :authenticated_root
  end

  unauthenticated do
    devise_scope :user do
      root to: "devise/sessions#new"
    end
  end
end