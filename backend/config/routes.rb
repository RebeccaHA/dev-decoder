Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :users, only: [:create]
  resources :acronyms, only: [:create,:show,:index]
end
