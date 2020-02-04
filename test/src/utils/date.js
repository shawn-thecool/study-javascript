const getIdWithTimestamp = (name) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const time = now.getTime()
  return `${year}_${month}_${date}_${name}_${time}`
};

module.exports = {
  getIdWithTimestamp
}
