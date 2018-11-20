import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/AddTodo";
import { changeStatus } from "../actions/changeStatus";
import { bindActionCreators } from "redux";

class TaskList extends React.Component {

  createTodoList = () => {
    return this.props.taskList.map((task, index) => {
      if (task.status) {
        return (
          <div>
            <input type="checkbox" onClick={() => this.props.changeStatus(task)}/>
            <span >{task.name}</span>
          </div>
        );
      }

    });
  };

  toggleTodoList = () => {
    return this.props.taskList.map((task, index) => {
      if (!task.status) {
        return (
          <div>
            <input type="checkbox" onClick={() => this.props.changeStatus(task)} />
            <span>
              <del>{task.name}</del></span>
          </div>
        );
      }

    });
  };



  handleSubmit(event) {
    let input = this.refs.input;
    event.preventDefault();
    if (!input.value.trim()) {
      return
    }

    this.props.addTodo(input.value);

    input.value = ''
  }

  render() {
    return (
      <div>
        <ul>
          {this.createTodoList()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="input" />
          <button type="submit">
            Add Todo
          </button>
        </form>

        <h3>Completed Task</h3>
        <ul>
          {this.toggleTodoList()}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskList: state.tasks
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo: addTodo,
    changeStatus: changeStatus
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TaskList);