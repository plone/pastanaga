import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component{

  static PropTypes = {
    id: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    formHelp: PropTypes.string
  }

  render() {
    return (
      <div className="form-field">
        <label
          htmlFor={this.props.id}
          aria-describedby={this.props.id + "-help"}
          className="form-label">
            {this.props.id}
            {this.props.required && <span className="form-required">(required)</span>}
        </label>
        <input
          id={this.props.id}
          type="text"
          name={this.props.id}
          required={this.props.required}
          placeholder={this.props.placeholder || this.props.id}
          className="form-text" />
        { this.props.formHelp &&
          <p
            id={this.props.id + "-help"}
            className="form-help">
            {this.props.formHelp}
          </p>
        }
      </div>
    );
  }
}

export default InputText;
