const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser')
// Project
const db = require('.');
const decamelize = require('../until/decamelize')

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000';
  }

  init() {
    this.middlewares();
    this.dbConnection()
    this.routes();
    this.listen();
  }

  middlewares(){
    if (process.env.ENVIOREMENT !== 'production') {
      this.app.use(morgan('dev'))
    }

    this.app.use(bodyParser.json())
    this.app.use(cors() )
  }
  
  async routes() {
      const filesNames = await fs.readdirSync('src/routes')

      filesNames.forEach(async (fileName) => {
        const splitedFileName = fileName.split('.')
        if (splitedFileName.length === 2) {
          const pathName = decamelize(splitedFileName[0])
          const router = await require(`../routes/${fileName}`);
          this.app.use(`/api/${pathName}`, router)
        } else {
          console.log(`Error on router file name: ${fileName}`)
        }
      })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }

  async dbConnection() {
    try {   
      await db.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      throw error
    }
  }
}

module.exports = Server;