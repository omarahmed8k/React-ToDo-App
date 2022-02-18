import React, { Component } from "react";
import Items from "./components/TodoItems/Items";
import Add from "./components/AddItems/Add";
import "./App.css";

class App extends Component {
  state = {
    items: [],
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items,
    });
  };

  addItem = (text) => {
    const newItem = {
      id: this.state.items.length + 1,
      text,
    };
    this.setState({
      ...this.state.items.push(newItem),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="card">
          <h1>Todo List</h1>
          <Items items={this.state.items} deleteItem={this.deleteItem} />
          <Add addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
