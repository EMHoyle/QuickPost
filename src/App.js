import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home"><Home/></Route>
          <Route exact path="/posts"><Posts/></Route>
          <Redirect to="/home"/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
