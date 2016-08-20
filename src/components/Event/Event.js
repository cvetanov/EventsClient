import React from 'react';
import { Link } from 'react-router';
import classes from './Event.scss';

export default function Event(props) {
  const {
    event
  } = props;

  const className = `${classes.event}`;
  const link = `/events/${event.title}`;
  return (
    <div className={className}>
      <div>
        <img className={classes.eventimg} src={event.imgUrl} alt={event.title} />
      </div>
      <div>
        <span className="event-info">
          {event.title} @ {event.place} on {event.formattedDate}
        </span>
      </div>
      <div>
        <Link to={link} query={{ uri: event.uri }}>
          Details
        </Link>
      </div>
      <a href={event.url} target="_blank">See more</a>
    </div>
  );
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired
};
