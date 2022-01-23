import { fromJS } from 'immutable';
// Project
import createAction from '../untils/createAction';

export const SHOW_SNACK_BAR = 'app/SHOW_SNACK_BAR';
export const HIDE_SNACK_BAR = 'app/HIDE_SNACK_BAR';

const initialState = fromJS({
  snackBar: {
    isOpen: false,
    severity: 'success'
  }
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACK_BAR:
      return state
        .setIn(['snackBar', 'isOpen'], true)
        .setIn(['snackBar', 'severity'], action.severity || initialState.getIn(['snackBar', 'severity']));
    case SHOW_SNACK_BAR:
      return state
        .set('snackBar', initialState.get(snackBar));
    default:
      return state;
  }
};

export const showSnackBar = createAction(SHOW_SNACK_BAR, 'message', 'severity');
export const hideSnackBar = createAction(HIDE_SNACK_BAR);
