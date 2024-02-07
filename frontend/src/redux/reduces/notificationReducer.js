const initialState = {
    notifications: [],
    loading: false,
    error: null,
  };
  
  // Редуктор для управления состоянием уведомлений
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_NOTIFICATIONS_REQUEST':
        return { ...state, loading: true };
      case 'LOAD_NOTIFICATIONS_SUCCESS':
        return { ...state, notifications: action.payload, loading: false };
      case 'LOAD_NOTIFICATIONS_FAILURE':
        return { ...state, error: action.payload, loading: false };
      // Другие кейсы при необходимости
      default:
        return state;
    }
  };
  
  export default notificationReducer;