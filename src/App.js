import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from './components/Home/Home';
import MainDrawer from './components/Main/Main';
import Posts from './components/Posts/Posts'

function App() {
  return (
    <Router>
      <div>
        <MainDrawer/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/posts"><Posts/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
