# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Comment.destroy_all
User.destroy_all

# db/seeds.rb
john = User.create(email: 'john@beatles.com', password: 'testtest', avatar_url: 'http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MDcwNjQzMjEx.jpg')
paul = User.create(email: 'paul@beatles.com', password: 'testtest', avatar_url: 'http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MDcwNjQzMjEx.jpg')
ringo = User.create(email: 'ringo@beatles.com', password: 'testtest', avatar_url: '')
george = User.create(email: 'george@beatles.com', password: 'testtest', avatar_url: '')

good_comment = Comment.create(
  content: 'A curated directory of 400 resources & tools for startups',
  user: john
)

bad_comment = Comment.create(
  content: 'Articles you need to read before launching a startup',
  user: paul
)

john.up_votes good_comment
paul.up_votes good_comment
george.up_votes good_comment

ringo.up_votes bad_comment
