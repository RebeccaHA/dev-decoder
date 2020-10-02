class Acronym < ApplicationRecord
    validates :name, presence: true, uniqueness: true, message: "This acronym already exists"
end
