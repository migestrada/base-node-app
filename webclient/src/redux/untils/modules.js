import { bindActionCreators } from 'redux/lib/redux';

export const mapStateToProps = (...stateNames) => state => 
  stateNames.reduce((acum, name) => {
    let nameState = state[`${name.charAt(0).toLowerCase()}${name.slice(1)}Reducer`]
    if (nameState) {
      nameState = nameState.toJS()
    } else {
      nameState = {}
      console.warn(`Undefined ${name} state`)
    }

    return {
      ...acum,
      ...nameState
    }
  }, { });

export const mapDispatchToProps = actionsObj => 
  dispatch => ({
    actions: bindActionCreators(actionsObj, dispatch),
  });
