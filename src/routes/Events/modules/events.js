// ------------------------------------
// Constants
// ------------------------------------
export const EVENTS_GET_ALL = 'EVENTS.GET_ALL';

// ------------------------------------
// Actions
// ------------------------------------

export function getEvents() {
  return {
    type: EVENTS_GET_ALL
  };
}

export const actions = {
  getEvents
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EVENTS_GET_ALL]: eventsGetAll
}

const eventsGetAll = (state, action) => {
  //send request for all events
  return state;
}

// ------------------------------------
// Reducer
// ------------------------------------
import initialState from '../assets/initialState';
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
