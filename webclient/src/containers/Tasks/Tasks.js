import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../redux/untils/modules'
import * as tasksActions from '../../redux/modules/tasks';
import DefaultContainer from '../../components/commons/DefaultContainer'

const Tasks = props => {
  const {
    actions: {
      getStateFromApi
    }
  } = props;
  
  useEffect(() => {
    getStateFromApi({})
  }, [])

  return (
    <DefaultContainer
      title="Lista de tareas"
    >
      <p>AAAAAAAAAAAAA</p>
    </DefaultContainer>
  );
};

export default connect(mapStateToProps('Tasks'), mapDispatchToProps({
  ...tasksActions
}))(Tasks);;
