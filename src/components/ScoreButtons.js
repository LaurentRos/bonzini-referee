import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

const scoreGoal = (team) => {
  goalStore.store[team].goals ++
  goalStore.store[team].goals += goalStore.store.half
  goalStore.store.half = 0
}

const ScoreButtons = () => (
  <div className="score-btn-container">
    <button
      onClick={ () => scoreGoal('blue') }
    >
      { goalStore.objectScore.blue }
    </button>
    <button
      onClick={ () => scoreGoal('red') }
    >
      { goalStore.objectScore.red }
    </button>
  </div>
)

export default observer(ScoreButtons);
