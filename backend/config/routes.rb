Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :users, only: [:create,:show,:index]
  resources :acronyms, only: [:create,:index, :update]
end
