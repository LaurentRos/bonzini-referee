import { observer } from 'mobx-react';
import React from 'react';

import Button from './Button'
import goalStore from '../GoalStore'

const scoreGoal = (team) => {
  goalStore.store[team].goals ++
  goalStore.store[team].goals += goalStore.store.half
  goalStore.store.half = 0
}

const Commands = () => (
  <div className="commands">
    <label className="toggle-half">
      <input
        type="checkbox"
        checked={ goalStore.store.enableHalf }
        onClick={ () => goalStore.store.enableHalf = !goalStore.store.enableHalf }
      >
      </input>
      Enable Half
    </label>
    { goalStore.store.teams.map((team, idx) => {
      return(
        <Button
          key={idx}
          action={ () => scoreGoal(team) }
          label={`Goal ${team}`}
        />
      )
    }) }
    { goalStore.store.teams.map((team, idx) => {
      return(
        <button key={ idx } onClick={ () => goalStore.store[team].inOuts ++ }>
          In-Out {team}
        </button>
      )
    }) }
    {goalStore.store.enableHalf &&
      <button onClick= { () => goalStore.store.half ++ }>
        Score Half
      </button>
    }
  </div>
)

export default observer(Commands);
