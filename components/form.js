import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput  } from 'react-native-paper'
import RadioGroup from 'react-native-radio-buttons-group'
import { Button } from 'react-native-elements'



export default class Form extends React.Component {
  state = {
    nome: '',
    email: '',
    phone: '',
    data: [
      {
          label: 'WhatsApp',
      }
    ]
  };

  onPress = data => this.setState({ data });

  render(){

    return (
      <View style={styles.Container}>
        <TextInput style={styles.TextInput}
          label='Nome do visitante'
          placeholder='Nome Completo'
          value={this.state.text}
          onChangeText={nome => this.setState({ nome })}
        />
        <TextInput style={styles.TextInput}
          label='Email do visitante'
          placeholder='email@email.com'
          value={this.state.text}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput style={styles.TextInput}
          label='Telefone celular do visitante'
          placeholder='(DDD) XXXXX XXXX'
          value={this.state.text}
          onChangeText={phone => this.setState({ phone })}
        />
        <View style={styles.ViewRadioButton}>
          <Text style={styles.TextRadioButton}>Compartilhar via:</Text>
          <RadioGroup style={styles.RadioButton} radioButtons={this.state.data} onPress={this.onPress} />

        </View>


        <Button style={{ color: '#000' }}
          title="Confirma"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 100
  },
  TextInput: {
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'transparent'
  },
  ViewRadioButton:{
    flex: 1,
    marginTop: 20
  },
  TextRadioButton:{
    fontSize: 20,
    textAlign: 'center'
  },
  RadioButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }, 
  Button: {
    marginBottom: 20,
    width: 50,
    color: '#000'
  }
});