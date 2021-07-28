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

@genre1 = Genre.create!(name: 'Alternative rock', title: 'https://ci5.googleusercontent.com/proxy/oyrkSlL09YSkthaHfnaxlUeSOPK-vOzBQHHxITWaWVp7-7CNxOS5dgXYnI-9n3NJDs05FHWieV5hdjI0ttUuX4bMZcYeZXgMr-CQglCbWll5L6mMRaovFFrq-X9lspmBZwEUTdh_flgkcYVmUSE2g-LeFg=s0-d-e1-ft#https://api.freelogodesign.org/files/122a78ced56148ec80d7ab9561226a94/thumb/logo_200x200.png?v=0')
@genre2 = Genre.create!(name: 'Rock', title: 'https://ci3.googleusercontent.com/proxy/uUFtobAh3N8aEg3i1QHblIhBQteBJ0Mm5fxznLnUEIc85Om6zn5b4vFw9siNjZ6HJ4QLub_kxbM-_VG-wKc2GDRqDiFTAPG9JWr6T8-CLGD7OfRg4mk3Ay_FjVSAWHoNiJkLSSYwGWzUWe7didh-Adt0Mg=s0-d-e1-ft#https://api.freelogodesign.org/files/fcb1cfbf75b141e4a3578411863a0a02/thumb/logo_200x200.png?v=0')
@genre3 = Genre.create!(name: 'Folk Rock', title: 'https://ci3.googleusercontent.com/proxy/RVBMquT_DWyy9Segu_Y123H03pV08HmFmB8jFesFpvHATaN_4kjiZSJSIWoiDIfTKm2QDJdGF4Tsid7qTcl_mKo8DhSnnh4zHRfsSStK-c0PFPhQwgbN2zzoeEOBO24Bn4AiBEeYrZTL39ZUOHupQ5Yzbw=s0-d-e1-ft#https://api.freelogodesign.org/files/6d8e5210ba6c4b64b69c6c8c8f7e8376/thumb/logo_200x200.png?v=0')
@genre4 = Genre.create!(name: 'Pop', title: 'https://ci6.googleusercontent.com/proxy/0kGagg3IqB8Zxb_ueC1mapn3BbYgHyQwhC9q7SJI9yY3qNtkNYMh26qABFWOLTXYRV47_pSuEBwebRL6Xeu2z0D_M-Fu4aEQ4Vu5DHVg2oqFAKj2v9kAlWSixpP8BdveCJr7IUufMYKHuEwQcJxso5bq3w=s0-d-e1-ft#https://api.freelogodesign.org/files/8900f22520e04520a1ec783045546a9e/thumb/logo_200x200.png?v=0')
@genre5 = Genre.create!(name: 'Soul', title: 'https://ci4.googleusercontent.com/proxy/W-R6kBeWr4YYVxfM9yufviyaOwyTqFoUhix9cH_xH1I3-A8rKJFdix6o_8NZvgDmHx-k1UivvmnsFoiZk9ZqtJCpEjLe9gTUw5lGOb_j1wU0SOHjl7KfSbkSJy1ilxAEOOl6lG0Ijs9V2kMtxmRDcs7bPw=s0-d-e1-ft#https://api.freelogodesign.org/files/5b400ad16b394902be162403bea4ff3b/thumb/logo_200x200.png?v=0')
@genre6 = Genre.create!(name: 'Jazz', title: 'https://ci6.googleusercontent.com/proxy/I8KVhVo0RWlJXAltK7buUYqqUGllkyIgCSAim8p6mTtFN0Vycl79FAuIHWhqPwtK9PscpnVOkLmpxCUy2NiEJWti9PbWdMhCk53d2BYAZPj43_WA47D9MAkjp-QsGdYEfGjqqnJ3oObCXILIdAlMRcSaVQ=s0-d-e1-ft#https://api.freelogodesign.org/files/b3a50845842b4e91803b77581c771abb/thumb/logo_200x200.png?v=0')
@genre7 = Genre.create!(name: 'Funk', title: 'https://ci3.googleusercontent.com/proxy/zbeXL3zI9VuJP05qKTwX5HYZ80Zw9-VdEh0L51ApEMT3-EjDqgnS1wT2B3lp_zAf4GWCJGXM0CZCqD5b79ERQptAYcR3cxokx6IQc3MuKMoupl2353KJrFnRexAYb8rZqOr_kPYfuoMtc__cgeiVOQwYYQ=s0-d-e1-ft#https://api.freelogodesign.org/files/48ab455e1c9f404fb98c49c5ae6ba594/thumb/logo_200x200.png?v=0')

