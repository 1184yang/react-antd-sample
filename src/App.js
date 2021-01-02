import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home, About } from './pages';

const App = () => {
 
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
        </Switch>
        
      </div>
    </div>
  );
};
export default App;
