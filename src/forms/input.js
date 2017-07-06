import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class InputText extends Component{

  render() {
    return (
      <div className="form-field">
      <h1>{this.props.id}</h1>
        <label
          htmlFor={this.props.id}
          aria-describedby={this.props.id + "-help"}
          className="form-label">
            Text label <span className="form-required">(required)</span>
        </label>
        <input
          id={this.props.id}
          type="text"
          name={this.props.id}
          required="required"
          placeholder="Placeholder"
          className="form-text" />
        <p
          id={this.props.id + "-help"}
          className="form-help">
          Complementary and clarification to the label
        </p>
      </div>
    );
  }
}

export default InputText;
