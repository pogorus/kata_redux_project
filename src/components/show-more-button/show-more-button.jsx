import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './show-more-button.scss';
import * as actions from '../../actions';

function ShowMoreButton({ id, addLoading, addingError, getMore }) {
  const hasData = !(addLoading || addingError);

  const errorMessage = addingError ? <span>SOMETHING WENT WRONG, TRY AGAIN</span> : null;

  const loader = addLoading ? <span>Loading...</span> : null;

  const mainContent = hasData ? <span>ПОКАЗАТЬ ЕЩЕ</span> : null;

  return (
    <button
      type="button"
      className="show-more-button"
      onClick={() => {
        getMore(id);
      }}
    >
      {errorMessage}
      {loader}
      {mainContent}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.searchId,
    addingError: state.addingError,
    addLoading: state.addLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
