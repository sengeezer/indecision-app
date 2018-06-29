import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined,
  };
  handleSubmit = (ev) => {
    ev.preventDefault();

    const option = ev.target.elements.option.value.trim();

    const error = this.props.handleAddOpt(option);

    this.setState(() => ({ error }));

    // Don't reset input in case of invalid input data
    if (!error) {
      ev.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmit} className="add-option">
          <input type="text" name="option" className="add-option__input" />
          <button type="submit" className="small">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
