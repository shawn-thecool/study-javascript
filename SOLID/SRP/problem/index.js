const Guitar = require('./Guitar')

const guitar = new Guitar({
  serialNumber: 'ABC1234DEF5678',
  price: 300,
  maker: 'shawn',
  stringCount: 6,
  woodType: 'oak'
})

console.log(guitar)
