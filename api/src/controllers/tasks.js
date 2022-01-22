const { response } = require('express')
const apiNormalization = require('../until/apiNormalization')
const { Task } = require('../models');

const taskModelParams = (body = {}) => ({
  title: body.title,
  description: body.description
});

const init = async (req, res = response) => {
  const tasks = await Task.findAll();

  res.json({
    objects: {
      tasks: apiNormalization(tasks)
    }
  })
}

const search = async (req, res = response) => {
  const { params } = req;
  let tasks = [];

  if (params.id) {
    const task = await Task.findByPk(params.id)
    if (task) tasks.push(task)
  } else {

  }


  res.json({
    taskIds: tasks.map(task => task.id),
    objects: {
      tasks: apiNormalization(tasks)
    }
  })
}

const create = async (req, res = response) => {
  let response, error;

  const task = new Task(taskModelParams(req.body));

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
        tasks: apiNormalization(task)
      }
    }
  }

  res.json(response);
}

const update = async (req, res = response) => {
  const { params } = req;
  let response = {};
  let tasks = [],
      error = null,
      task = null;

  if (params.id) {
    task = await Task.findByPk(params.id)
    if (task) {
      const taskParams = taskModelParams(req.body);

      if (!taskParams.title) {
        error = 'Empty title';
      }
    
      if (!taskParams.description) {
        error = 'Empty description';
      }
      
      if (!error) {
        task.update(taskParams)

        response = {
          objects: {
            tasks: apiNormalization([task])
          }
        }
      }
    } else {
      response = { error: 'Not found', status: 404 };
    }
  } else {
    response = { error: 'Undefined id', status: 400 };
  }

  res.status(response.status || 200).json(response)
}

const eliminate = async (req, res = response) => {
  const { params } = req;
  let response,
      task;

  if (params.id) {
    task = await Task.findByPk(params.id)
    if (task) {
      task.destroy()

      response = {
        taskId: task.id
      }
    } else {
      response = { error: 'Not found', status: 404 };
    }
  } else {
    response = { error: 'Undefined id', status: 400 };
  }

  res.json(response)
}

module.exports = {
  init,
  search,
  create,
  update,
  eliminate
}