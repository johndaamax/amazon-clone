import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './context/AuthProvider'
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import AuthFormPage from './pages/AuthFormPage';

function App() {

  const { token } = useAuthContext();
  const isLoggedIn = !!token;
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <Home />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/login'>
          {!isLoggedIn ?
            <AuthFormPage activeForm='login' /> :
            <Redirect to='/' />
          }
        </Route>
        <Route path='/register'>
          {!isLoggedIn ?
            <AuthFormPage activeForm='register' /> :
            <Redirect to='/' />
          }
        </Route>
        <Route path='/changePassword'>
          {isLoggedIn ?
            <AuthFormPage activeForm='changePassword' /> :
            <Redirect to='/' />
          }
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
