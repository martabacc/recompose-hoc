import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { createReduxBoundAddListener,
  createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const {dispatch, nav} = props
  const addListener = createReduxBoundAddListener('root')
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({nav: state.nav})
export default connect(mapStateToProps)(ReduxNavigation)
