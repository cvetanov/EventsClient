import React from 'react';
import { connect } from 'react-redux';

import Event from '../../../../../components/Event';
import {
  getEventAsync,
  getEventUri
} from '../modules/event';

class EventContainer extends React.Component {
  componentDidMount() {
    const uri = this.props.getEventUri(this.props.params.id);
    this.props.getEvent(uri);
  }

  render() {
    let toDisplay = null;
    if (this.props.event) {
      toDisplay = (
        <Event event={this.props.event} index={this.props.params.id} />
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
    event: state.detailedEvent,
    getEventUri: (id) => getEventUri(id, state.events)
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
