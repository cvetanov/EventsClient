import React from 'react';
import { Link } from 'react-router';
import classes from './Event.scss';

export default function Event(props) {
  const {
    index,
    event
  } = props;

  const className = `${classes.event}`;
  const link = `/events/${index}`;
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
        <Link to={link}>
          Details
        </Link>
      </div>
      <a href={event.url} target="_blank">See more</a>
    </div>
  );
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  index: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
