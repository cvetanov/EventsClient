import 'whatwg-fetch';
import {
  EVENTS_API_URL
} from '../index';

// ------------------------------------
// Constants
// ------------------------------------
export const EVENTS_GET_SUCCESS = 'EVENTS.GET_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------


export const getEventsAsync = (dispatch) => {
  fetch(EVENTS_API_URL)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
    dispatch(getEventsSuccess(json));
  })
};

export function getEventsSuccess(data) {
  return {
    type: EVENTS_GET_SUCCESS,
    data
  };
}

export const actions = {
  getEventsSuccess
};

const getEventsSuccessReducer = (state, action) => {
  return Object.assign([], state, action.data);
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EVENTS_GET_SUCCESS]: getEventsSuccessReducer
};

// ------------------------------------
// Reducer
// ------------------------------------
import initialState from '../assets/initialState';
export default function eventsReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
