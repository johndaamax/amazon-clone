import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
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
