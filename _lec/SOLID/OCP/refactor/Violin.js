const StringInstrument = require('./StringInstrument')

class Violin extends StringInstrument {
  constructor(serialNumber, spec) {
    super(serialNumber, spec)
  }
}

module.exports = Violin
