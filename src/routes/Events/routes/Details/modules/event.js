import 'whatwg-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const EVENT_GET_SUCCESS = 'EVENT.GET_SUCCESS';

export const getEventUri = (index, events) => events[index].uri;

// ------------------------------------
// Actions
// ------------------------------------


export const getEventAsync = (url, dispatch) => {
  fetch(url)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
    dispatch(getEventSuccess(json));
  })
};

export function getEventSuccess(data) {
  return {
    type: EVENT_GET_SUCCESS,
    data
  };
}

export const actions = {
  getEventSuccess
};

const getEventSuccessReducer = (state, action) => {
  return Object.assign({}, state, action.data);
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EVENT_GET_SUCCESS]: getEventSuccessReducer
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function eventsReducer (state = {}, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
