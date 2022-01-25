import React from 'react';
// Material
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Form = props => {
  return <Grid item xs={12}>
    <Paper
      style={{
        padding: 20
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="center">NEW TASK</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Title"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            label="Description"
            fullWidth
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid> 
    </Paper>
  </Grid>
};
export default Form;