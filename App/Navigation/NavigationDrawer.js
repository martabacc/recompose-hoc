import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import CardExample from '../Containers/CardExample'
import DrawerContent from '../Containers/DrawerContent'
import HomeScreen from '../Containers/HomeScreen'
import ListviewExample from '../Containers/ListviewExample'

const NavigationDrawer = DrawerNavigator({
  HomeScreen: {screen: HomeScreen},
  ListviewExample: {screen: ListviewExample},
  CardExample: {screen: CardExample}
},
  {
    initialRouteName: 'HomeScreen',
    contentComponent: props => <DrawerContent {...props} />
  }
)

export default NavigationDrawer
