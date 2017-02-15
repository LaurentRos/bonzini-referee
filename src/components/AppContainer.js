import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import React from 'react';

import Commands from './Commands'
import TeamsScore from './TeamsScore'
import '../style/style.css';

@observer
class AppContainer extends React.Component {
  render() {
    return (<div className="app-container">
      <h1 className="app-title">Bonzini Referee</h1>
      <TeamsScore />
      <Commands />
      <DevTools />
    </div>);
  }
}

export default AppContainer;
