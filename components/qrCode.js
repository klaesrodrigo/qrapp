//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Share, Linking, AsyncStorage} from 'react-native'

const baseUrlAxios = 'https://servidor-catraca.herokuapp.com/enviarQRCode'

const baseUrl = 'https%3A%2F%2Fapi.qrserver.com%2Fv1%2Fcreate-qr-code%2F%3Fsize%3D150x150%26data%3D'
 
class QrCode extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      valueForQRCode: 'teste',
      typeService: 0,
      name: 'default',
      email: 'default@mail',
      phoneNumber: '',      
      wasGenerated: false,
      wasSaved: false,
      isLoading: false,
    };
    this.getData()
  }

  getData = async () => {console.log('Oi: ' + await AsyncStorage.getItem('teste'))}
  getTextInputValue = async () => {
    const date = new Date()
    const text = await 'mob' + date.getMonth() +
                       date.getFullYear() + date.getHours() +
                       date.getMinutes() +  date.getSeconds()

    await this.setState({ valueForQRCode: text, wasGenerated: true, wasSaved: true });

    console.log(this.state.valueForQRCode)
  }

  onShare = async () => {

    const value = `${baseUrl}${this.state.valueForQRCode}`
    

    if(!this.state.wasSaved){
      const results = await fetch(baseUrlAxios, {
        method: 'POST',headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: this.state.valueForQRCode,
          guest_type: 0,
          guest_name: "Rodrigo",
          guest_email: "matheus@matheus.com.br",
          guest_fone: "(53)999022222"
        }),
      })
      this.setState({wasSaved: true})
    }

    if(this.state.phoneNumber === ''){
      Linking.openURL(`whatsapp://send?text=${value}` )
    } else {
      Linking.openURL(`whatsapp://send?text=${value}&phone=55${this.state.phoneNumber}` )
    }
  
  }
  render() {
    return (
        <View style={styles.MainContainer}>
        <Image
          style={styles.qrCode}
          source={
            { uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.state.valueForQRCode}`
            }}
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code</Text>
        </TouchableOpacity>
        {this.state.wasGenerated ?
        <TouchableOpacity
          onPress={this.onShare}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Compartilhar </Text>
        </TouchableOpacity> 
        : null}
        </View>
    );
  }
}
export default QrCode;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 30
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 30,
    marginLeft: 75,
    marginRight: 75,
    borderRadius: 20
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  qrCode: {
    margin:5,
    width: 250,
    height: 250
  }
  
});