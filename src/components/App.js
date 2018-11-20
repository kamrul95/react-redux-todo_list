import React from "react";
import TaskList from "../containers/TaskList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Task List</h4>
        <TaskList />
      </div>
    );
  }
}
export default App;