class AcronymsController < ApplicationController
    def index
        acronyms = Acronym.all

        render json: acronyms
    end


    def create
        acronym = Acronym.new(acronyms_params)
        if acronym.save
            render json: acronym
        else 
           render json: acronym.errors[:name]
        end
    end

    def show
        acronym = Acronym.find_by(params[:id])

        render json: acronym
    end

       


    private
    def acronyms_params
        params.require(:acronym).permit(:name, :definition, :description)
    end
end