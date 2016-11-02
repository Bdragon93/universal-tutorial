import Immutable from 'immutable';
const defaultState = new Immutable.Map({});
export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_TODO':
      // return state.concat(action.text);
      return state.concat(action.res.data.text);
    case 'GET_TODOS':
      console.log(action.res.data);
      return state.set('todos', action.res.data);
      // return state.concat(action.res.data);
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    default:
      return state;
  }
}


export function get(state, params) {
  console.log(state.todoReducer);
  return state.todoReducer;
}