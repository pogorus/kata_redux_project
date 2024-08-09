import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './side-filter-bar.scss';
import * as actions from '../../actions';

function SideFilterBar({ status, setFilter }) {
  return (
    <fieldset className="side-filter-bar">
      <legend className="side-filter-bar__title">КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <label>
        <input
          type="checkbox"
          name="all"
          onChange={(e) => {
            setFilter(e, status);
          }}
          checked={status['all']}
        />
        <span></span>Все
      </label>
      <label>
        <input
          type="checkbox"
          name="0"
          onChange={(e) => {
            setFilter(e, status);
          }}
          checked={status['0']}
        />
        <span></span>Без пересадок
      </label>
      <label>
        <input
          type="checkbox"
          name="1"
          onChange={(e) => {
            setFilter(e, status);
          }}
          checked={status['1']}
        />
        <span></span>1 пересадка
      </label>
      <label>
        <input
          type="checkbox"
          name="2"
          onChange={(e) => {
            setFilter(e, status);
          }}
          checked={status['2']}
        />
        <span></span>2 пересадки
      </label>
      <label>
        <input
          type="checkbox"
          name="3"
          onChange={(e) => {
            setFilter(e, status);
          }}
          checked={status['3']}
        />
        <span></span>3 пересадки
      </label>
    </fieldset>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.filters,
    id: state.searchId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideFilterBar);
