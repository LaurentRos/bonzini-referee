import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'
import Commands from './Commands'

@observer
class TeamsScore extends React.Component {
  render() {
    return (<div className="teams-score">
      { goalStore.score }
    </div>)
  }
}

export default TeamsScore;
