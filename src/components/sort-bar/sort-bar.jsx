import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import './sort-bar.scss';

function SortBar({ sorting, setSorting }) {
  return (
    <fieldset className="sort-bar">
      <label>
        <input
          type="radio"
          name="price"
          onChange={(e) => {
            setSorting(e);
          }}
          checked={sorting === 'price' ? true : false}
        />
        САМЫЙ ДЕШЕВЫЙ
      </label>
      <label>
        <input
          type="radio"
          name="duration"
          onChange={(e) => {
            setSorting(e);
          }}
          checked={sorting === 'duration' ? true : false}
        />
        САМЫЙ БЫСТРЫЙ
      </label>
      <label>
        <input type="radio" name="filter" checked={false} />
        ОПТИМАЛЬНЫЙ
      </label>
    </fieldset>
  );
}

const mapStateToProps = (state) => {
  return {
    sorting: state.sorting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
