import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <h1>Welcome to Amazon Clone. WIP</h1>
        </Route>
        <Route path='/checkout' exact>
          <h1>Checkout Page</h1>
        </Route>
        <Route path='/login' exact>
          <h1>Login Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
