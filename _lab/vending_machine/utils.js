function _getRandomId(prefix) {
  var now = new Date(); // 2020-02-21T07:39:12.979Z
  var random = Math.random(); //0.3510810582368944

  return (prefix || "random") + "_" + now.getTime() + random;
}

module.exports = {
  _getRandomId:_getRandomId
}

