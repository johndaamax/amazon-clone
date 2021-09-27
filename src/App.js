import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import AuthFormPage from './pages/AuthFormPage';

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
          <AuthFormPage login={true} />
        </Route>
        <Route path='/changePassword' exact>
          <AuthFormPage login={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
