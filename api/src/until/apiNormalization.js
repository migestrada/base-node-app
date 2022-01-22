const apiNormalization = obj => {
  const result = {}
  Object.keys(obj).forEach(key => {
    result[obj[key].id] = obj[key]
  })
  return result;
}