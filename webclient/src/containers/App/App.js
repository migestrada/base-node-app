import React from 'react';
import { connect } from 'react-redux';
// Material
import Box from '@mui/material/Box';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../redux/untils/modules'
import * as appActions from '../../redux/modules/app';
import Tasks from '../Tasks';

const App = props => {
  return (
    <Box>
      <Tasks />
    </Box>
  );
};

export default connect(mapStateToProps('App'), mapDispatchToProps({
  ...appActions
}))(App);
