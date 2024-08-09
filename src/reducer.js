const reducer = (
  state = {
    loadingError: false,
    addingError: false,
    mainLoading: true,
    addLoading: false,
    searchId: '',
    filters: {
      all: true,
      0: true,
      1: true,
      2: true,
      3: true,
    },
    sorting: 'price',
    tickets: [],
    showMore: true,
  },
  action
) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, filters: { ...action.filter } };
    case 'TOGGLE_MAIN_LOADING':
      return { ...state, mainLoading: action.mainLoading };
    case 'TOGGLE_ADD_LOADING':
      return { ...state, addLoading: action.addLoading };
    case 'SET_SEARCH_ID':
      return { ...state, searchId: action.searchId };
    case 'SET_TICKETS':
      return { ...state, tickets: [...action.tickets] };
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    case 'SWITCH_SMOW_MORE':
      return { ...state, showMore: action.showMore };
    case 'SET_SORTING':
      return { ...state, sorting: action.sorting };
    case 'SWITCH_LOADING_ERROR':
      return { ...state, loadingError: action.loadingError };
    case 'SWITCH_ADDING_ERROR':
      return { ...state, addingError: action.addingError };
    default:
      return state;
  }
};

export default reducer;
