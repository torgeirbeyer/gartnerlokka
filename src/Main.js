import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Takk from './Takk';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/takk' component={Takk}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Main;