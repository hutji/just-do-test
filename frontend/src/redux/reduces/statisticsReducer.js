const initialState = {
    info: 0,
    warning: 0,
    error: 0,
  };
  
  // Редуктор для управления состоянием статистики
  const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_STATISTICS':
        return { ...state, ...action.payload };
      // Другие кейсы при необходимости
      default:
        return state;
    }
  };
  
  export default statisticsReducer;