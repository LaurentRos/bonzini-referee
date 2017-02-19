import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

const scoreGoal = (team) => {
  if (goalStore.store.gamelle) {
    goalStore.store[team].inOuts ++
    goalStore.store.gamelle = false
    return;
  }

  goalStore.store[team].goals ++
  goalStore.store[team].goals += goalStore.store.half
  goalStore.store.half = 0
}

const ScoreButtons = () => (
  <div className="score-btn-container">
    { goalStore.store.teams.map((team, idx) => (
      <button
        className={`${team}-btn score-btn`}
        key={ idx }
        onClick={ () => scoreGoal(team) }
      >
        { goalStore.objectScore[team] }
      </button>
    )) }
  </div>
)

export default observer(ScoreButtons);
