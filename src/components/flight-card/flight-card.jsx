import React from 'react';
import format from 'date-fns/format';
import { getTime } from 'date-fns';

import './flight-card.scss';

function FlightCard(props) {
  const { price, carrier, segments } = props;

  const getDurationTime = (duration) => {
    let hours = Math.floor(duration / 60);
    let mins = duration % 60;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    mins = mins < 10 ? `0${mins}` : `${mins}`;
    return `${hours}ч ${mins}м`;
  };

  const logo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className="flight-card">
      <div className="flight-card__header">
        <div className="flight-card__price">{`${price} ₽`}</div>
        <div>
          <img src={logo} alt={carrier} />
        </div>
      </div>
      <div className="flight-card__content">
        <div className="flight-card__details">
          <div>
            <div className="flight-card__dep-arr-airport">{`${segments[0].origin} - ${segments[0].destination}`}</div>
            <div className="flight-card__dep-arr-time">{`${format(segments[0].date, 'HH:mm')} - ${format(getTime(segments[0].date) + segments[0].duration * 60 * 1000, 'HH:mm')}`}</div>
          </div>
          <div>
            <div className="flight-card__dep-arr-airport">{`${segments[1].origin} - ${segments[1].destination}`}</div>
            <div className="flight-card__dep-arr-time">{`${format(segments[1].date, 'HH:mm')} - ${format(getTime(segments[1].date) + segments[1].duration * 60 * 1000, 'HH:mm')}`}</div>
          </div>
        </div>
        <div className="flight-card__details">
          <div>
            <div className="flight-card__dur-header">В ПУТИ</div>
            <div className="flight-card__duration">{getDurationTime(segments[0].duration)}</div>
          </div>
          <div>
            <div className="flight-card__dur-header">В ПУТИ</div>
            <div className="flight-card__duration">{getDurationTime(segments[1].duration)}</div>
          </div>
        </div>
        <div className="flight-card__details">
          <div>
            <div className="flight-card__transfer-number">{`${segments[0].stops.length} ПЕРЕСАДКИ`}</div>
            <div className="flight-card__transfers">{segments[0].stops.join(', ')}</div>
          </div>
          <div>
            <div className="flight-card__transfer-number">{`${segments[1].stops.length} ПЕРЕСАДКИ`}</div>
            <div className="flight-card__transfers">{segments[1].stops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
