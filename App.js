
import { Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';

import Base from './Base/Base';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div >
      <Switch>
        <Router exact path="/">
          <Dashboard/>
        </Router>
        <Router  path="/buttons">
          <Buttons/>
        </Router>
      </Switch>
      <Base/>
      

    </div>
  );
}

export default App;
