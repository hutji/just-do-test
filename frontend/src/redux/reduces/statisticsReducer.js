const initialState = {
    info: 0,
    warning: 0,
    error: 0,
  };
  
  const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_STATISTICS':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default statisticsReducer;