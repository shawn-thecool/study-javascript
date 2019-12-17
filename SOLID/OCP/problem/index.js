const prettyjson = require('prettyjson')
const Guitar = require('./Guitar')
const GuitarSpec = require('./GutarSpec')
const Violin = require('./Violin')
const ViolinSpec = require('./ViolinSpec')

const guitarSpec = new GuitarSpec({
  price: 300,
  maker: 'shawn',
  stringCount: 6,
  woodType: 'oak'
})

const guitar = new Guitar({
  serialNumber: 'ABC1234DEF5678',
  spec: guitarSpec
})

console.log(prettyjson.render(guitar))

const violinSpec = new ViolinSpec({
  price: 400,
  maker: 'shawn',
  stringCount: 4,
  woodType: 'oak'
})

const violin = new Violin({
  serialNumber: 'ABC1234CDSE112',
  spec: violinSpec
})

console.log(prettyjson.render(violin))
