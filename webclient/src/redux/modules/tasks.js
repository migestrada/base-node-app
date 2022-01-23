import { fromJS } from 'immutable';
// Project
import createAction from '../untils/createAction';

export const GET_STATE_FROM_API = 'tasks/GET_STATE_FROM_API';
export const GET_STATE_FROM_API_SUCCESS = 'tasks/GET_STATE_FROM_API_SUCCESS';
export const GET_STATE_FROM_API_FAIL = 'tasks/GET_STATE_FROM_API_FAIL';

const initialState = fromJS({
  snackBar: {
    isOpen: false,
    severity: 'success'
  }
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_FROM_API:
    case GET_STATE_FROM_API_SUCCESS:
    case GET_STATE_FROM_API_FAIL:
      return state;
    default:
      return state;
  }
};

export const getStateFromApi = createAction(GET_STATE_FROM_API, 'controls');
export const getStateFromApiSuccess = createAction(GET_STATE_FROM_API_SUCCESS, 'result');
export const getStateFromApiFail = createAction(GET_STATE_FROM_API_FAIL, 'result');
