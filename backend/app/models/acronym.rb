class Acronym < ApplicationRecord
    validates :name, presence: true, uniqueness: { message: "This acronym already exists" }
end
