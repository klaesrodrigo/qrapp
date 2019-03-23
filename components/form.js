import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import t from 'tcomb-form-native';
import RadioGroup from 'react-native-radio-buttons-group'


const Form = t.form.Form;


const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.Number,
  
});

const options = {
  order: ['name', 'email', 'phone'],
  fields: {
    name: {
      label: 'Nome do visitante',
      placeholder: 'Nome completo',
      error: "Campo obrigatório",
    },
    email: {
      label: 'Email do visitante',
      placeholder: 'email@mail.com',
      error: "Campo obrigatório",
    },
    phone: {
      label: 'Telefone do visitante',
      placeholder: ' XX XXXXX XXXX',
      error: "Campo obrigatório",
    }
  },
  stylesheet: formStyles,
};

export default class Formulario extends Component {

  onPressButton = async () => {
    const {navigate} = this.props.navigation

    const value = this._form.getValue()
    
    if(value !== null){
      try{
        []
      await AsyncStorage.multiSet([['name', value.name], ['email', value.email], ['phone', ''+value.phone]])
      
      navigate('QrCode')
     } catch(err){
       console.log(err)
     }
    }
    
  }

  state = {
    data: [
      {
          label: 'WhatsApp',
          value: true
      }
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />

        <View style={styles.ViewRadioButton}>
          <Text style={styles.TextRadioButton}>Enviar convite via:</Text>
          <RadioGroup style={styles.RadioButton} radioButtons={this.state.data} onPress={this.onPress} />
        </View>
       
        <View style={styles.ViewButtom}>
          <TouchableOpacity
           style={styles.Button}
           onPress={this.onPressButton}>
            <Text style={styles.TextTouchableOpacity}> Confirma </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'gray',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  ViewRadioButton: {
    marginTop: 20,
    alignItems: 'flex-start'
  },
  TextRadioButton: {
    fontSize: 18,
  }, 
  ViewButtom: {
    alignItems: 'center',
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 50,
    borderRadius: 20,
    width: 200,
  },
  TextTouchableOpacity: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});