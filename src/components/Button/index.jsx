import { Component } from 'react';
import P from 'prop-types';

import './styles.css';

export class Button extends Component {
  render() {
    const { text, actionFn, disabled } = this.props;
    return (
      <button disabled={disabled} className="button" onClick={actionFn}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  actionFn: P.func.isRequired,
  disabled: P.bool,
};
