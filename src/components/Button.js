import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

@observer
class Button extends React.Component {
  render() {

    return (<div className="button">
      <button
        onClick={ this.props.action }
      >
        { this.props.label }
      </button>
    </div>)
  }
}

export default Button;
