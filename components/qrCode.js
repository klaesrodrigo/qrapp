//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Share, Linking} from 'react-native'

const baseUrlAxios = 'https://servidor-catraca.herokuapp.com/enviarQRCode'

const baseUrl = 'https%3A%2F%2Fapi.qrserver.com%2Fv1%2Fcreate-qr-code%2F%3Fsize%3D150x150%26data%3D'
 
class QrCode extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      // Default Value of the TextInput
      valueForQRCode: 'teste',
      // Default value for the QR Code
      inputPhone: '',
      wasGenerated: false
    };
  }
  getTextInputValue = async () => {
    const date = new Date()
    const text = await 'test' + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes() +  date.getSeconds()

    await this.setState({ valueForQRCode: text, wasGenerated: true });
    console.log(this.state.valueForQRCode)
  }

  onShare = async () => {

    const value = `Segue link para teste! ${baseUrl}${this.state.valueForQRCode} Acesso o link`
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
        url: this.state.valueForQRCode
      }),
    })
    Linking.openURL(`whatsapp://send?text=${value}` )
  
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={styles.qrCode}
          source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.state.valueForQRCode}`}}
        />
        <TextInput
          // Input to get the phone to send QRCode
          style={[styles.TextInputStyle]}
          onChangeText={phone => this.setState({ inputPhone: phone })}
          keyboardType = 'numeric'
          underlineColorAndroid="transparent"
          placeholder="Enter phone to send QR Code"
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
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
    paddingTop: 30,
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
    width: '100%',
    paddingTop: 5,
    marginTop: 5,
    paddingBottom: 5,
    backgroundColor: '#F44336',
    marginBottom: 10,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  qrCode: {
    margin:5,
    width: 150,
    height: 150
  }
});