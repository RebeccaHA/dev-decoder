class UsersController < ApplicationController
    def create
        user = User.new(user_params)
    
        if user.save
          session[:id] = user.id
          render json: { status: 201, user: user, logged_in: true}
        else
          render json: { status: 500, message: 'There was an error in creating an account'}
        end
      end

      def show
        user = User.find_by(email: params[:user][:email])
        
        if user
          render json: { status: 201, user: user, logged_in: true}
      end
    end

      def index
        users = User.all

        render json: users
      end

    
    
      private
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
end