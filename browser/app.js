// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'


render(
  <Provider store={ store }>
  <Router history={ browserHistory }>
  </Router>
  </Provider>,
document.getElementById('main')
)
