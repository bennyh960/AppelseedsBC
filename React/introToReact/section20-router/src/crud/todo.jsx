import React, { Component } from "react";
import "./todo.css";

// CRUD : Create , Read , Update , Delete

export default class AppCrud extends Component {
  state = { Alltodo: [], todo: { priority: null, date: null, text: "" }, taskID: [] };
  handleChange = (e, id) => {
    this.setState((prev, next) => {
      return { todo: { ...prev.todo, [id]: e.target.value } };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return { Alltodo: [...prev.Alltodo, prev.todo] };
    });
  };

  handleDelete = (e, task) => {
    const newTasks = this.state.Alltodo.filter((taskToRemain) => {
      return taskToRemain.text !== task;
    });

    this.setState((prev) => {
      return { Alltodo: newTasks };
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 50 }}>Todo App</h1>
        {/* <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} values={this.state.todo} /> */}
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          taskId={this.state.todo.text}
          alltodo={this.state.Alltodo}
        />
        <TitleShow />
        <Task alltodo={this.state.Alltodo} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

// ? form component

class Form extends Component {
  state = { priority: undefined, date: undefined, text: "" };

  render() {
    return (
      <form className="form">
        <input
          style={{ width: "50px" }}
          type="number"
          placeholder="priority"
          id="priority"
          onChange={(e) => {
            this.props.handleChange(e, "priority");
            this.setState((prev) => {
              return { priority: e.target.value };
            });
          }}
          value={this.state.priority}
        />
        <input
          type="date"
          onChange={(e) => {
            this.props.handleChange(e, "date");
            this.setState((prev) => {
              return { date: e.target.value };
            });
          }}
          id="date"
          value={this.state.date}
        />
        <input
          type="text"
          className="todo-input"
          placeholder="Todo"
          id="text"
          onChange={(e) => {
            this.props.handleChange(e, "text");
            this.setState((prev) => {
              return { text: e.target.value };
            });
          }}
          // value={this.props.values.text}
          value={this.state.text}
        />
        <button onClick={this.props.handleSubmit}>submit</button>
      </form>
    );
  }
}

// ! present tasks

class Task extends Component {
  state = { priority: "", date: "", text: "", isDisable: true };
  handleChange = (e) => {
    this.setState((prev) => {
      return { text: e.target.value };
    });
  };

  render() {
    const { alltodo, handleDelete, handleEdit } = this.props;
    return (
      <div>
        {alltodo.map((task, idx) => {
          return (
            <div key={task.text} id={task.text} className="task-show">
              <div>{idx + 1}.</div>
              <input type="checkbox" />
              <div>{task.priority}</div>
              <div>{task.date}</div>
              {/* <div>{task.text}</div> */}
              <input
                type="text"
                value={task.text}
                style={{ borderColor: "transparent" }}
                disabled={this.state.isDisable}
              />
              <button
                onClick={(e) => {
                  this.setState({ isDisable: false });
                }}
              >
                Edit
              </button>
              <button onClick={(e) => handleDelete(e, task.text)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function TitleShow(props) {
  return (
    <div className="task-show">
      <div>#</div>
      <div></div>
      <div>P</div>
      <div>Date</div>
      <div>Task</div>
      <div></div>
      <div></div>
    </div>
  );
}
