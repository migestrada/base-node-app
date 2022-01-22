const { response } = require('express')
const Task = require('../models/Task');

const taskParams = (body = {}) => ({
  title: body.title,
  description: body.description
});

const init = (req, res = response) => {
  res.json({
    msg: 'TASK INIT'
  })
}

const search = (req, res = response) => {
  res.json({
    msg: 'SEARCH'
  })
}

const create = async (req, res = response) => {
  let response, error;
  const task = new Task(taskParams(req.body));

  if (!task.title) {
    error = 'Empty title';
  }

  if (!task.description) {
    error = 'Empty description';
  }
  
  if (error) {
    response = {
      error
    }
  } else {
    await task.save()
    response = {
      objects: {
        tasks: task
      }
    }
  }

  res.json(response)
}

const update = (req, res = response) => {
  res.json({
    msg: 'UPDATE'
  })
}

const eliminate = (req, res = response) => {
  res.json({
    msg: 'ELIMINATE'
  })
}

module.exports = {
  init,
  search,
  create,
  update,
  eliminate
}