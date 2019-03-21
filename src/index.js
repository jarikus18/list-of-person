import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/Lesson';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './router/components/home/home';
import Contacts from './router/components/contacts/contacts';
import Users from './router/components/users/users';
import Person from './router/components/person/person';
import Error from './router/components/error/error';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/person' component={Users} />
        <Route path='/person/:id' component={Person} />
        <Route path='*' component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
