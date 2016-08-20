import React from 'react';

import classes from './Event.scss';

export default function Event(props) {
  const {
    event
  } = props;
  console.log(event);

  const className = `${classes.event} event-${event.url}`;
  const component = (
    <div className={className}>
      <div>
        <img className={classes.eventimg} src={event.imgUrl} alt={event.title} />
      </div>
      <div>
        <span className="event-info">
          {event.title} @ {event.place} on {event.formattedDate}
        </span>
      </div>
      <a href={event.url} target="_blank">See more</a>
    </div>
  )

  return component;
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired
}
