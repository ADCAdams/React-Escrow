# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dummyAd1 = "0xc87287ab5c515ca70e502ebddd6c99ccfa9e380c"
dummyAd2 = "0x5510f975eadb6e2dbd8442855b33bd5dbed25672"

contract = Contract.create([{buyer_address: dummyAd1},{seller_address: dummyAd2}, {amount: 5.00}])
