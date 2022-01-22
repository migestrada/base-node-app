import React from 'react';
// Materials
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const DefaultContainer = props => {
  const {
    title,
    children
  } = props;

  return (
    <Grid
      container
      item
      xs={12}
      spacing={3}
      style={{
        backgroundColor: 'red',
      }}
    >
      <Grid item xs={12}>
        { title && <Typography textAlign="center">{title}</Typography> }
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}

export default DefaultContainer;
