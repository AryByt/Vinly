# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all
Genre.destroy_all
User.destroy_all
@admin = User.create!(username: 'arya', email: 'arya@email.com', password: '123456')

puts "#{User.count} User created"

genre1 = Genre.create! name: 'Rock', title: 'Rock'
puts "#{Genre.count} genres created"

song1 = Song.new name: 'ELEPHANNT', description: 'A LOT '

# associating the tables

genre1.songs << song1
