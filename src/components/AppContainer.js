import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import React from 'react';

import Commands from './Commands'
import ScoreButtons from './ScoreButtons'
import '../style/style.css';

@observer
class AppContainer extends React.Component {
  render() {
    return (<div className="app-container">
      <h1 className="app-title">Bonzini Referee</h1>
      <ScoreButtons />
      <Commands />
      {/* <DevTools /> */}
    </div>);
  }
}

export default AppContainer;
