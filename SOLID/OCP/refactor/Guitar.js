const StringInstrument = require('./StringInstrument')

class Guitar extends StringInstrument {
  constructor(serialNumber, spec) {
    super(serialNumber, spec)
  }
}

module.exports = Guitar
