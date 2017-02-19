import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

const Commands = () => (
  <div className="commands">
    <div className="in-out-container">
      <button
        className="in-out-btn"
        onClick={ () => goalStore.store.gamelle = true }
        >
          Gamelle !
      </button>
    </div>
    <div className="half-container">
      <label className="toggle-half">
        <input
          type="checkbox"
          checked={ goalStore.store.enableHalf }
          onClick={ () => goalStore.store.enableHalf = !goalStore.store.enableHalf } />
        Enable Half
      </label>
      {goalStore.store.enableHalf &&
        <button onClick= { () => goalStore.store.half ++ }>
          Score Half
        </button>
      }
    </div>
  </div>
)

export default observer(Commands);
