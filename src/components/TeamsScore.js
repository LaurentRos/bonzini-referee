import { observer } from 'mobx-react';
import React from 'react';

import goalStore from '../GoalStore'

const TeamsScore = () => (
  <div className="teams-score">
    { goalStore.score }
  </div>
)

export default observer(TeamsScore);
