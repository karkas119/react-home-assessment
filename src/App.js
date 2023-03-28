import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { routes } from './routes'

function App () {

  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, Component }, key) => {
              return (
                <Route
                  exact
                  path={path}
                  key={key}
                  render={() => {
                    return <Component/>
                  }}
                />
              )
            }
          )}
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
