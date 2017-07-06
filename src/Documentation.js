import React from 'react';
// import PropTypes from 'prop-types';
import Alert from './common/alert';

const Documentation = () => {
  return (
    <div>
      <Alert type="info" title="This the title info" description="And this is the optional description" dismissable />
      <Alert type="warning" />
      <Alert type="error" />
      <Alert type="success" />
    </div>
    );
  }

export default Documentation;