puts "#{Genre.count} Genres created"

@song1 = Song.create!(name: 'Yankee Hotel Foxtrot', user: @admin, description: 'To me, it sounds like the spiritual successor to the Beatles "The White Album", but with a lonelier, deeper message. Overall, it takes a few listens to understand exactly why you want to hear more, but you will.',
                      img_url: 'https://images-na.ssl-images-amazon.com/images/I/7143h5wgihL._SL1500_.jpg', buy: 'https://towerrecords.com/products/wilco-yankee-hotel-foxtrot-1?variant=32474415595591&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2020-11-06&utm_source=google&utm_medium=smart_campaign&gclid=Cj0KCQjw3f6HBhDHARIsAD_i3D_OujPQE0ueFZSCxLrkUOmMzrQrIj4pU6rjP3QVKIAeSVQ7NQbtx1gaAt0UEALw_wcB',
                      year: '2001', price: '100', artist: 'Wilco', genre: @genre1)

@song2 = Song.create!(name: 'Blonde on Blond', user: @admin, description: 'The world-renowned Bob Dylan may be the greatest lyricist of all time and so owning one of his albums is a must. Blonde on Blonde was released in 1966 and is adorned with the famous portrait of a pensive Bob Dylan in a scarf and coat.',
                      img_url: 'https://i0.wp.com/img.cdandlp.com/2018/04/imgL/119136177.jpg',
                      buy: 'https://www.amazon.com/dp/B00007FP9E?tag=aurma-20',
                      year: '2014', price: '80', artist: 'Bob Dylan', genre: @genre2)

@song3 = Song.create!(name: 'The White Album', user: @admin, description: 'Each song on the sprawling double album The Beatles is an entity to itself, as the band touches on anything and everything it can. This makes for a frustratingly scattershot record or a singularly gripping musical experience, depending on your view, but what makes the so-called White Album interesting is its mess. Never before had a rock record been so self-reflective, or so ironic; the Beach Boys send-up Back in the U.S.S.R. and the British blooze parody Yer Blues are delivered straight-faced, so it is never clear if these are affectionate tributes or wicked satires.',
                      img_url: 'https://cdn.shopify.com/s/files/1/0105/4542/products/beatles-whitemono2_1200x.jpg?v=1571263785', year: '1968', price: '80', buy: 'https://www.amazon.com/Beatles-White-Album-CD/dp/B07HFZ95Z9', artist: 'The Beatles', genre: @genre2)

@song4 = Song.create!(name: 'Random Access Memories', user: @admin, description: 'Daft Punks new album Random Access Memories finds them leaving behind the highly influential, riff-heavy EDM they originated to luxuriate in the sounds, styles, and production techniques of the 1970s and early 80s.',
                      img_url: 'https://www.randomaccessmemories.com/images/thomas.jpg', buy: 'https://www.amazon.com/dp/B00C061HZY?tag=aurma-20',
                      year: '2013', price: '73', artist: 'Daft Punk', genre: @genre7)

