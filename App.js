import React from 'react'
import QrCode from './components/qrCode'
import TypePerson from './components/typePerson'
import Form from './components/form'
// import Form from './components/form'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: { screen: TypePerson },
  Form: { screen: Form },
  QrCode: { screen: QrCode }
})

const App = createAppContainer(MainNavigator)

export default App
