module.exports = array => {
  const result = {}
  Object.values(array).forEach(elem => {
    result[elem.id] = elem
  })
  return result;
}