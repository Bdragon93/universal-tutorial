import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todos'

module.exports = combineReducers({
  // routing: ['alibaba', 'alibabon'],
  routing: routerReducer,
  todoReducer
});

// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// // import todoReducer from './todos'

// module.exports = combineReducers({
//     todos: routerReducer
// });