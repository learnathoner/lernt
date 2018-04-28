import { SET_ACTIVE_COURSE } from '../actions/courses';

const initialState = {};

const activeCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_COURSE:
      return Object.assign({}, state, { ...action.course });
    default:
      return state;
  }
};

export default activeCourseReducer;
