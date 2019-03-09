import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import QrCode from './components/qrCode'
import TypePerson from './components/typePerson'
import Form from './components/form';
// import Form from './components/form'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.MainContainer}>
        <TypePerson />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teste: {
    flex: 1,
    alignItems: 'center'
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  }
})
