import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Post } from './pages';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:slug">
          <Post />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
