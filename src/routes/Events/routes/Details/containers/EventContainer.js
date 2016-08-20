import React from 'react';
import { connect } from 'react-redux';

import Event from '../../../../../components/Event';
import {
  getEventAsync
} from '../modules/event';

class EventContainer extends React.Component {
  componentDidMount() {
    this.props.getEvent(this.props.location.query.uri);
  }

  render() {
    let toDisplay = null;
    if (this.props.event) {
      toDisplay = (
        <Event event={this.props.event} />
      );
    }
    return (
      <div>
        {toDisplay}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    event: state.detailedEvent
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getEvent: (url) => getEventAsync(url, dispatch)
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer);
