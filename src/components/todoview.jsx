import React from 'react';

// export default class TodosView extends React.Component {
  // handleDelete = (e) => {
  //   const id = Number(e.target.dataset.id);

  //   // Equivalent to `dispatch(deleteTodo())`
  //   this.props.deleteTodo(id);
  // }
  // handleEdit = (e) => {
  //   const id  = Number(e.target.dataset.id);
  //   const val = this.props.todos.get(id).text

  //   // For cutting edge UX
  //   let newVal = window.prompt('', val);
  //   this.props.editTodo(id, newVal);
  // }

  // componentDidMount() {
  //   // console.log('todo view', this.props.getTodos);
  //   this.props.getTodos();
  // }

export default class TodosView extends React.Component {
  render() {
    return (
        <div className="alibaba">{this.props.data} test nạ</div>
    );
  }
}