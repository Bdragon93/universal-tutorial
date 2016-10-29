import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todos'
module.exports = combineReducers({
  routing: todoReducer,
});

// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// // import todoReducer from './todos'

// module.exports = combineReducers({
//     todos: routerReducer
// });