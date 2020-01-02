const prettyjson = require('prettyjson')
const Guitar = require('./Guitar')
const GuitarSpec = require('./GutarSpec')

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
