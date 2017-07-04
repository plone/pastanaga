import React from 'react';
// import PropTypes from 'prop-types';

const InputText = () => {
  return (
    <div class="form-field">
      <label for="form-text-id01" aria-describedby="form-text-id01-help" class="form-label">Text label <span class="form-required">(required)</span></label>
      <input id="form-text-id01" type="text" name="form-text-id01" required="required" placeholder="Placeholder" class="form-text"/>
      <p id="form-text-id01-help" class="form-help">Complementary and clarification to the label</p>
    </div>
    );
  }

export default InputText;
