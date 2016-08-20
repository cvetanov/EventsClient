import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getEventsAsync } from '../modules/events';
import Event from './Event';

class EventsList extends React.Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.getEvents();
  }

  render () {
    const {
      events
    } = this.props;

    return (
      <div className="events-list">
        {
          events.map((event, index) =>
            <Event event={event} key={index} />
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    events: state.events
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getEvents: () => getEventsAsync(dispatch)
  })
}

EventsList.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
