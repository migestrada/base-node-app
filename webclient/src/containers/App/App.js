import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../redux/untils/modules'
import * as appActions from '../../redux/modules/app';
import Tasks from '../Tasks';

const App = props => {
  return <Tasks />;
};

export default connect(mapStateToProps('App'), mapDispatchToProps({
  ...appActions
}))(App);
