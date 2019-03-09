import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';
import RadioGroup from 'react-native-radio-buttons-group';


export default class TypePerson extends Component {
  state = {
    data: [
        {
            label: 'Visitante',
        },
        {
            label: 'Prestador de Serviços',
        },
        { 
            label: 'Múltiplos visitantes (Festas e eventos)',
        }
    ],
};

// update state
onPress = data => this.setState({ data });


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
     </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 80,
  },
  Image: {
    alignItems: 'center',
    marginBottom: 60,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 60
  }
});
