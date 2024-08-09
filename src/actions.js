import AviasalesService from './services/aviasales-service';

const asapi = new AviasalesService();

export const setFilter = (e, status) => {
  let filter = { ...status };
  if (e.target.name === 'all') {
    if (filter[e.target.name] === false) {
      for (let f in filter) {
        filter[f] = true;
      }
    } else {
      for (let f in filter) {
        filter[f] = false;
      }
    }
  } else {
    if (filter['all'] === true) {
      filter[e.target.name] = !filter[e.target.name];
      filter['all'] = false;
    } else {
      filter[e.target.name] = !filter[e.target.name];
      if (filter['0'] === true && filter['1'] === true && filter['2'] === true && filter['3'] === true) {
        filter['all'] = true;
      }
    }
  }
  return {
    type: 'SET_FILTERS',
    filter,
  };
};

export const setSearchId = () => {
  return (dispatch) => {
    asapi.getId().then((response) => {
      dispatch({
        type: 'SET_SEARCH_ID',
        searchId: response.searchId,
      });
    });
  };
};

export const getTickets = () => {
  return (dispatch) => {
    asapi.getId().then((id) => {
      dispatch({
        type: 'SET_SEARCH_ID',
        searchId: id.searchId,
      });
      asapi
        .getTickets(id.searchId)
        .then((res) => {
          dispatch({
            type: 'SWITCH_LOADING_ERROR',
            loadingError: false,
          });
          dispatch({
            type: 'SET_TICKETS',
            tickets: res.tickets,
          });
          dispatch(toggleLoading());
        })
        .catch(() => {
          dispatch(toggleLoading());
          dispatch({
            type: 'SWITCH_LOADING_ERROR',
            loadingError: true,
          });
        });
    });
  };
};

export const toggleLoading = () => {
  return {
    type: 'TOGGLE_MAIN_LOADING',
    mainLoading: false,
  };
};

export const switchShowMore = (status = false) => {
  return {
    type: 'SWITCH_SMOW_MORE',
    showMore: status,
  };
};

export const getMore = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_ADD_LOADING',
      addLoading: true,
    });
    asapi
      .getTickets(id)
      .then((res) => {
        if (res.stop === false) {
          dispatch({
            type: 'SWITCH_ADDING_ERROR',
            addingError: false,
          });
          dispatch({
            type: 'ADD_TICKETS',
            tickets: res.tickets,
          });
        } else {
          dispatch(switchShowMore());
        }
      })
      .then(() => {
        dispatch({
          type: 'TOGGLE_ADD_LOADING',
          addLoading: false,
        });
      })
      .catch(() => {
        dispatch({
          type: 'SWITCH_ADDING_ERROR',
          addingError: true,
        });
      });
  };
};

export const setSorting = (e) => {
  return {
    type: 'SET_SORTING',
    sorting: e.target.name,
  };
};
