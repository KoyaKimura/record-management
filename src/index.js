import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import mainView from './components/main_view'
import './index.css';
import * as serviceWorker from './serviceWorker';
import monthView from './components/month_view';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/2020" component={monthView} />
      <Route path="/4" component={mainView} />
      <Route path="/" component={mainView} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
