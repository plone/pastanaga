import React, {Component} from 'react';
import clear from '../icons/clear.svg';
import info from '../icons/info.svg';
import warning from '../icons/warning.svg';
import error from '../icons/error.svg';
import success from '../icons/ready.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Alert extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    active: PropTypes.bool.isRequired,
    dismissable: PropTypes.bool,
    onDismiss: PropTypes.func.isRequired
  }

  render() {
    const { type,
            title,
            description,
            active,
            dismissable,
            onDismiss } = this.props

    let status_svg;
    switch (type) {
      case 'info':
        status_svg = info;
        break;
      case 'success':
        status_svg = success;
        break;
      case 'warning':
        status_svg = warning;
        break;
      case 'error':
        status_svg = error;
        break;
      default:
        status_svg = info;
    }

    const type_class = classNames({
      alert: true,
      [`alert-${type}`]: true,
      'alert-dismissable': dismissable});

    const dismissIcon = dismissable && (
      <button type="button" className="alert-dismiss" aria-label="Dismiss">
        <img src={clear} alt="Dismiss" role="presentation" />
      </button>
    )

    return (
      <div className={type_class} role="alert" aria-live="assertive">
        {dismissIcon}
        <img className="alert-image" src={status_svg} alt="" aria-hidden="true" />
        <h2 className="alert-title">{title}</h2>
        <p className="alert-description">{description}</p>
      </div>
    );
  }
};

export default Alert;
