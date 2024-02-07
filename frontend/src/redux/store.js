import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notificationReducer';
import statisticsReducer from './reducers/statisticsReducer';

// Комбинируем все редукторы
const rootReducer = combineReducers({
  notifications: notificationReducer,
  statistics: statisticsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;