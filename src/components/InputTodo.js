import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
