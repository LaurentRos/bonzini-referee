import { observer } from 'mobx-react';
import React from 'react';

import Button from './Button'
import goalStore from '../GoalStore'

@observer
class Commands extends React.Component {
  render() {

    return (<div className="commands">
      { goalStore.store.teams.map((team, idx) => {
        return(
          <Button
            key={idx}
            action={ () => goalStore.store[team].goals ++ }
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
    </div>)
  }
}

export default Commands;
