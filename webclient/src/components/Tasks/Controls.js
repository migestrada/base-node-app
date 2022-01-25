import React from 'react';
// Material
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Controls = props => {
  return <Paper style={{ padding: 20 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          color='primary'
          variant='contained'
          size="small"
        >BUSCAR</Button>
      </Grid>
    </Grid>
  </Paper>;
};

export default Controls;