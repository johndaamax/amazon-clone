import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <Home />
        </Route>
        <Route path='/checkout' exact>
          <Header />
          <Checkout />
        </Route>
        <Route path='/login' exact>
          <h1>Login Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
