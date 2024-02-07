export const loadNotifications = () => {
    return async (dispatch) => {
      try {
        // Здесь может быть запрос к API для загрузки уведомлений
        const notifications = await fetchNotifications(); // Пример
  
        dispatch({ type: 'LOAD_NOTIFICATIONS_SUCCESS', payload: notifications });
      } catch (error) {
        dispatch({ type: 'LOAD_NOTIFICATIONS_FAILURE', payload: error.message });
      }
    };
  };
  
  export const login = (email, password) => {
  };
  
  export const register = (email, password) => {
  };
  
  export const fetchNotifications = () => {
  };