import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

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
    <div className="in-out-container">
      { goalStore.store.teams.map((team, idx) => {
        return(
          <button
            className="in-out-btn"
            key={ idx }
            onClick={ () => goalStore.store[team].inOuts ++ }
          >
            Gamelle {team} !
          </button>
        )
      }) }
    </div>
    {goalStore.store.enableHalf &&
      <button onClick= { () => goalStore.store.half ++ }>
        Score Half
      </button>
    }
  </div>
)

export default observer(Commands);
