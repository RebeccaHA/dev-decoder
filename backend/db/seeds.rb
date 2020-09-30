
require 'csv'


csv = CSV.open('db/acronym.csv', headers: :first_row).map(&:to_h)

    csv.each do |row|
   
        acronym = Acronym.new
        acronym.name = row['name']
        acronym.description = row['description']
        acronym.definition = row['definition']
        acronym.save
        puts "#{acronym.name} saved"
    end
    
    puts "There are now #{Acronym.count} rows in the acronym table"