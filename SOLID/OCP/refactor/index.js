const prettyjson = require('prettyjson')

const Guitar = require('./Guitar')
const GuitarSpec = require('./GutarSpec')

const Violin = require('./Violin')
const ViolinSpec = require('./ViolinSpec')

const g = new Guitar(
  'ASDF-2345-RFSD-1234',
  new GuitarSpec({
    price: 3000,
    maker: 'shawn',
    stringCount: 6,
    woodType: 'oak'
  })
)

const v = new Violin(
  'ASDF-1235-RFSD-1634',
  new ViolinSpec({
    price: 4000,
    maker: 'shawn',
    stringCount: 4,
    woodType: 'oak'
  })
)

console.log(prettyjson.render(g))
console.log(prettyjson.render(v))
