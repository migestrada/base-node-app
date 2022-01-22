const { response } = require('express')

const init = (req, res = response) => {
  res.json({
    msg: 'APP INIT'
  })
}

module.exports = {
  init
}