@song5 = Song.create!(name: 'Rumors', user: @admin, description: 'Fleetwood Mac’s magnum opus and Grammy-winning Album of the year (1978) is a must-own for the music and the story behind it. Up to the recording of the album, the band went through a lot emotionally with inter-band relationships, the divorce of Christie and John McVie, etc.',
                      img_url: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG', buy: 'https://www.amazon.com/dp/B004OKFISQ?tag=aurma-20',
                      year: '1977 ', price: '25', artist: 'Fleetwood Mac', genre: @genre3)

@song6 = Song.create!(name: 'Thriller', user: @admin, description: 'Its Thriller.....like THE THRILLER what else is there to really say?',
                      img_url: 'https://images-na.ssl-images-amazon.com/images/I/81m2C4XYjML._SL1500_.jpg', buy: 'https://www.amazon.com/dp/B0011ETNXE?tag=aurma-20',
                      year: '1982', price: '100000', artist: 'Michael Jackson', genre: @genre4)

@song7 = Song.create!(name: 'Kind Of Blue', buy: 'https://www.amazon.com/dp/B0041TM5OU?tag=aurma-20',
                      year: '1959,', price: '43', artist: 'Miles Davis', user: @admin, description: 'Kind of Blue is as smooth as it comes when you are looking for jazz and falls into the genre “modal jazz,” which blends jazz, rock, and classical for a fun, happening pace that jumps. This album is iconic as it includes collaborations with legends like John Coltrane and Cannonball Adderley. In terms of the music, you know it’s important when the Library of Congress preserves it in the National Recording Registry, but, moreover, you know it’s cool when Rolling Stone puts it at number 12 on the list of all-time greatest albums.',
                      img_url: 'https://www.jazzmessengers.com/46160/kind-of-blue.jpg', genre: @genre6)

@song8 = Song.create!(name: 'Dark Side Of The Moon', buy: 'https://www.amazon.com/dp/B00EVSACLE?tag=aurma-20',
                      year: '1959,', price: '60', artist: 'Pink Floyd', user: @admin, description: 'Pink Floyd is as deep and curious of a band as there ever was, employing so many different modes and styles of music; it is only by the timeframe that they are considered “classic rock” because they are truly one of a kind. Perhaps the most iconic and well-known cover art of a prism refracting light is a perfect symbol of this band’s unique style that took rock to an unearthly new realm.',
                      img_url: 'https://images-na.ssl-images-amazon.com/images/I/519GtlMPY2L._SL1500_.jpg', genre: @genre2)
@song9 = Song.create!(name: 'The times Are A Changin', buy: 'https://www.amazon.com/dp/B00EVSACLE?tag=aurma-20',
                      year: '1964,', price: '30', artist: 'Bob Dylan', user: @admin, description: 'Any “best folk album” list wouldn’t be complete without Bob Dylan. His album The Times They Are A Changin’ is no less the same. One of the beauties of folk is its ability to illustrate stories through song. Bob Dylan’s These Times They Are A Changin’ lives up to that beauty and more.',
                      img_url: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Bob_Dylan_-_The_Times_They_Are_a-Changin%27.jpg', genre: @genre7)
@song10 = Song.create!(name: 'WHATS GOING ON', buy: 'https://www.dutchvinyl.com.au/collections/best-soul-albums-of-all-time-the-essential-records-you-need-to-hear/products/marvin-gaye-whats-going-on-32099',
                       year: '1971,', price: '49', artist: 'Marvin Gaye', user: @admin, description: 'Marvin Gaye was a controversial and at the same time enormously successful personality. In his early years, the son of a priest tried his hand at a variety of chart typical songs, in the tradition of the Motown label. But with time he found his way less and less in the triangle of tax investigations, demanding wives and music that meant nothing to him. The self-produced album What is Going On from 1971 changed everything.',
                       img_url: 'https://cdn.shopify.com/s/files/1/1474/5258/products/1453_f921d760-6d73-4915-8572-2e4ea87c14fb_930x948.jpg?v=1627022912', genre: @genre5)
puts "#{Song.count} Songs created"
