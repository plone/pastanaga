import React from 'react';
// import PropTypes from 'prop-types';

const InputText = () => {
  return (
    <div className="form-field">
      <label
        htmlFor="form-text-id01"
        aria-describedby="form-text-id01-help"
        className="form-label">
          Text label <span className="form-required">(required)</span>
      </label>
      <input
        id="form-text-id01"
        type="text"
        name="form-text-id01"
        required="required"
        placeholder="Placeholder"
        className="form-text" />
      <p
        id="form-text-id01-help"
        className="form-help">
        Complementary and clarification to the label
      </p>
    </div>
    );
  }

export default InputText;
