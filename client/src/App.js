import React,{Fragment,useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllSongs from './components/Songs/allSongs';
import Song from './components/Songs/Song';
import './App.css';

import store from './store';
import {Provider} from 'react-redux';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FavSongs from './components/Songs/favSongs';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: "LOGOUT" });
    });
  }, []);
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/login' component={Login} /> 
          <Route exact path='/register' component={Register} /> 
          <PrivateRoute exact path='/allsongs' component={AllSongs} /> 
          <PrivateRoute exact path='/favsongs' component={FavSongs} /> 
          <PrivateRoute exact path='/allsongs/:id' component={Song} /> 
          <PrivateRoute exact path='/favsongs/:id' component={Song} /> 
        </Switch>
        <Footer />
      </Fragment>
    </Router>
    </Provider>
  )
}

export default App;