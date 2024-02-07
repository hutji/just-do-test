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
    // Логика для авторизации пользователя
  };
  
  export const register = (email, password) => {
    // Логика для регистрации пользователя
  };
  
  export const fetchNotifications = () => {
    // Логика для загрузки уведомлений из API
  };