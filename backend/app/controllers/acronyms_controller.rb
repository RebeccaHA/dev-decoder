require 'pry'
class AcronymsController < ApplicationController
    def index
        acronyms = Acronym.all.order(name: :asc)

        render json: acronyms
    end


    def create
        acronym = Acronym.new(acronyms_params)
        if acronym.save
            render json: acronym
        else 
           render json: {message: acronym.errors[:name]}
        end
    end

    
    def update
       
        acronym = Acronym.find_by(id: params[:id])
        
       if acronym.favourite == false
        acronym.favourite = true
       elsif acronym.favourite == true 
        acronym.favourite = false
       end
      
   
      if  acronym.update(acronyms_params)
        
       
            render json: acronym
        else 
           render json: {message: acronym.errors[:name]}
        end
    end
  

       


    private
    def acronyms_params
        params.permit(:name, :definition, :description)
    end
end