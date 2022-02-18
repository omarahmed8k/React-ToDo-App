import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Add.css";

export default class Add extends Component {
  state = {
    name: "",
  };

  deleteItem = this.props;

  handelInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      this.props.addItem(this.state.name);
      this.setState({
        name: "",
      });
      toast.success("Done!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error! Please add text.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            placeholder="Type here...."
            onChange={this.handelInput}
            value={this.state.name}
          />
          <button className="add">Add</button>
          <ToastContainer />
        </form>
      </div>
    );
  }
}
