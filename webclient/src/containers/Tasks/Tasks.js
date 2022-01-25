import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../redux/untils/modules'
import * as tasksActions from '../../redux/modules/tasks';
import TaskList from '../../components/Tasks/TaskList';
import Form from '../../components/Tasks/Form';

const Tasks = props => {
  const {
    actions: {
      getStateFromApi
    }
  } = props;

  useEffect(() => {
    getStateFromApi({});
  }, []);

  return <Grid
    sx={{
      backgroundColor: 'red',
      padding: '10px',
      width: '100%'
    }}
  >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Form />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <TaskList />
      </Grid>
    </Grid>
  </Grid>;
};

export default connect(mapStateToProps('Tasks'), mapDispatchToProps({
  ...tasksActions
}))(Tasks);
