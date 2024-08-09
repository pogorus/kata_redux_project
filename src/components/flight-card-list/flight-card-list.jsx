import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlightCard from '../flight-card/flight-card';
import * as actions from '../../actions';
import './flight-card-list.scss';

function FlightCardList({ filters, sorting, tickets, switchShowMore }) {
  let sorted = [...tickets];

  if (sorting === 'price') {
    sorted.sort((a, b) => a.price - b.price);
  }
  if (sorting === 'duration') {
    sorted.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  }

  let flightCards = [];
  let activeFilters = [];
  for (let filter in filters) {
    if (filters[filter] === true) {
      activeFilters.push(Number(filter));
    }
  }

  for (let ticket in sorted) {
    if (
      activeFilters.includes(sorted[ticket].segments[0].stops.length) &&
      activeFilters.includes(sorted[ticket].segments[1].stops.length)
    ) {
      flightCards.push(<FlightCard key={ticket.key} {...sorted[ticket]} />);
    }
  }

  if (flightCards.length === 0) {
    switchShowMore(false);
    return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }
  switchShowMore(true);
  return <div className="flights-list">{flightCards}</div>;
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    sorting: state.sorting,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightCardList);
