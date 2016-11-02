import React from 'react';
import TodosView from './todoview';
// import TodosForm              from 'components/todoform';
import { connect }            from 'react-redux';
import * as TodoActions       from '../actions/todos';
import initComponent from '../lib/initComponent';
import { get as dataGetter } from '../reducers/todos';

if (process.env.BROWSER) {
  require('assets/styles/home.scss');
}

// @connect(state => ({ todos: state.routing }))
class Home extends React.Component {
  // static needs = [
  //   TodoActions.getTodos
  // ];

  static defaultProps = {
    actionCreator: TodoActions.getTodos,
    dataGetter
  };

  alibaba = () => {
    console.log('aaa');
  }

  render() {
    return (
      <div>
        <div className="home-page">Home Page</div>
        {this.props.todos.map((topicSlug, key) => {
          return <TodosView data={topicSlug} key={key}/>
        })}
      </div>
    );
  }
}

export default initComponent(Home);
// export default connect(state => ({ todos: state.todoReducer }))(Home);
