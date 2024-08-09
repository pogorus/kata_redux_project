import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppHeader from '../app-header';
import FlightCardList from '../flight-card-list';
import SortBar from '../sort-bar';
import SideFilterBar from '../side-filter-bar';
import ShowMoreButton from '../show-more-button';
import * as actions from '../../actions';
import './app.scss';

function App({ mainLoading, loadingError, showMore, sorting, getTickets }) {
  useEffect(() => {
    getTickets();
  }, []);
  useEffect(() => {}, [sorting]);

  const showMoreButton = showMore ? <ShowMoreButton /> : null;

  const hasData = !(mainLoading || loadingError);

  const errorMessage = loadingError ? <span>Something went wrong, please try again!</span> : null;

  const loader = mainLoading ? <span>Loading...</span> : null;

  const mainContent = hasData ? (
    <div className="flights">
      <SortBar />
      <FlightCardList />

      {showMoreButton}
    </div>
  ) : null;

  return (
    <div>
      <AppHeader />
      <div className="main-content">
        <SideFilterBar />
        {mainContent}
        {errorMessage}
        {loader}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingError: state.loadingError,
    addingError: state.addingError,
    mainLoading: state.mainLoading,
    sorting: state.sorting,
    showMore: state.showMore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
