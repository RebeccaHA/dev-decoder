
require 'csv'


csv = CSV.open('db/acronym.csv', headers: :first_row).map(&:to_h)

    csv.each do |row|
   
        acronym = Acronym.new
        acronym.acronym_name = row['name']
        acronym.description = row['description']
        acronym.definition = row['definition']
        acronym.save
        puts "#{acronym.acronym_name} saved"
    end
    
    puts "There are now #{Acronym.count} rows in the acronym table"