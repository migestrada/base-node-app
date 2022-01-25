import React from 'react';
// Material
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskListItem = props => {
  return <Grid item xs={12} sm={6} md={4}>
    <Paper
      style={{
        padding: 20,
        minHeight: '200px',
      }}
    >
      <Grid item container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5'>TITLE</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption'>DESCRIPTION</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
};

export default TaskListItem;
