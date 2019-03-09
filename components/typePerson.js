import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
import { Item } from '../node_modules/react-native/Libraries/Components/Picker/Picker';


export default class TypePerson extends Component {
  state = {
    data: [
        {
            label: 'Visitante',
            value: '0',
            selected: true
        },
        {
            label: 'Prestador de Serviços',
            value: '1',
            selected: false
        },
        { 
            label: 'Múltiplos visitantes (Festas e eventos)',
            value: '2',
            selected: false
        }
    ],
}

// update state radio button
onPress = data => this.setState({ data });

// state button
onPressButton = async () => {
  const {navigate} = this.props.navigation
  this.state.data.some((item, key, array) => {
    if(item["selected"]){
      payload = item["value"]
    }
  })
  await AsyncStorage.setItem('guest_type',payload)
  
  navigate('Form')
}

  render() {

    return (
      <View style={styles.MainContainer}>
        
        <View style={styles.Image}>
          <Image 
            style={{width: 100, height: 100}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>

        <Text style={styles.Title}>Quem você gostaria de autorizar a entrar no condomínio?</Text>
        
        <View>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
        </View>
        <View style={styles.ViewButton}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.onPressButton()}
          >
             <Text style={styles.TextTouchableOpacity}> Próximo </Text>
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 30,
  },
  Image: {
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30
  },
  ViewButton: {
    alignItems: 'center',
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
    width: 200
  },
  TextTouchableOpacity: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
