import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from "./component/info/Info";
import Calculate from './component/calculate/Calculate';
import Output from './component/output/Output';

function App() {

  const database = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(database === null ? { bmiData:[] } : database)
  if(database === null) {
    localStorage.setItem('user', JSON.stringify({ bmiData:[] }))
  }

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Info/>
            <Calculate user={user} setUser={setUser}/>
          </Route>
          <Route path="/output" component={Output}>
            <Output data={user} setUser={setUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
