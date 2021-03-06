import React, { Component } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //validation check to prevent submitting sth empty
    if (!this.state.content.trim()) return
    this.props.addTodo(this.state);

    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div className='text-white mt-14'>
        <div className='flx mb-6'>
          <h1 className='text-3xl uppercase font-bold tracking-wider2xl md:text-4xl'>
            Todo
          </h1>
          {this.props.sunVisibility ? (
            <img
              onClick={() => this.props.toggleIcon(true)}
              src={sun}
              alt='sun'
              className='cursor-pointer'
            />
          ) : (
              <img
                onClick={() => this.props.toggleIcon(true)}
                src={moon}
                alt='moon'
                className='cursor-pointer'
              />
            )}
        </div>
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type='checkbox'
              id='todo-check'
              className='absolute mt-4 ml-4'
            />
            <input
              value={this.state.content}
              placeholder='Create a new todo'
              onChange={e => this.handleChange(e)}
              className={`${this.props.sunVisibility
                ? "bg-color10 text-color11"
                : "bg-color3 text-color10"
                } w-full mb-5 p-4 rounded-md pl-12`}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
