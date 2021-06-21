import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from "./component/info/Info";
import Calculate from './component/calculate/Calculate';
import Home from './component/Home';
import Output from './component/output/Output';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Info/>
            <Calculate/>
          </Route>
          <Route path="/output" component={Output}>
            <Output/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
