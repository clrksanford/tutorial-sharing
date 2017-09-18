import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// Components
import AddLink from './components/AddLink';
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Profile from './components/Profile';
import App from './routes/App/index';
import GithubCallback from './components/GithubCallback.js';
import PrivateRoute from './PrivateRoute';
import ContextWrapper from './ContextWrapper';

render(
  <BrowserRouter>
    <ContextWrapper>
      <Route path='/login' component={Login}/>
      <Route path='/github_callback' component={GithubCallback}/>
      <PrivateRoute exact path='/' component={App}/>
      <PrivateRoute path='/profile/:user_id' component={Profile}/>
      <PrivateRoute path='/create' component={CreateProfile}/>
      <PrivateRoute path='/add_link' component={AddLink}/>
    </ContextWrapper>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
