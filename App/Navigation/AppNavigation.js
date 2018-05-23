import React from 'react'
import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
// screens identified by the router
import Login from '../Containers/LoginScreen'
import NavigationDrawer from './NavigationDrawer'

const PrimaryNav = StackNavigator(
  {
    Login: {screen: Login},
    LaunchScreen: {screen: LaunchScreen},
    NavigationDrawer: {screen: NavigationDrawer}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default PrimaryNav
