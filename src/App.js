import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from './components/Home/Home';
import MainDrawer from './components/Main/Main';

function App() {
  return (
    <Router>
      <div>
        <MainDrawer/>
        <Switch>
          <Route exact path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
