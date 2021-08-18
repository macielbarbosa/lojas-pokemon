import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { StringsProvider } from 'strings'
import { DragonStore } from './DragonStore'

import { FireStore } from './FireStore'
import { StoreSelector } from './StoreSelector'
import { WaterStore } from './WaterStore'

export class AppComponent extends Component {
  constructor(props) {
    super(props)
    document.title = 'Lojas Pokemon'
  }

  render() {
    return (
      <StringsProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StoreSelector} />
            <Route exact path="/agua" component={WaterStore} />
            <Route exact path="/fogo" component={FireStore} />
            <Route exact path="/dragao" component={DragonStore} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </StringsProvider>
    )
  }
}
