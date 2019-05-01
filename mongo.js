const mongoose = require('mongoose')

const url = 'mongodb://eventuser:eventuser8for2@ds115874.mlab.com:15874/events-app'

mongoose.connect(url, { useNewUrlParser: true })

const Event = mongoose.model('Event', {
  name: String,
  description: String,
  short_description: String,
  startAt: String,
  endAt: String,
  imageUrl: String,
  cordinates: Array,
  id: String
})

const event = new Event({
  name: 'Aurora Hentunen Quartet',
  description: '<p>16.00 Max Zenger Globus, 17.30 Mikko Pettinen Why Not</p><p><b>12.00 Aurora Hentunen Quartet</b></p><p><i>Aurora Hentunen – p, voc, Joona Kilponen – trp, Veli-Matti Silanterä – b, Ville Luukkonen – dr</i></p><p>Amsterdam-based young pianist-composer Aurora Hentunen’s year-old debut album Second Spring travels in space from the freezing cold Lapland mountains to the tranquillity of Italian islands, and in time from warm childhood memories to the aching sehnsucht of the present. The quartet’s upcoming album Frost will be released shortly after Jazz-Espa, so the audience will get a sneak peek into the new repertoire as well!</p><p><b>16.00 Max Zenger Globus</b></p><p><i>Max Zenger – a. sax, Kasperi Sarikoski – trb, Mikael Myrskog – keys, Heikko Remmel – b, Anssi Tirkkonen – dr</i></p><p>Saxophonist Max Zenger’s 2016-founded quintet Globus’ music is like Mother Nature herself: nuanced, mysterious and rich in layers and elements. Zenger’s source of inspiration can be easily traced. The group won the Euroradio Jazz Competition last year at the Jazz in Marciac festival in France, and their pianist Mikael Myrskog received the award for the best soloist.</p><p><b>17.30 Mikko Pettinen Why Not</b></p><p><i>Mikko Pettinen – tr, fl. horn, cornet, voc, FX, keys, Joakim Berghäll – b. sax, b. cl, cello, Vesa Ojaniemi – b, electronics, Tuomas Timonen – dr, sensory perc</i></p><p>Why Not is a study of acoustic and electronic sounds, organic and synthetic elements. Multi-instrumentalist Pettinen’s compositions celebrate the diversity of nature, and manifest the current state of the world and its possible dystopies. In addition to singing, his arsenal includes trumpet, fluegelhorn, cornet and keyboard, all of which he manipulates with effects. His fellow explorers’ kits also boast with acoustic instruments like baritone sax and cello, as well as electronic samplers and sensory percussion software.</p>',
  short_description: '16.00 Max Zenger Globus, 17.30 Mikko Pettinen Why Not',
  startAt: '2019-08-01T09:00:00Z',
  endAt: null,
  imageUrl: 'http://www.espanlava.fi/instancedata/prime_product_resurssivaraus/kulke/embeds/EventPic_633555.jpg',
  cordinates: [24.950249, 60.16771],
  id: 'kulke:47808'
})

event.save()
  .then(() => {
    console.log('event saved')
    mongoose.connection.close()
  })