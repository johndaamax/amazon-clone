import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login';

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
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
