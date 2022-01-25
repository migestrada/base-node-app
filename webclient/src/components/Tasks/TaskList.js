import React from 'react';
// Material
import Grid from '@mui/material/Grid';
// Project
import TaskListItem from './TaskListItem';

const TaskList = props => {
  const tasks = [...Array(10).keys()];

  return <Grid container spacing={3}>
    {
      tasks.map((task, index) => <TaskListItem key={index} />)
    }
  </Grid>;
};

export default TaskList;
