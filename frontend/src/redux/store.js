import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Если используете асинхронные действия
import notificationReducer from './reducers/notificationReducer';
import statisticsReducer from './reducers/statisticsReducer';

// Комбинируем все редукторы
const rootReducer = combineReducers({
  notifications: notificationReducer,
  statistics: statisticsReducer,
  // Другие редукторы при необходимости
});

// Создаем хранилище Redux
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;