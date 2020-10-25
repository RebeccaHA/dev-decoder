Rails.application.routes.draw do
  resources :sessions, only: [:create, :logged_in]
  resources :users, only: [:create,:show,:index]
  resources :acronyms, only: [:create,:index, :update]
  get 'logged_in', to: 'sessions#logged_in'
end
