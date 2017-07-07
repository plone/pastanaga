import React, { Component } from 'react';
import InputText from './forms/input';
import next from './icons/ahead.svg';
import cancel from './icons/clear.svg';

class Login extends Component {
  render() {
    return (
      <dialog className="dialog login" aria-labelledby="dialog-title-id01">
        <div className="dialog" role="document" tabIndex="0">
          <h2 className="dialog-title" id="dialog-title-id01">Log in</h2>
          <form>
            <fieldset className="form-fieldset">
              <legend className="form-legend">Sign in to start session</legend>
              <div className="form-group">
                <InputText id="username" required />
              </div>
              <div className="form-group">
                <InputText id="password" formHelp={["Forgot password? Ask for a ", <a href="/forgot_password">new password.</a>]} required />
              </div>
              <div className="button-group" role="group" aria-label="Dialog actions">
                <button type="button" className="button button-destructive">
                  <img className="button-image" src={cancel} alt="" aria-hidden="true" />
                  <span className="button-label">Cancel</span>
                  <span className="button-tooltip" id="button-tooltip-id01" role="tooltip">Cancel <kbd title="escape">esc</kbd></span>
                </button>
                <button type="button" className="button button-highlighted">
                  <img className="button-image" src={next} alt="" aria-hidden="true" />
                  <span className="button-label">Log in</span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </dialog>
    );
  }
}

export default Login;
