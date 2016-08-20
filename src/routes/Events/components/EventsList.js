import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';

function EventsList(props) {
  const {
    events
  } = props;

  return (
    <div className="events-list">
      {
        events.map(event =>
          <Event event={event} />
        )
      }
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return ({
    events: state.events
  })
}

EventsList.propTypes = {
  events: React.PropTypes.array.isRequired
}

export default connect(
  mapStateToProps
)(EventsList);
